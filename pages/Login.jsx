

import React, { useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import Errores from '../components/layouts/ui/Errores'
import useValidator from '../hooks/useValidator'
import { validarIniciarSesion } from '../validar/validarIniciarSesion'
import firebase from '../firebase'
import Router from 'next/router'

const STATE_INCIAL = {
  email: '',
  password: ''
}

const Login = () => {
  const [error, setError] = useState(false)
  
  const iniciarSesion = async ()=> {
    try {
       const usuario = await firebase.login(email, password)
        Router.push('/')
      } catch (error) {
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
    validarIniciarSesion,
    iniciarSesion
  )
  const {  email, password } = valores




  return (

    <Layouts>
      <h1 className="titulo">Iniciar Sesion</h1>

      <form
        className="container formulario"
        onSubmit={handleSubmit}
        noValidate>
        

            
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
        <input type="submit" value="Iniciar Sesion" />



      </form>
    </Layouts>
  )
}

export default Login
