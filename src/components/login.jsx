export default function Login({ setLogueadoUser, setLogueadoAdmin, user, admin }) {
    

    const btnStyles = {
        backgroundColor: "black",
        padding: "10px",
        textAlign: "center",
        color: "white",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "5px",
        fontSize: "1.1rem"
    }

    return (
        <div style={{ flex: 1 }}>
            <button style={{...btnStyles, backgroundColor: user ? "green" : "black"}} onClick={setLogueadoUser}>{user ? "Cerrar sesion" : "Iniciar sesion"}</button>
            <button style={{...btnStyles, backgroundColor: admin ? "green" : "black"}} onClick={setLogueadoAdmin}>{admin ? "Cerrar sesion Admin" : "Iniciar sesion Admin"}</button>
        </div>
    )
}