

import React, { useContext, useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import Errores from '../components/layouts/ui/Errores'
import useValidator from '../hooks/useValidator'
import { FirebaseContext } from '../firebase'
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
        url ,
        descripcion ,
        votos : 0,
        creado : Date.now()
    }

    firebase.db.collection('productos').add(producto)

    // insertarlo en la base de datos
    



  }

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
        
        
        
      {
        /* 
              <div className="form-group row">
          <label htmlFor="imagen">Imagen</label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            value={imagen}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}  />
            
        </div>
        
        */
      }
        { /*
          errores.imagen && (
              <Errores errores={errores.imagen}/> )
        */
            }


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
