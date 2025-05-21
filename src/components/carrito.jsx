import '../styles/carrito.css'
import CarritoCard from './carritoCard'
import { Navigate } from 'react-router-dom'
import { CarritoContext } from '../contexts/CarritoContext'
import { useContext } from 'react'

export default function Carrito({ usuarioLogueado }) {

    const {productosCarrito, vaciarCarrito, borrarProductoCarrito} = useContext(CarritoContext);
    console.log("Productos: " + productosCarrito) 

    const total = productosCarrito.reduce(
        (suma, producto) => suma + producto.price * producto.cantidad, 0
    )

    function funcionDisparadora(id) {
        borrarProductoCarrito(id)
    }

    function funcionDisparadora2() {
        vaciarCarrito()
    }

    if (!usuarioLogueado) {
        return (
            <Navigate to="/login" replace />
        )
    }

    return (
        <div className="carrito-container">
            <div className="carrito-productos-container">
                {productosCarrito.length > 0
                    ? productosCarrito.map((producto) => (
                        <CarritoCard
                            producto={producto}
                            funcionDisparadora={funcionDisparadora}
                            key={producto.id}
                        />
                    ))
                    : <h2 className='carrito-vacio'>No hay productos en el carrito</h2>
                }
            </div>
            <h2>Total: ${total ? total.toFixed(2) : 0}</h2>
            <button className='btn' onClick={funcionDisparadora2}>Vaciar carrito</button>
        </div>
    )
}
