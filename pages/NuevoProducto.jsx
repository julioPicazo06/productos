

import React, { useContext, useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import Errores from '../components/layouts/ui/Errores'
import useValidator from '../hooks/useValidator'
import { FirebaseContext } from '../firebase'
import FileUploader from 'react-firebase-file-uploader'
import Router, { useRouter } from 'next/router'
import { validarCrearProducto } from '../validar/validarCrearProducto'

const STATE_INCIAL = {
nombreProducto : '',
empresa : '',
imagen : '',
url : '',
descripcion : ''
}


const NuevoProducto = () => {
  const [error, setError] = useState(false)
  const [nombreImagen, setNombreImagen] = useState('')
  const [subiendo, setSubiendo] = useState(false)
  const [progreseo, setProgreseo] = useState(0)
  const [urlImagen, setUrlImagen] = useState('')
  const router = useRouter()
  const crearProducto = async ()=> {
    // si el usuario no esta autenticado 
    if(!usuario){
      return router.push('/login')
    }
    // crear el objeto de nuevoProducto
    const producto = {
        nombreProducto ,
        empresa ,
        imagen : urlImagen,
        url ,
        descripcion ,
        votos : 0,
        creado : Date.now()
    }

    firebase.db.collection('productos').add(producto)
    return router.push('/')
    // insertarlo en la base de datos
    

  }

const handleUploadStart =()=> {
  setProgreseo(0)
  setSubiendo(true)
}
const handleUploadError =(error)=> {
  setSubiendo(error)
  console.log(error)
}
const handleUploadSuccess =(nombre)=> {
  setProgreseo(100)
  setSubiendo(false)
  setNombreImagen(nombre)
  firebase
    .storage
    .ref("productos")
    .child(nombre)
    .getDownloadURL()
    .then(url=> {
      console.log(url)
      setUrlImagen(url)
    })
}
const handleProgress =(progreso)=>setProgreseo({progreso}) 

  const { usuario , firebase } = useContext(FirebaseContext)

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidator(
    STATE_INCIAL,
    validarCrearProducto,
    crearProducto
  )
  const {  nombreProducto , empresa , imagen , url , descripcion  } = valores
 



  return (

    <Layouts>
      <h1 className="titulo">Nuevo Producto</h1>

      <form
        className="container formulario"
        onSubmit={handleSubmit}
        noValidate>
        

            <fieldset>
              <legend>Informacion General</legend>
            
        <div className="form-group row">
          <label htmlFor="nombreProducto">Nombre Producto</label>
          <input
            type="text"
            id="nombreProducto"
            placeholder="Nombre del Producto"
            name="nombreProducto"
            value={nombreProducto}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}  />
            
        </div>
        {
          errores.nombreProducto && (
              <Errores errores={errores.nombreProducto}/> )
        }


           <div className="form-group row">
          <label htmlFor="empresa">Empresa</label>
          <input
            type="text"
            id="empresa"
            placeholder="Nombre de la empresa"
            name="empresa"
            value={empresa}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}  />
            
        </div>
        {
          errores.empresa && (
              <Errores errores={errores.empresa}/> )
        } 
        
        
        
    
          <div className="form-group row">
          <label htmlFor="imagen">Imagen</label>
          <FileUploader
          accept="image/*"
            type="file"
            id="imagen"
            name="imagen"
            randomizeFilename
            storageRef={firebase.storage.ref("productos")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
            />
            
        </div>
        
    
   
      

        <div className="form-group row">
        <label htmlFor="url">Url</label>
        <input
          type="text"
          id="url"
          placeholder="url"
          name="url"
          value={url}
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}  />
          
      </div>
      {
        errores.url && (
            <Errores errores={errores.url}/> )
      } 
      </fieldset>

      <fieldset>
      <legend>Sobre tu producto</legend>
      <div className="form-group row">
        <label htmlFor="descripcion">Descripcionrl</label>
        <textarea
          id="descripcion"
          placeholder="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={(e) => handleChange(e)}
          onBlur={handleBlur}  />
          
      </div>
      {
        errores.descripcion && (
            <Errores errores={errores.descripcion}/> )
      } 

      </fieldset>
      
   

        {
          error && <Errores errores={error}/>
        }
        <input type="submit" value="Crear Producto" />



      </form>
    </Layouts>
  )
}

export default NuevoProducto
