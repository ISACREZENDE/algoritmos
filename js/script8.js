// script.js
/*
    Obtém os blocos e transforma suas alturas em um array para facilitar a manipulação.
    Aplica o algoritmo de Ordenação por Seleção para encontrar o menor valor e trocar as posições no array.
    Usa setTimeout para criar uma animação, atualizando as alturas dos blocos gradualmente.
 */

// Função principal para ordenar os blocos
function selectionSort() {
    const blocks = document.querySelectorAll('.block');
  
    // Converte os blocos em um array de alturas
    const heights = Array.from(blocks).map(block => parseInt(block.style.height));
  
    // Algoritmo de Ordenação por Seleção
    for (let i = 0; i < heights.length; i++) {
      let minIndex = i;
  
      // Encontra o menor elemento no restante do array
      for (let j = i + 1; j < heights.length; j++) {
        if (heights[j] < heights[minIndex]) {
          minIndex = j;
        }
      }
  
      // Troca as posições no array de alturas
      if (minIndex !== i) {
        [heights[i], heights[minIndex]] = [heights[minIndex], heights[i]];
      }
  
      // Atualiza visualmente os blocos após cada iteração
      setTimeout(() => {
        blocks.forEach((block, index) => {
          block.style.height = `${heights[index]}px`;
        });
      }, i * 500); // Adiciona um intervalo para visualizar o processo
    }
  }
  
  // Adiciona o evento ao botão
  document.getElementById('sortButton').addEventListener('click', selectionSort);
  