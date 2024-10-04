document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');

    buttonText.addEventListener('click', () => {
        const inputValue = inputText.value; 

        localStorage.setItem('storedText', inputValue);
    });
});