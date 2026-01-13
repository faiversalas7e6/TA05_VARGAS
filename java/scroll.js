document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el botón automáticamente
    const botonSubir = document.createElement('button');
    botonSubir.innerText = '↑';
    botonSubir.id = 'btn-subir';
    botonSubir.title = 'Volver arriba';
    document.body.appendChild(botonSubir);

    // 2. CSS Básico inyectado desde JS (para que no tengas que editar todos los CSS)
    // Esto asegura que el botón se vea bien al instante
    Object.assign(botonSubir.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'none', // Oculto por defecto
        padding: '10px 15px',
        fontSize: '20px',
        backgroundColor: '#333', // Color neutro
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: '1000',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        transition: 'opacity 0.3s'
    });

    // 3. Detectar el Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            botonSubir.style.display = 'block'; // Mostrar si bajamos 300px
        } else {
            botonSubir.style.display = 'none';  // Ocultar si estamos arriba
        }
    });

    // 4. Acción al hacer clic (Subir suavemente)
    botonSubir.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Subida suave
        });
    });
});