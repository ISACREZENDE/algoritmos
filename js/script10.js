// Seleciona os elementos do DOM
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const campoSequencia = document.getElementById("sequencia");

// Função para verificar o balanceamento dos parênteses
const verificarBalanceamento = (sequencia) => {
  const pilha = [];

  for (const char of sequencia) {
    if (char === "(") {
      pilha.push(char);
    } else if (char === ")") {
      if (pilha.length === 0) return false; // Fechou sem abrir
      pilha.pop();
    }
  }

  return pilha.length === 0; // Pilha deve estar vazia
};

// Função para exibir mensagens no resultado
const exibirMensagem = (mensagem, cor) => {
  resultado.textContent = mensagem;
  resultado.style.color = cor;

  // Remove a mensagem após 3 segundos
  setTimeout(() => {
    resultado.textContent = "";
  }, 3000);
};

// Evento de envio do formulário
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita o recarregamento da página

  const sequencia = campoSequencia.value.trim(); // Remove espaços extras

  if (!sequencia) {
    exibirMensagem("⚠️ Por favor, insira uma sequência de parênteses.", "orange");
    return;
  }

  if (/[^()]/.test(sequencia)) {
    exibirMensagem(
      "⚠️ A sequência contém caracteres inválidos. Use apenas '(' e ')'.",
      "orange"
    );
    return;
  }

  const estaBalanceado = verificarBalanceamento(sequencia);

  if (estaBalanceado) {
    exibirMensagem("✅ Os parênteses estão balanceados!", "green");
  } else {
    exibirMensagem("❌ Os parênteses NÃO estão balanceados!", "red");
  }

  // Limpa o campo de entrada após o uso
  campoSequencia.value = "";
});
