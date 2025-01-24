/*
Explicação do JavaScript:
    A função calcularFibonacci() é chamada quando o usuário clica no botão.
    O valor de N é obtido através de document.getElementById("nValue").value. Ele é convertido para um número inteiro usando parseInt().
    Verificamos se o valor inserido é válido (um número positivo).
    Inicializamos a sequência de Fibonacci com os dois primeiros valores [0, 1].
    Usamos um laço for para calcular os próximos números da sequência, somando os dois anteriores (seguindo a regra da Fibonacci).
    O resultado é exibido no elemento com o id="resultado", mostrando a sequência até o número N.
 */

function calcularFibonacci() {
    // Pega o valor de N inserido pelo usuário
    let n = document.getElementById("nValue").value;
    n = parseInt(n);  // Converte para um número inteiro

    // Verifica se o valor de N é válido
    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Inicializa os dois primeiros números da sequência de Fibonacci
    let fibonacci = [0, 1];

    // Calcula a sequência de Fibonacci até o número N
    for (let c = 2; c <= n; c++) {
        fibonacci[c] = fibonacci[c - 1] + fibonacci[c - 2];
    }

    // Exibe o resultado
    let resultado = `Sequência de Fibonacci até o mês ${n}: ` + fibonacci.join(", ");
    document.getElementById("resultado").innerText = resultado;
}
