import { useEffect, useState } from "react";

const ItemCount = ({stock, initial}) => {

    const [cantidad, setCantidad] = useState(parseInt(initial));

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        } else {
            alert('No hay más cantidad disponible');
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    useEffect(() => {localStorage.setItem("initial", cantidad)}, [cantidad]);

    return (
        <>
            <div className="contador">
                <h3>Cantidad</h3>
                <div className="cantidad">
                    <button id="decrementar" className="botonesContador" onClick={decrementar}> - </button>
                    <p>{cantidad}</p>
                    <button id="incrementar" className="botonesContador" onClick={incrementar}>+</button>
                </div>
                <div className="agregar">
                    <button id="agregarCarrito" className="agregarCarrito">Agregar al carrito</button>
                </div>
                <div className="comprar">
                    <button id="agregarCarrito" className="agregarCarrito">Comprar</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;