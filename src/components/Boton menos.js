import React, {useState} from "react";
import '../CSS/estilos.css'

const Boton_menos = () => {

    const [contador, setContador] = useState(0)


    return (

        <>
            <p className="titulo_btn_menos">Click para disminuir numero {contador}</p>
            <button className="boton_menos" onClick={()=> setContador(contador-1)}>Disminuir</button>
        </>
    )
}

export default Boton_menos