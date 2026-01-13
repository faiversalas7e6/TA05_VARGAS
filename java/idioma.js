/* =========================================
   GOOGLE TRANSLATE AUTOMÁTICO
   ========================================= */

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Tu web está en inglés originalmente
        includedLanguages: 'es,en,fr,de,it,pt,ja,zh-CN', // Idiomas permitidos (puedes quitar esta línea para tener todos)
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

// Cargar el script de Google dinámicamente
(function() {
    var googleScript = document.createElement('script');
    googleScript.type = 'text/javascript';
    googleScript.async = true;
    googleScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(googleScript);
})();