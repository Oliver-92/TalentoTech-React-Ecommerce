import '../styles/productosContainer.css'

function CarritoCard({ producto, funcionDisparadora }) {
    const { title, description, images, price, cantidad } = producto;

    function borrarProducto() {
        funcionDisparadora(producto.id)
    }
    
    return (
        <div className="carrito-card">
            <img className="carrito-image" src={images[0]} alt={title} />
            <h1>{title}</h1>
            <p>Precio unitario: ${price}</p>
            <p>Cantidad: {cantidad}</p>
            <p>Subtotal: ${(price * cantidad).toFixed(2)}</p>
            <button onClick={borrarProducto}>Borrar</button>
        </div>
    )
}

export default CarritoCard