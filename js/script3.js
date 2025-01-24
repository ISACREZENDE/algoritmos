function somarArray(numeros) {
  let total = 0; // Inicializamos o total com 0
  
  // Percorremos o array e somamos cada número ao total
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  
  // Retornamos o total calculado
  return total;
}

// Adicionamos um evento de clique ao botão
document.getElementById('calcular').addEventListener('click', function() {
  // Pegamos o array da página (como texto) e transformamos em um array real
  const arrayTexto = document.getElementById('array').textContent;
  const numeros = JSON.parse(arrayTexto); // Converte string "[2, 4, 6, 8, 10]" para array
  
  // Calculamos a soma do array
  const resultado = somarArray(numeros);
  
  // Exibimos o resultado na página
  document.getElementById('resultado').textContent = resultado;
});