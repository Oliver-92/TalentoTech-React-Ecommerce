import { dispararSweetBasico } from '../assets/sweetAlerts';
import '../styles/productosContainer.css'
import { useState } from 'react'
import { Link } from "react-router-dom";

function Card2({ producto, funcionCarrito }) {
    const { title, images, price } = producto;
    const [cantidad, setCantidad] = useState(1);

    function agregarAlCarrito() {
        dispararSweetBasico("Producto agregado", "El producto ha sido agregado al carrito", "success", "Aceptar");
        funcionCarrito({ ...producto, cantidad });
        console.log(producto, cantidad);
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
            <img className="producto-image" src={images[0]} alt={title} />
            <p>Precio: ${price}</p>
            <div className="card-options">
                <button onClick={restarContador}>-</button>
                <span>{cantidad}</span>
                <button onClick={sumarContador}>+</button>
                <div>
                    <button className="btn" onClick={agregarAlCarrito}>Agregar al carrito</button>
                    <Link to={"/productos/" + producto.id} ><button className="btn">Ver detalles...</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card2