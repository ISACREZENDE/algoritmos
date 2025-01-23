 // Função que converte números romanos em números inteiros
 function romanToInt(roman) {
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };

    let total = 0;
    for (let i = 0; i < roman.length; i++) {
      const current = romanValues[roman[i]];
      const next = romanValues[roman[i + 1]];

      if (next > current) {
        total -= current;
      } else {
        total += current;
      }
    }
    return total;
  }
  


  // Função chamada ao clicar no botão "Converter"
  function convertRoman() {
    const romanInput = document.getElementById('romanInput').value.toUpperCase().trim();
    const result = romanToInt(romanInput);
    
    if (result === 0) {
      document.getElementById('output').textContent = "Número Romano Inválido!";
    } else {
      document.getElementById('output').textContent = result;
    }
  }
  