import '../styles/nav.css'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CarritoContext } from '../contexts/CarritoContext';
import { useContext } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

function Nav() {

    const { productosCarrito } = useContext(CarritoContext);

    const { user } = useAuthContext();

    return (
        <nav className='navbar'>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/about">Sobre nosotros</Link></li>
                <li><Link to="/admin" >Admin</Link></li> 
                <li><Link to="/login" >Login</Link></li> 
                {user ? <li><Link to="/admin/agregarProductos">Agregar productos</Link></li> : <></>}
                <li><Link to="/carrito"><AiOutlineShoppingCart /> <span>{productosCarrito.length > 0 ? '(' + productosCarrito.length + ')' : ''}</span></Link></li>
            </ul>
        </nav>
    );
}

export default Nav