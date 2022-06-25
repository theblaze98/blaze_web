/* ------------------------ */
/* Variables */
/* ------------------------ */

const sidemenu = document.getElementById('Sidemenu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const btnSidemenu = document.getElementById('btnSidemenu');
const enlaces = document.querySelectorAll('#Sidemenu a');

/* ------------------------ */
/* Eventos */
/* ------------------------ */

btnSidemenu.addEventListener('click', abrirMenu);
btnCloseMenu.addEventListener('click', cerrarMenu);
document.addEventListener('click', (e) => {
    if (sidemenu.className.includes('visible')) {
        if (e.target.id !== btnSidemenu.id && e.target.id !== btnCloseMenu.id) {
            sidemenu.classList.remove('visible');
        }
    }
})

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        if (enlace.className.includes('active')) {
            e.preventDefault();
        }
    });
});

/* ------------------------ */
/* Funciones */
/* ------------------------ */

function abrirMenu () {
    sidemenu.classList.add('visible');
}

function cerrarMenu () {
    sidemenu.classList.remove('visible');
}