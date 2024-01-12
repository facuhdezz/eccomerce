import { useEffect } from "react";
import { useState } from "react";

const Card = ({ img, description, id }) => {
    const [mostrar, setMostrar] = useState("none") 

    const hoverImg = () => {
        setMostrar((prevMostrar) => (prevMostrar === "none" ? "block" : "none")); // Cuando se hace un hover a la imagen se ejecuta la función modificando el valor de mostrar
    }

    useEffect(() => {
        document.getElementById(`titulo${id}`).style.display = mostrar; // cada vez que el mostrar cambia, el nuevo valor se agrega como estilo suplantando al otro
    }, [mostrar])                                                       // con esto consigo que al hacer hover en la imagen aparezca el <h1>

    return (
        <div id={id} onMouseEnter={hoverImg} onMouseLeave={hoverImg}> {/* Utilizo onMouseEnter y onMouseOver para ejecutar la funcion hoverImg al pasar el mouse por encima del div */}
            <img src={img} alt={description}/>
            <div className="tituloCat">
                <h1 id={"titulo"+id}>{description}</h1>
            </div>
        </div>
    )
}

export default Card;