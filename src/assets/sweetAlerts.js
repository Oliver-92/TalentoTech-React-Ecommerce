import Swal from 'sweetalert2'
import "../styles/sweetAlerts.css"

export function dispararSweetBasico(titulo, text, icon, textoBoton) {
  Swal.fire({
    title: titulo,
    text: text,
    icon: icon,
    confirmButtonText: textoBoton
  })
}

export function sweetAddCart() {
  Swal.fire({
    title: 'Producto agregado al carrito',
    icon: 'success',
    timer: 2000,
    showConfirmButton: false,
    timerProgressBar: false,
    background: '#fefefe',
    color: '#333',
    customClass: {
      popup: 'minimal-alert'
    },
    didOpen: () => {
      // No mostrar loading ni nada extra
    }
  });
}