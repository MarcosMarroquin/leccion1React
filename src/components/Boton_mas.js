import React, {useState} from "react";
import '../CSS/estilos.css'

const Boton_mas = () => {

    const [contador, setContador] = useState(0)


    return (

        <>
            <p className="titulo_btn_mas">Click para aumentar numero {contador}</p>
            <button className="boton_mas" onClick={()=> setContador(contador+1)}>Aumentar</button>
            
        </>
    )
}

export default Boton_mas