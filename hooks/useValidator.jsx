
import React, { useEffect, useState } from 'react'


const useValidator = (stateInicial , validar , fn) => {
    
    const [valores, setValores] = useState(stateInicial)
    const [errores, setErrores] = useState({})
    const [submitForm, setSubmitForm] = useState(false)

    useEffect(() => {
        if(submitForm){
            const noErrores = Object.keys(errores).length===0
            if(noErrores){
                fn()
            }
            setSubmitForm(false)
        }
    }, [errores])

    // funcion que se ejecuta conforme el usuario escribe algo
    const handleChange = ({target:{name,value}})=> {
        setValores({
            ...valores ,
            [name]: value
        })
    }

// funcion que se ejecuta en el submit
    const handleSubmit = (e)=> {
        e.preventDefault()
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion)
        setSubmitForm( true )
        
    }

    const handleBlur = ()=> {
        const erroresValidacion = validar(valores)
        setErrores(erroresValidacion)
    }
    return {
        valores ,
        errores ,
        submitForm,
        handleSubmit,
        handleChange,
        handleBlur
    }
}

export default useValidator
