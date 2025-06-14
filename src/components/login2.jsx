import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

function Login2() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const { login, user, logout, admin } = useAuthContext();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Simulación de autenticación 

        if (usuario === 'admin' && password === '1234') {
            login(usuario);
            navigate('/');
        } else if (usuario === 'admin1' && password === '1234') {
            login(usuario);
            navigate('/admin');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        logout();
    }


    if (user == "admin" || user == "admin1") {
        return (
            <form onSubmit={handleSubmit2}>
                <button type="submit">Cerrar sesión</button>
            </form>
        )
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div>
                <label>Usuario:</label>
                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}

export default Login2;