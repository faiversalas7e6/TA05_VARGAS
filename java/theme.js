document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el botón en el HTML automáticamente
    const botonTema = document.createElement('button');
    botonTema.id = 'theme-toggle';
    botonTema.innerText = '🌗'; // Icono de luna/sol
    botonTema.setAttribute('aria-label', 'Cambiar tema oscuro/claro');
    document.body.appendChild(botonTema);

    // 2. Revisar preferencia guardada en el navegador
    const temaActual = localStorage.getItem('tema');

    // Si había guardado "dark", activamos la clase
    if (temaActual === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 3. Función al hacer clic
    botonTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Guardar la elección
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
        } else {
            localStorage.setItem('tema', 'light');
        }
    });
});