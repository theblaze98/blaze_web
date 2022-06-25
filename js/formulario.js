/* ------------------------ */
/* Varibles */
/* ------------------------ */

const formulario = document.getElementById('formContacto');
const inputNombre = document.getElementById('nombre');
const inputCorreo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('btnEnviar');

/* ------------------------ */
/* Eventos */
/* ------------------------ */

inputNombre.addEventListener('focus', evFocus);
inputNombre.addEventListener('blur', evBlur);

inputCorreo.addEventListener('focus', evFocus);
inputCorreo.addEventListener('blur', evBlur);

mensaje.addEventListener('focus', evFocus);
mensaje.addEventListener('blur', evBlur);

formulario.addEventListener('submit', (e) => {

    if (inputNombre.value === '') {
        inputNombre.parentElement.classList.add('error');
        console.log('Falta Nombre');
        e.preventDefault();
    } else if (inputCorreo.value === '') {
        inputCorreo.parentElement.classList.add('error');
        console.log('Falta Correo');
        e.preventDefault();
    } else if (mensaje.value === '') {
        mensaje.parentElement.classList.add('error');
        console.log('Falta Mensaje');
        e.preventDefault();
    } else {
        console.log('Formulario Enviado');
    }

});

/* ------------------------ */
/* Funciones */
/* ------------------------ */

function evFocus (e) {
    if (e.target.parentElement.className.includes('error')) {
        e.target.parentElement.classList.remove('error');
    }
    e.target.parentElement.classList.add('active');
}

function evBlur (e) {
    if (e.target.value === '') {
        e.target.parentElement.classList.add('error');
        e.target.parentElement.classList.remove('active');
    }
}