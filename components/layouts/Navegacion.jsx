import Link from 'next/link'
import React, { useContext } from 'react'
import { FirebaseContext } from '../../firebase'

const Navegacion = () => {
    const {usuario} = useContext(FirebaseContext)
    return (
        <div className="navegacion">
            <Link href="/">Inicio</Link>
            <Link href="/Populares">Populares</Link>
            {
                usuario&&(
                    <Link href="/NuevoProducto">Nuevo Producto</Link>
                )
            }
        </div>
    )
}

export default Navegacion
