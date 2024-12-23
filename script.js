function redirectToLanguagePage() {
    const lang = document.getElementById('language').value;
    if (lang === 'es') {
        window.location.href = 'index-es.html'; // Cambia a la URL de tu página en español
    } else if (lang === 'en') {
        window.location.href = 'index-en.html'; // Cambia a la URL de tu página en inglés
    }
}
