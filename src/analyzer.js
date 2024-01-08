const analyzer = {
  getWordCount: (text) => {
    const pattern = /[a-zA-Z0-9_]/; /*Cria uma expressão regular (RegExp) com o padrão de caracteres de letras maiúsculas e minúsculas, números e o caractere _ */
    if (text.trim().length === 0 || !pattern.test(text)) { /*text.trim().length === 0: Verifica se o texto está vazio. ||(OU) !pattern.test(text): Verifica se o texto não contém caracteres do padrão definido pela const pattern. */
      return 0;/*  */
    }
    const palavrasNoTexto = text.trim().split(" "); /*Remove espaços em branco extras do início e do final do texto e divide o texto em um array de palavras separadas por espaços.*/
    return palavrasNoTexto.length; /*Retorna o número de palavras no texto, calculado pela contagem de elementos no array criado pela divisão das palavras. */
  },


  getCharacterCount: (text) => {
    return text.length; /*retorna o número de caracteres incluindo espaços, letras, números, símbolos...presentes na string text. */
  },


  getCharacterCountExcludingSpaces: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !pattern.test(text)) {
      return 0;
    }
    const regex = /[ ,." ']/g; /*Cria uma expressão regular chamada regex que representa um conjunto de caracteres (espaço, vírgula, ponto, aspas simples e duplas). */
    const totalDeCaracteres = text.replace(regex, ""); /* Cria uma const totalDeCaracteres que armazena o resultado, esse resultado é o método replace para substituir todos os caracteres correspondentes à const regex por uma string vazia ""*/
    return totalDeCaracteres.length; /*Retorna o comprimento da string totalDeCaracteres, ou seja, o número de caracteres restantes após a remoção dos caracteres especificados na const regex. Isso retorna a contagem de caracteres no texto, excluindo espaços e outros caracteres especificados na const regex.*/
  },


  getAverageWordLength: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !pattern.test(text)) {
      return 0;
    }
    const palavrasENumeros = text.trim().split(" "); /*A string é dividida em palavras usando o método split, e o espaço como delimitador. O resultado é armazenado em palavrasENumeros*/
    let comprimentoDaPalavra = 0; /* Cria uma varável (let e não const, porque o valor irá variar) comprimentoDaPalavra, incialmente com o valor 0 */
    for (let index = 0; index < palavrasENumeros.length; index++) {
      const word = palavrasENumeros[index]; /*Para cada acesso do loop, uma palavra é atribuída à variável word.*/
      comprimentoDaPalavra = comprimentoDaPalavra + word.length; /*O comprimento da palavra atual é adicionado ao total armazenado na variável comprimentoDaPalavra.*/
    }
    const media = comprimentoDaPalavra / palavrasENumeros.length; /*Cria const media que é comprimentoDaPalavra dividido pelo pelo palavrasENumeros.*/
    return parseFloat(media.toFixed(2)); /*A média do comprimento é arredondada para duas casas decimais pelo método toFixed(2) e convertida para um número de ponto flutuante usando parseFloat. Esse valor médio é o comprimento médio de palavras. */
  },


  getNumberCount: (text) => {
    const pattern = /[a-zA-Z0-9_]/;
    if (text.trim().length === 0 || !pattern.test(text)) {
      return 0;
    }
    const regex = /[.,!?]$/g;
    const textoSemPontuacao = text.replace(regex, ""); /* Cria uma const textoSemPontuacao que armazena o resultado, esse resultado é o método replace para substituir todos os caracteres correspondentes à const regex por uma string vazia ""*/
    const palavrasENumeros = textoSemPontuacao.trim().split(" ");/*Remove espaços em branco extras do início e do final do texto e divide o texto em um array de palavras e números separados por espaços. */
    let totalDeNumeros = 0; /* Cria uma varável (let e não const, porque o valor irá variar) totalDeNumeros em que o resultado é 0 */
    palavrasENumeros.forEach((word) => { /*Isso inicia um loop forEach que acessa cada elemento (palavra ou número) presente no array palavrasENumeros. Dentro doforEach há uma verificação que tenta identifica se cada elemento é um número válido ou não. */
      if (typeof parseInt(word) === "number" && !isNaN(word)) { /*parseInt(word): Tenta converter word para um número. parseInt retorna um número inteiro. typeof parseInt(word) === "number": Verifica se o resultado de parseInt é do tipo número. !isNaN(word): Verifica se word é um número válido. isNaN retorna true se o valor não for um número válido. */
        totalDeNumeros = totalDeNumeros + 1; /*A cada vez que encontrar um número válido (word é um número válido), aumenta o valor de totalDeNumeros em + 1. */
      }
    });
    return totalDeNumeros;
  },


  getNumberSum: (text) => {
    const regex = /[.,!?]$/g; /*Cria const regular (regex) que busca por caracteres de pontuação (como ponto, vírgula, ponto de exclamação ou ponto de interrogação) no final das palavras. */
    const textoSemPontuacao = text.replace(regex, ""); /* Utiliza o método replace da string, a const regular regex é usada para substituir todos os caracteres de pontuação encontrados no final das palavras por uma string vazia, removendo-os. O resultado é armazenado na const textoSemPontuacao.*/
    const palavrasENumeros = textoSemPontuacao.trim().split(" "); /* Cria const palavrasENumeros em que a string é dividida em palavras usando o método split, considerando o espaço como delimitador, onde cada elemento representa uma palavra ou um número isolado após a remoção da pontuação. */
    let somaDeNumeros = 0; /* Cria uma varável (let e não const, porque o valor irá variar) somaDeNumeros para armazenar a soma dos números encontrados na string.*/
    palavrasENumeros.forEach((word) => { /*loop forEach para para acessar sobre cada elemento do array palavrasENumeros. */
      if (
        (typeof parseInt(word) === "number" || /*Dentro do loop há a condicional para cada palavra ou número (word) no array. Para avaliar se a palavra pode ser convertida para número usando parseInt ou parseFloat, e se ela não é um NaN (não é um número). */
          typeof parseFloat(word) === "number") &&
        !isNaN(word)
      ) {
        somaDeNumeros = somaDeNumeros + +word; /*Se a palavra pode ser convertida para número, ela é somada à variável somaDeNumeros. O +word serve para converter a string word para um número antes de ir para a soma */
      }
    });
    return somaDeNumeros;
  },

};

export default analyzer;