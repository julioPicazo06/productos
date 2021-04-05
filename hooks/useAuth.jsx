import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
const useAuth = () => {

    const [usuarioAuth, setUsuarioAuth] = useState(null)

    useEffect(() => {
        const unsuscribre = firebase.auth.onAuthStateChanged(user => {
            if(user){
                setUsuarioAuth(user)
            }else{
                setUsuarioAuth(null)
            }
        })
        return ()=> unsuscribre()
        }, [])

        return usuarioAuth
}

export default useAuth
