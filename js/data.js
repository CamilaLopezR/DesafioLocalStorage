document.addEventListener('DOMContentLoaded', () => {
    const dataSpan = document.getElementById('data'); 

    const storedText = localStorage.getItem('storedText');

    dataSpan.textContent = storedText ? storedText : 'No hay datos almacenados';
});