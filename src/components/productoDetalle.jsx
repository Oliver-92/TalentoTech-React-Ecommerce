import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { dispararSweetBasico, sweetAddCart } from '../assets/sweetAlerts';
import '../styles/productoDetalle.css'
import { CarritoContext } from "../contexts/CarritoContext";

function ProductoDetalle({ }) {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://6827a00a6b7628c52910f842.mockapi.io/data')
      .then(res => res.json())
      .then((datos) => {
        const productoEncontrado = datos.find((item) => item.id === id);
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

  function funcionCarrito() {
    if (cantidad < 1) return;
    sweetAddCart();
    agregarAlCarrito({ ...producto, cantidad });
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
        <img className="detalle-imagen" src={producto.image} alt={producto.name} />
      </div>
      <div className="detalle-info">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p className="detalle-precio">Precio: {producto.price}$</p>
        <div className="detalle-contador">
          <button className="btn-contador" onClick={restarContador}>-</button>
          <span>{cantidad}</span>
          <button className="btn-contador" onClick={sumarContador}>+</button>
        </div>
        <button className="btn-cart" onClick={funcionCarrito}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductoDetalle;