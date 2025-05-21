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

  const [usuarioLogueado, setUsuarioLogueado] = useState(false)
  const [adminLogueado, setAdminLogueado] = useState(false)


  function manejarAdmin() {
    setAdminLogueado(!adminLogueado)
  }

  function manejarUser() {
    setUsuarioLogueado(!usuarioLogueado)
  }
    
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login user={usuarioLogueado} admin={adminLogueado} setLogueadoAdmin={manejarAdmin} setLogueadoUser={manejarUser} />} />
          <Route path="/productos" element={<ProductosContainer2/>} />
          <Route path="/carrito" element={<Carrito usuarioLogueado={usuarioLogueado} />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/productos/:id" element={<ProductoDetalle/>} />
          <Route path='/admin' element={adminLogueado ? <Admin /> : <Navigate to={"/login"} replace />} />
        </Routes>
        <Footer />
      </>
    </Router>
  )
}

export default App
