export const validarCrearProducto =(valores)=> {
    let errores = {}

    if(!valores.nombreProducto){
        errores.nombreProducto= "El nombre es obligatorio"
    }
    if(!valores.empresa){
        errores.empresa= "El nombre de empresa es obligobligatorio"
    }
    if(!valores.url){
        errores.url= "La URL del producto es obligobligatorio"
    }else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)){
        errores.url = "Url no valida"

    }


    // validar descripcion

    if(!valores.descripcion){
        errores.descripcion= "Agrega una Descripcion"
    }


    return errores;
}

