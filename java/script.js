// Esperar a que toda la página (imágenes y estilos) cargue
window.addEventListener('load', () => {

    // Referencia al elemento de la intro
    const intro = document.getElementById('intro');

    // Si por alguna razón no encuentra el ID (seguridad), no hacemos nada
    if(intro) {
        // Esperamos 2.5 segundos (2500 ms)
        setTimeout(() => {
            intro.classList.add('hidden');
        }, 2000);
    }
});