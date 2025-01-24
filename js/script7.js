
/*
Explicação:
Selecionamos os elementos do HTML:

O campo de entrada (inputString).
O botão (reverseButton).
O parágrafo para exibir o resultado (result).
Criamos a função reverseString:

Pega o texto digitado no campo.
Usa o método .split("") para transformar a string em um array de caracteres.
Usa .reverse() para inverter a ordem dos caracteres.
Usa .join("") para juntar os caracteres de volta em uma string.
Adicionamos um evento ao botão:

Quando o botão é clicado, a função é chamada e a string invertida é exibida no parágrafo.
*/ 


// Selecionar os elementos da página
const inputField = document.getElementById("inputString");
const reverseButton = document.getElementById("reverseButton");
const resultParagraph = document.getElementById("result");

// Função para reverter a string
function reverseString() {
  // Pega o valor do campo de entrada
  const originalString = inputField.value;

  // Reverte a string usando um truque simples: transforma em array, inverte e junta de novo
  const reversedString = originalString.split("").reverse().join("");

  // Exibe o resultado no parágrafo
  resultParagraph.textContent = `String invertida: ${reversedString}`;
}

// Adiciona um evento ao botão para chamar a função ao ser clicado
reverseButton.addEventListener("click", reverseString);
