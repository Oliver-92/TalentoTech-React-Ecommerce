import '../styles/productosContainer.css'
import Card2 from './card2'
import { useState, useEffect } from 'react'

function ProductosContainer2({}) {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch('https://6827a00a6b7628c52910f842.mockapi.io/data')
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
                        />
                    ))}
               </div>
        )
    }
}

export default ProductosContainer2