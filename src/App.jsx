import './App.css'
import Home from './layouts/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductosContainer2 from './components/productosContainer2'
import Nav from './components/nav'
import Carrito from './components/carrito'
import { useState, useEffect } from 'react'
import Contact from './components/contact'
import About from './components/about'
import Footer from './components/footer'
import Login from './components/login'
import Admin from './components/admin'
import ProductoDetalle from './components/productoDetalle'
import { Navigate } from 'react-router-dom'


function App() {
  const [productosCarrito, setProductosCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [usuarioLogeado, setUsuarioLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)

  // Calcular el total cuando cambia el carrito
  useEffect(() => {
    const nuevoTotal = productosCarrito.reduce(
      (suma, producto) => suma + producto.price * producto.cantidad,
      0
    );
    setTotal(nuevoTotal);
  }, [productosCarrito]);

  function funcionCarrito(producto) {
    const existe = productosCarrito.find(prod => prod.id === producto.id);

    if (existe) {
      // Actualizar la cantidad si el producto ya existe
      const carritoActualizado = productosCarrito.map(prod =>
        prod.id === producto.id
          ? { ...prod, cantidad: prod.cantidad + producto.cantidad }
          : prod
      );
      setProductosCarrito(carritoActualizado);
    } else {
      // Agregar el producto nuevo al carrito
      setProductosCarrito([...productosCarrito, producto]);
    }
  }

  function eliminarProducto(id) {
    const carritoActualizado = productosCarrito.filter(prod => prod.id !== id);
    setProductosCarrito(carritoActualizado);
  }

  function manejarAdmin() {
    setAdminLogeado(!adminLogeado)
  }

  function manejarUser() {
    setUsuarioLogeado(!usuarioLogeado)
  }

  return (
    <Router>
      <>
        <Nav productosCarrito={productosCarrito} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser} />} />
          <Route path="/productos" element={<ProductosContainer2 funcionCarrito={funcionCarrito} />} />
          <Route path="/carrito" element={<Carrito productosCarrito={productosCarrito} funcionBorrar={eliminarProducto} />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/productos/:id" element={<ProductoDetalle funcionCarrito={funcionCarrito} />} />
          <Route path='/admin' element={adminLogeado ? <Admin /> : <Navigate to={"/login"} replace />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
