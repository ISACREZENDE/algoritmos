let labirinto;
    let posX = 0; // Posição inicial X (linha)
    let posY = 0; // Posição inicial Y (coluna)
    let fimX = 4; // Posição final X
    let fimY = 4; // Posição final Y

    const direcoes = [
      { x: 0, y: 1 }, // direita
      { x: 1, y: 0 }, // baixo
      { x: 0, y: -1 }, // esquerda
      { x: -1, y: 0 } // cima
    ];

    // Gera um labirinto aleatório
    const gerarLabirintoAleatorio = () => {
      const novoLabirinto = Array.from({ length: 5 }, () =>
        Array.from({ length: 5 }, () => Math.random() > 0.7 ? 1 : 0) // 30% de chance de ser parede
      );

      // Garante que o início e o fim sejam caminhos
      novoLabirinto[posX][posY] = 0;
      novoLabirinto[fimX][fimY] = 0;

      return novoLabirinto;
    };

    const criarLabirinto = () => {
      const container = document.getElementById("labirinto");
      container.innerHTML = '';

      for (let i = 0; i < labirinto.length; i++) {
        for (let j = 0; j < labirinto[i].length; j++) {
          const celula = document.createElement("div");
          celula.classList.add("celula");

          if (labirinto[i][j] === 1) {
            celula.classList.add("parede");
          }

          if (i === posX && j === posY) {
            celula.classList.add("inicio");
          } else if (i === fimX && j === fimY) {
            celula.classList.add("fim");
          }

          container.appendChild(celula);
        }
      }
    };

    const resolverLabirinto = () => {
      const caminho = [];
      if (backtracking(posX, posY, caminho)) {
        marcarCaminho(caminho);
      } else {
        alert("Não há solução!");
      }
    };

    const backtracking = (x, y, caminho) => {
      if (x === fimX && y === fimY) {
        caminho.push({ x, y });
        return true;
      }

      if (x < 0 || y < 0 || x >= labirinto.length || y >= labirinto[0].length || labirinto[x][y] === 1) {
        return false;
      }

      labirinto[x][y] = 1;

      for (const dir of direcoes) {
        const novaX = x + dir.x;
        const novaY = y + dir.y;
        if (backtracking(novaX, novaY, caminho)) {
          caminho.push({ x, y });
          return true;
        }
      }

      labirinto[x][y] = 0;
      return false;
    };

    const marcarCaminho = (caminho) => {
      const container = document.getElementById("labirinto");
      const celulas = container.getElementsByClassName("celula");

      for (const celula of celulas) {
        celula.classList.remove("camino");
      }

      for (const passo of caminho.reverse()) {
        const index = passo.x * 5 + passo.y;
        celulas[index].classList.add("camino");
      }
    };

    const reiniciar = () => {
      // Gera novas posições para o início e o fim
      posX = Math.floor(Math.random() * 5);
      posY = Math.floor(Math.random() * 5);
      fimX = Math.floor(Math.random() * 5);
      fimY = Math.floor(Math.random() * 5);

      while (posX === fimX && posY === fimY) {
        fimX = Math.floor(Math.random() * 5);
        fimY = Math.floor(Math.random() * 5);
      }

      // Gera um novo labirinto
      labirinto = gerarLabirintoAleatorio();

      criarLabirinto();
    };

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

      criarLabirinto();
    });

    // Inicializar
    reiniciar();