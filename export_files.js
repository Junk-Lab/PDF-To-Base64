function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Por favor, selecione um arquivo.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const base64String = event.target.result.split(',')[1];

        // Criando objeto JSON
        const fileInfo = {
            filename: file.name,
            type: file.type,
            base64: base64String
        };

        console.log('Arquivo convertido para JSON:', fileInfo);

        const outputElement = document.getElementsByClassName('base64_Output')[0];
        if (outputElement) {

            outputElement.textContent = base64String;

            outputElement.style.whiteSpace = 'pre-wrap'; 
            outputElement.style.wordWrap = 'break-word'; 
        } else {
            console.error('Elemento com a classe base64Output não encontrado.');
        }
    };

    reader.readAsDataURL(file);
}
