import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOiTJAtfkY3Zf11ctN2o3Ab5xlK20TGCg",
    authDomain: "react-ecommerce-a08c8.firebaseapp.com",
    projectId: "react-ecommerce-a08c8",
    storageBucket: "react-ecommerce-a08c8.firebasestorage.app",
    messagingSenderId: "965698846150",
    appId: "1:965698846150:web:7ae554928ee8897c0846c7",
    measurementId: "G-WES5C3K0ER"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

export function crearUsuario(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            console.log("Credenciales: ", userCredential)
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}
