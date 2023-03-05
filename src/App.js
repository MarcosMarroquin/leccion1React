import React, { Component } from 'react'
import Usuarios from './components/usuarios';
import Footer from './components/Footer';
import Boton_mas from './components/Boton_mas';
import Boton_menos from './components/Boton menos';




const App = () => {

    const session = false;

    return (
       
        <>
        {session ? 
            <>
                <Usuarios/> 
                <Footer/>
            </>: 
            <><h1 className='titulo'>Debes Iniciar Session</h1>
            <Boton_mas/> 
            <Boton_menos/>
            <Footer/>
            </>}
        </>
        )
        
}
        

export default App