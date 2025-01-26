

 // Labirinto com paredes e caminhos
 const labirintoOriginal = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0]
  ];
  let labirinto = JSON.parse(JSON.stringify(labirintoOriginal)); // Clone do labirinto para poder resetar

  // Funções auxiliares
  const direcoes = [
    { x: 0, y: 1 }, // direita
    { x: 1, y: 0 }, // baixo
    { x: 0, y: -1 }, // esquerda
    { x: -1, y: 0 } // cima
  ];

  let posX = 0; // Posição inicial X (linha)
  let posY = 0; // Posição inicial Y (coluna)

  const criarLabirinto = () => {
    const container = document.getElementById("labirinto");
    container.innerHTML = ''; // Limpar o labirinto anterior

    for (let i = 0; i < labirinto.length; i++) {
      for (let j = 0; j < labirinto[i].length; j++) {
        const celula = document.createElement("div");
        celula.classList.add("celula");

        // Definir parede ou caminho
        if (labirinto[i][j] === 1) {
          celula.classList.add("parede");
        }

        // Marcar o ponto de início (0,0) e fim (4,4)
        if (i === 0 && j === 0) {
          celula.classList.add("inicio");
        } else if (i === 4 && j === 4) {
          celula.classList.add("fim");
        }

        container.appendChild(celula);
      }
    }
  };

  // Função de Backtracking
  const resolverLabirinto = () => {
    const caminho = [];
    if (backtracking(0, 0, caminho)) {
      marcarCaminho(caminho);
    } else {
      alert("Não há solução!");
    }

    // Voltar a célula azul para o início após 3 segundos
    setTimeout(() => {
      posX = 0;
      posY = 0;
      atualizarPosicao();
    }, 3000); // 3 segundos
  };

  // Função recursiva de backtracking
  const backtracking = (x, y, caminho) => {
    // Verificar se chegamos ao fim
    if (x === 4 && y === 4) {
      caminho.push({ x, y });
      return true;
    }

    // Se a célula está fora dos limites ou é uma parede, retorna falso
    if (x < 0 || y < 0 || x >= labirinto.length || y >= labirinto[0].length || labirinto[x][y] === 1) {
      return false;
    }

    // Armazenar o valor original da célula
    const valorOriginal = labirinto[x][y];

    // Marcar como visitado
    labirinto[x][y] = 1; // Marcar o caminho como parede temporariamente

    // Tentar todas as direções
    for (const dir of direcoes) {
      const novaX = x + dir.x;
      const novaY = y + dir.y;
      
      if (backtracking(novaX, novaY, caminho)) {
        caminho.push({ x, y });
        return true;
      }
    }

    // Restaurar o valor original da célula
    labirinto[x][y] = valorOriginal;

    return false;
  };

  // Marcar o caminho no labirinto
  const marcarCaminho = (caminho) => {
    const container = document.getElementById("labirinto");
    const celulas = container.getElementsByClassName("celula");

    // Resetar as células
    for (const celula of celulas) {
      celula.classList.remove("camino");
    }

    // Marcar o caminho
    for (const passo of caminho.reverse()) {
      const index = passo.x * 5 + passo.y; // Calcular o índice da célula no labirinto
      celulas[index].classList.add("camino");
    }
  };

  // Atualiza a posição da célula azul
  const atualizarPosicao = () => {
    const container = document.getElementById("labirinto");
    const celulas = container.getElementsByClassName("celula");

    // Limpar a célula azul anterior
    for (const celula of celulas) {
      celula.classList.remove("inicio");
    }

    // Atualizar a célula azul
    const index = posX * 5 + posY;
    celulas[index].classList.add("inicio");
  };

  // Função de reinício
  const reiniciar = () => {
    // Resetar labirinto e posição da célula azul
    labirinto = JSON.parse(JSON.stringify(labirintoOriginal));
    posX = 0;
    posY = 0;

    // Recriar labirinto e reposicionar a célula azul
    criarLabirinto();
    atualizarPosicao();
  };

  // Capturar teclas do teclado
  document.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowUp" && posX > 0 && labirinto[posX - 1][posY] !== 1) {
      posX--;
    } else if (evento.key === "ArrowDown" && posX < labirinto.length - 1 && labirinto[posX + 1][posY] !== 1) {
      posX++;
    } else if (evento.key === "ArrowLeft" && posY > 0 && labirinto[posX][posY - 1] !== 1) {
      posY--;
    } else if (evento.key === "ArrowRight" && posY < labirinto[0].length - 1 && labirinto[posX][posY + 1] !== 1) {
      posY++;
    }

    // Atualizar a posição da célula azul
    atualizarPosicao();
  });

  // Inicializar
  criarLabirinto();