const logoBienvenida = document.getElementById('logoBienvenida');

window.addEventListener('load', (e) => {
    logoBienvenida.classList.add('animar');
    setTimeout(() => {logoBienvenida.classList.remove('animar')}, 1000);
});