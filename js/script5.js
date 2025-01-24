function contarVogais() {
    // Obter o texto do input
    const texto = document.getElementById("inputTexto").value;

    // Definir as vogais
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    // Inicializar o contador de vogais
    let contador = 0;

    // Percorrer cada letra do texto
    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    // Mostrar o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = `O número de vogais é: ${contador}`;
}