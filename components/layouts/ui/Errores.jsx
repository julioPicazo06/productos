import React from 'react'


const Errores = ({errores}) => {
    return (
        <div className="alert alert-danger alert-dismissible fade show row" role="alert">
              
              <span>
                {errores}
              </span>
              <strong />
        </div>
    )
}

export default Errores
