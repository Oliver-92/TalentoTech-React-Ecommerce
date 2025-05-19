import '../styles/carrito.css'
import CarritoCard from './carritoCard'

export default function Carrito({ productosCarrito, funcionBorrar }) {

    const total = productosCarrito.reduce(
        (suma, producto) => suma + producto.price * producto.cantidad, 0
    )

    function funcionDisparadora(id) {
        funcionBorrar(id)
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
        </div>
    )
}
