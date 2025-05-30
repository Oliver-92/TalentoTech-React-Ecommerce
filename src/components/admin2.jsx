import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default  function Admin2() {
    const {user} = useAuthContext();
    if (!user) {
        return (<Navigate to="/login" replace />);
    }
    return (<div>Admin</div>)
}