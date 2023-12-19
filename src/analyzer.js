const analyzer = {
  getWordCount: (text) => {
    const alphanumericPattern = /[a-zA-Z0-9_]/; /*Padrão alfanumérico, corresponde a qualquer caractere (letra ou número) ou sublinhado.*/
    if (text.trim().length === 0 || !alphanumericPattern.test(text)) {
      return 0; /*Verifica se o texto está vazio ou se não contém caracteres alfanuméricos. Se qualquer uma dessas condições for verdadeira, a função retorna 0, indicando que não há palavras. */
    }
    const countWordsInText = text.trim().split(" "); /* Remove espaços em branco no início e no final da string e, em seguida, divide o texto em palavras com base nos espaços em branco usando o método split. */
    return countWordsInText.length; 
  },/* Retorna o número de palavras contadas. Isso é feito obtendo o comprimento do array resultante da divisão do texto em palavras. */


  getCharacterCount: (text) => {
    return text.length;
  },


  getCharacterCountExcludingSpaces: (text) => {
    const alphanumericPattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !alphanumericPattern.test(text)) {
      return 0;
    }
    const regex = /[ ,." ']/g; 
    const totalCharactere = text.replace(regex, "");
    return totalCharactere.length;
  },
  
  
  getNumberCount: (text) => {
    const alphanumericPattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !alphanumericPattern.test(text)) {
      return 0;
    }
    const regex = /[.,!?]$/g;
    const textWithoutPunctuation = text.replace(regex, "");
    const wordsAndNumbersInText = textWithoutPunctuation.trim().split(" ");
    let qntNumbers = 0;
    wordsAndNumbersInText.forEach((word) => {
      if (typeof parseInt(word) === "number" && !isNaN(word)) {
        qntNumbers = qntNumbers + 1;
      }
    });
    return qntNumbers;
  },

  getNumberSum: (text) => {
    const regex = /[.,!?]$/g;
    const textWithoutPunctuation = text.replace(regex, "");
    const wordsAndNumbersInText = textWithoutPunctuation.trim().split(" ");
    let numberSum = 0;
    wordsAndNumbersInText.forEach((word) => {
      if (
        (typeof parseInt(word) === "number" ||
          typeof parseFloat(word) === "number") &&
        !isNaN(word)
      ) {
        numberSum = numberSum + +word; 
      }
    });
    return numberSum;
  },

  getAverageWordLength: (text) => {
    const alphanumericPattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !alphanumericPattern.test(text)) {
      return 0;
    }
    const wordsAndNumbersInText = text.trim().split(" ");
    let wordsLength = 0;
    for (let index = 0; index < wordsAndNumbersInText.length; index++) {
      const word = wordsAndNumbersInText[index];
      wordsLength = wordsLength + word.length;
    }

    const media = wordsLength / wordsAndNumbersInText.length;
    return parseFloat(media.toFixed(2));
  },
};

export default analyzer;