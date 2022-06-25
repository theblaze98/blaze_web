const habilidades = document.getElementById('cardHabilidades');
const observer = new IntersectionObserver((entradas, observer) => {

    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            habilidades.classList.add('visible');
        }
    });

}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.3
});

observer.observe(habilidades);