import React from 'react'

const FormularioSesion = () => {
    const[usuario, setUsuario] = useState ('');
    const[password, setPassword] = useState ('');

  return (
    <>
    Formulario Sesion

    <form action=''>
        

        <div>
            <label htmlFor='usuario'>Usuario</label>
            <input type="text" id="usuario" name="usuario"></input>
        </div>

        <div>
            <label htmlFor='password'>Usuario</label>
            <input type="password" id="password" name="password"></input>
        </div>
        
        

    </form>
    
    
    
    
    
    </>

  )
}

export default FormularioSesion