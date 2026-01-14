// --- DATOS DE LA PANTALLA INFORMATIVA ---
const screenData = {
    1: {
        title: "PROYECTO 1: TERMINAL",
        desc: "Simulación de entorno Linux en web. Permite comandos básicos, sistema de ficheros virtual y logs de auditoría.",
        link: "proyecto1.html"
    },
    2: {
        title: "PROYECTO 2: SIEM DASHBOARD",
        desc: "Panel de control de ciberseguridad. Gráficas de tráfico en tiempo real y logs de ataques simulados.",
        link: "proyecto2.html"
    }
};

const screenTitle = document.getElementById('screen-title');
const screenDesc = document.getElementById('screen-desc');
const screenBtn = document.getElementById('screen-btn');

// Función que actualiza la pantalla central al pasar el ratón
function updateScreen(id) {
    screenTitle.style.opacity = 0;
    screenDesc.style.opacity = 0;

    setTimeout(() => {
        const data = screenData[id];
        if(data) {
            screenTitle.innerText = data.title;
            screenDesc.innerText = data.desc;
            screenBtn.href = data.link;
            screenBtn.classList.add('visible');

            screenTitle.style.opacity = 1;
            screenDesc.style.opacity = 1;
        }
    }, 100);
}

function resetScreen() {
   // Opcional: Lógica al quitar el ratón
}

// --- LOADER Y CURSOR ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if(loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }, 800);
    }
});

const glow = document.getElementById('cursor-glow');
if(glow) {
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

// --- CONFIGURACIÓN TRADUCTOR ---
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,ca,fr,de,it,pt,ru,zh-CN,ja',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}