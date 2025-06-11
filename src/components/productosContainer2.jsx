import '../styles/productosContainer.css'
import Card2 from './card2'
import { useState, useEffect } from 'react'
import { useProductosContext } from '../contexts/ProductosContext'

function ProductosContainer2({ }) {
    const { productos, obtenerProductos } = useProductosContext();
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        obtenerProductos().then((productos) => {
            setCargando(false);
        }).catch((error) => {
            setError('Hubo un problema al cargar los productos.');
            setCargando(false);
        })
    }, []);

    if (cargando) {
        return <h1 style={{ flex: 1 }}>Cargando...</h1>
    } else if (error) {
        return <h1>{error}</h1>
    } else {
        return (
            <div className="productos-container">
                {productos.map((producto) => (
                    <Card2
                        producto={producto}
                        key={producto.id}
                    />
                ))}
            </div>
        )
    }
}

export default ProductosContainer2