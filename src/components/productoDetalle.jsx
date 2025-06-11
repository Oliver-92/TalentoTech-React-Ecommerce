import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { dispararSweetBasico, sweetAddCart } from '../assets/sweetAlerts';
import '../styles/productoDetalle.css'
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";
import { useProductosContext } from "../contexts/ProductosContext";

function ProductoDetalle({ }) {
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { admin } = useAuthContext();
  const { productoEncontrado, obtenerProducto } = useProductosContext();
  const { id } = useParams();
  // const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id).then(() => {
      setCargando(false);
    }).catch((error) => {
      if(error == "Producto no encontrado"){
        setError("Producto no encontrado")
      }
      if(error == "Hubo un error al obtener el producto."){
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);

  function funcionCarrito() {
    if (cantidad < 1) return;
    sweetAddCart();
    agregarAlCarrito({ ...productoEncontrado, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;

  console.log(id);
  console.log(productoEncontrado);


  return (
    <div className="detalle-container">
      <div className="detalle-imagen-container">
        <img className="detalle-imagen" src={productoEncontrado.image} alt={productoEncontrado.name} />
      </div>
      <div className="detalle-info">
        <h2>{productoEncontrado.name}</h2>
        <p>{productoEncontrado.description}</p>
        <p className="detalle-precio">Precio: {productoEncontrado.price}$</p>
        <div className="detalle-contador">
          <button className="btn-contador" onClick={restarContador}>-</button>
          <span>{cantidad}</span>
          <button className="btn-contador" onClick={sumarContador}>+</button>
        </div>
        <button className="btn-cart" onClick={funcionCarrito}>Agregar al carrito</button>
        {admin ? <Link to={"/admin/editarProducto/" + id}> <button>Editar producto</button></Link> : <button onClick={funcionCarrito}>Agregar al carrito</button> }
      </div>
    </div>
  );
}

export default ProductoDetalle;