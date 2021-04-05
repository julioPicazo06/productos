
import React, { useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import Errores from '../components/layouts/ui/Errores'
import useValidator from '../hooks/useValidator'
import { validarCrearCuenta } from '../validar/validarCrearCuenta'
import firebase from '../firebase'
import Router from 'next/router'
// validaciones
const STATE_INCIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {

  const [error, setError] = useState(false)
  const crearCuenta = async() => {
    try {
      await firebase.registrar(nombre , email, password)
      Router.push('/')
    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
  }

  const {
    valores,
    errores,
    handleSubmit,
    handleChange,
    handleBlur
  } = useValidator(
    STATE_INCIAL,
    validarCrearCuenta,
    crearCuenta
  )
  const { nombre, email, password } = valores




  return (

    <Layouts>
      <h1 className="titulo">Crear Cuenta</h1>

      <form
        className="container formulario"
        onSubmit={handleSubmit}
        noValidate>
        
        <div className="form-group row">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            placeholder="Tu nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur} />
            
            </div>
            {
              errores.nombre && (
                  <Errores errores={errores.nombre}/> )
            }
            
        <div className="form-group row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Tu email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}  />
            
        </div>
        {
          errores.email && (
              <Errores errores={errores.email}/> )
        }
        <div className="form-group row">
          <label htmlFor="Pasword">Password</label>
          <input
            type="password"
            id="Pasword"
            placeholder="Tu Pasword"
            name="password"
            value={password}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}  />
            
        </div>
        {
          errores.password && (
              <Errores errores={errores.password}/> )
        }


        {
          error && <Errores errores={error}/>
        }
        <input type="submit" value="Crear cuenta" />



      </form>
    </Layouts>
  )
}

export default CrearCuenta
