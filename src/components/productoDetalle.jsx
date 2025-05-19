import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dispararSweetBasico } from '../assets/sweetAlerts';
import '../styles/productoDetalle.css'

function ProductoDetalle({ funcionCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then((datos) => {
        const productoEncontrado = datos.find((item) => item.id === Number(id));
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setError("Producto no encontrado.");
        }
        setCargando(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setCargando(false);
      });
  }, [id]);

  function agregarAlCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    funcionCarrito({ ...producto, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return null;

  console.log(id);
  console.log(producto);


  return (
    <div className="detalle-container">
      <div className="detalle-imagen-container">
        <img className="detalle-imagen" src={producto.images[0]} alt={producto.title} />
      </div>
      <div className="detalle-info">
        <h2>{producto.title}</h2>
        <p>{producto.description}</p>
        <p className="detalle-precio">Precio: {producto.price}$</p>
        <div className="detalle-contador">
          <button className="btn-contador" onClick={restarContador}>-</button>
          <span>{cantidad}</span>
          <button className="btn-contador" onClick={sumarContador}>+</button>
        </div>
        <button className="btn-cart" onClick={agregarAlCarrito}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductoDetalle;