import Link from 'next/link'
import React, { Fragment, useContext } from 'react'
import { FirebaseContext } from '../../firebase'
import Navegacion from './Navegacion'
import Buscar from './ui/Buscar'

const Header = () => {
    const { usuario , firebase } = useContext(FirebaseContext)
    return (
        <header className="cabezera ">
            <div className="contenedorHeader">
                <div className="menuIzq">
                <Link href="/" >
                    <p className="logo mr-2">p</p>
                </Link>
                <Buscar/>
                <Navegacion/>
                </div>
                {usuario ? (
                   <Fragment>
                   <div className="menuDer">
                   <p>Hola : {usuario.displayName}</p>
                   <button
                     className=" btn btn-outline-light mr-2"
                     type="button"
                     onClick={()=> firebase.cerrarSesion()}>Cerrar
                     sesión</button>
                   
                   </div>
                   </Fragment>
                ):(
                    <Fragment>
                    <div className="menuDer">
                    <Link href="/Login"><button className="btn btn-outline-light mr-2" type="button">Login</button></Link>
                    <Link href="/CrearCuenta"><button className="btn btn-outline-light">Crear cuenta</button></Link>
                    </div>
                    </Fragment>

                )}
            </div>
        </header>
    )
}

export default Header
