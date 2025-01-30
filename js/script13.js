// Função principal que é chamada quando o usuário clica no botão "Resolver"
function resolverProblema() {
    // Obtém o valor de N (tamanho do tabuleiro) inserido pelo usuário
    const n = parseInt(document.getElementById('n').value);

    // Obtém o elemento do tabuleiro no HTML
    const tabuleiro = document.getElementById('tabuleiro');

    // Limpa o tabuleiro anterior, removendo qualquer conteúdo existente
    tabuleiro.innerHTML = '';

    // Cria uma matriz N x N preenchida com zeros para representar o tabuleiro
    // 0 significa casa vazia, 1 significa que há uma rainha na casa
    const matriz = Array.from({ length: n }, () => Array(n).fill(0));

    // Função para verificar se é seguro colocar uma rainha em uma determinada posição (linha, coluna)
    function ehSeguro(linha, coluna) {
        // Verifica se há alguma rainha na mesma coluna acima da posição atual
        for (let i = 0; i < linha; i++) {
            if (matriz[i][coluna] === 1) return false; // Se houver, não é seguro
        }

        // Verifica a diagonal superior esquerda
        for (let i = linha, j = coluna; i >= 0 && j >= 0; i--, j--) {
            if (matriz[i][j] === 1) return false; // Se houver uma rainha, não é seguro
        }

        // Verifica a diagonal superior direita
        for (let i = linha, j = coluna; i >= 0 && j < n; i--, j++) {
            if (matriz[i][j] === 1) return false; // Se houver uma rainha, não é seguro
        }

        // Se passar por todas as verificações, a posição é segura
        return true;
    }

    // Função recursiva que tenta colocar as rainhas no tabuleiro
    function resolver(linha) {
        // Se todas as linhas foram preenchidas, o problema está resolvido
        if (linha >= n) return true;

        // Tenta colocar uma rainha em cada coluna da linha atual
        for (let coluna = 0; coluna < n; coluna++) {
            // Verifica se é seguro colocar a rainha na posição (linha, coluna)
            if (ehSeguro(linha, coluna)) {
                // Coloca a rainha na posição (linha, coluna)
                matriz[linha][coluna] = 1;

                // Tenta resolver o problema para a próxima linha
                if (resolver(linha + 1)) return true; // Se conseguir, retorna true

                // Se não conseguir, remove a rainha (backtracking) e tenta a próxima coluna
                matriz[linha][coluna] = 0;
            }
        }

        // Se nenhuma coluna funcionar para esta linha, retorna false
        return false;
    }

    // Tenta resolver o problema começando pela primeira linha (linha 0)
    if (resolver(0)) {
        // Se encontrar uma solução, exibe o tabuleiro no HTML

        // Define o layout do tabuleiro como uma grade N x N
        tabuleiro.style.gridTemplateColumns = `repeat(${n}, 40px)`;

        // Percorre a matriz para criar as células do tabuleiro
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // Cria uma célula (div) para cada posição do tabuleiro
                const celula = document.createElement('div');
                celula.classList.add('celula'); // Adiciona a classe CSS para estilização

                // Se houver uma rainha na posição (i, j), adiciona o ícone da rainha
                if (matriz[i][j] === 1) {
                    celula.innerHTML = '♕'; // Ícone da rainha
                    celula.classList.add('rainha'); // Adiciona a classe CSS para estilização
                }

                // Adiciona a célula ao tabuleiro no HTML
                tabuleiro.appendChild(celula);
            }
        }
    } else {
        // Se não houver solução, exibe um alerta para o usuário
        alert('Não há solução para este tamanho de tabuleiro.');
    }
}