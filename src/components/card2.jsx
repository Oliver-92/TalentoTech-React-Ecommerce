import { dispararSweetBasico } from '../assets/sweetAlerts';
import '../styles/productosContainer.css'
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { CarritoContext } from "../contexts/CarritoContext"

function Card2({ producto }) {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const { title, image, price } = producto;
    const [cantidad, setCantidad] = useState(1);

    function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...producto, cantidad });
  }

    function sumarContador() {
        setCantidad(prevCantidad => prevCantidad + 1);
    }

    function restarContador() {
        setCantidad(prevCantidad => prevCantidad > 1 ? prevCantidad - 1 : 1);
    }
    
    return (
        <div className="producto-card">
            <h1>{title}</h1>
            <img className="producto-image" src={image} alt={title} />
            <p>Precio: ${price}</p>
            <div className="card-options">
                <button onClick={restarContador}>-</button>
                <span>{cantidad}</span>
                <button onClick={sumarContador}>+</button>
                <div>
                    <button className="btn" onClick={funcionCarrito}>Agregar al carrito</button>
                    <Link to={"/productos/" + producto.id} ><button className="btn">Ver detalles...</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card2