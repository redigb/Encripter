const textInput = document.getElementById('textInput');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');

// Función para verificar el texto y habilitar/deshabilitar los botones
function validateInput() {
    const text = textInput.value.trim();
    const isTextValid = /^[a-z\s]*$/.test(text); // Solo letras minúsculas y espacios
    encryptBtn.disabled = !isTextValid || !text;
    decryptBtn.disabled = !isTextValid || !text;
}

// Listener para verificar el texto ingresado
textInput.addEventListener('input', validateInput);

// Función para encriptar el texto (Cifrado César simple con desplazamiento de 3)
function encryptText(text) {
    return text.replace(/[a-z]/g, c => 
        String.fromCharCode((c.charCodeAt(0) - 97 + 3) % 26 + 97)
    );
}

// Función para desencriptar el texto (Revertir el cifrado César)
function decryptText(text) {
    return text.replace(/[a-z]/g, c => 
        String.fromCharCode((c.charCodeAt(0) - 97 - 3 + 26) % 26 + 97)
    );
}

// Listener para el botón de encriptar
encryptBtn.addEventListener('click', () => {
    const text = textInput.value;
    textInput.value = encryptText(text);
});

// Listener para el botón de desencriptar
decryptBtn.addEventListener('click', () => {
    const text = textInput.value;
    textInput.value = decryptText(text);
});
