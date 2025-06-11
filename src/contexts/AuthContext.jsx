import { createContext, useState, useContext } from 'react';

// Crear el contexto de autenticación 
const AuthContext = createContext();
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);
    const login = (username) => {
        // Simulando la creación de un token (en una app real, esto sería generado por un servidor) 
        const token = `fake-token-${username}`;
        if (username === 'admin1') {
            setAdmin(true);
        };
        localStorage.setItem('authToken', token);
        setUser(username);
    console.log(admin);
    console.log(setAdmin);  
    };
    const logout = () => {
        localStorage.removeItem('authToken');
        setUser(null);
    };
    return (
        <AuthContext.Provider value={{ user, login, logout, admin }}>
            {children}
        </AuthContext.Provider>);
}

export const useAuthContext = () => useContext(AuthContext);