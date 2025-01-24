function gerarTabuada() {
    // Obtém o número digitado pelo usuário
    const numero = document.getElementById('numero').value;

    // Seleciona o elemento onde os resultados serão exibidos
    const resultado = document.getElementById('resultado');

    // Limpa qualquer resultado anterior
    resultado.innerHTML = '';

    // Verifica se o número é válido
    if (numero === '') {
        alert('Por favor, digite um número válido.');
        return;
    }

    // Gera a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        const item = document.createElement('li');
        item.textContent = `${i} x ${numero} = ${i * numero}`;
        resultado.appendChild(item);
    }
}