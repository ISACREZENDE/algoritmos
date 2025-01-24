function verificarPalindromo() {
    // Obter o valor digitado
    const entrada = document.getElementById('entradaTexto').value;

    // Limpar a entrada: remover espaços, pontuação e colocar em minúsculas
    const entradaLimpa = entrada.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Reverter a entrada limpa
    const entradaReversa = entradaLimpa.split('').reverse().join('');

    // Verificar se a entrada limpa é igual à entrada reversa
    const ehPalindromo = entradaLimpa === entradaReversa;

    // Exibir o resultado
    const divResultado = document.getElementById('resultado');
    if (ehPalindromo) {
        divResultado.textContent = `Sim, "${entrada}" é um palíndromo!`;
        divResultado.style.color = 'green';
    } else {
        divResultado.textContent = `Não, "${entrada}" não é um palíndromo.`;
        divResultado.style.color = 'red';
    }
}