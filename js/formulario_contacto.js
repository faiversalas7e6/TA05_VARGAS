
// --- EFECTO CURSOR ---
const glow = document.getElementById('cursor-glow');
if(glow) {
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

// --- LÓGICA DE ENVÍO DEL FORMULARIO ---
const form = document.getElementById('contactForm');
const formContainer = document.getElementById('form-container');
const successMessage = document.getElementById('success-message');
const submitBtn = document.getElementById('submitBtn');

if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita recarga

        // 1. Efecto de carga en el botón
        submitBtn.classList.add('btn-loading');

        // 2. Simulación de envío (1.5 segundos)
        setTimeout(() => {
            formContainer.style.display = 'none';
            successMessage.style.display = 'flex';
        }, 1500);
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