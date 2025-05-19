import '../styles/productosContainer.css'
import Card2 from './card2'
import { useState, useEffect } from 'react'

function ProductosContainer2({funcionCarrito}) {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(datos => {
                console.log(datos);
                setProductos(datos);
                setCargando(false);
            })
            .catch(err => {
                console.log(err);
                setError('Error al cargar los productos');
                setCargando(false);
            });
    }, [])

    function functionEnProductos(producto) {
        funcionCarrito(producto)
    }

    if (cargando) {
        return <h1 style={{flex: 1}}>Cargando...</h1>
    } else if (error) {
        return <h1>{error}</h1>
    } else {
        return (
                <div className="productos-container">
                    {productos.map((producto) => (
                        <Card2
                            producto={producto}
                            key={producto.id}
                            funcionCarrito={functionEnProductos}
                        />
                    ))}
               </div>
        )
    }
}

export default ProductosContainer2