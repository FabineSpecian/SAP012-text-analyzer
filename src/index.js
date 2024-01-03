import analyzer from './analyzer.js';

const resetButton = document.getElementById('reset-button');
const textarea = document.querySelector('[name="user-input"]');
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector ('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector ('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector ('[data-testid="number-count"]');
const numberSum = document.querySelector ('[data-testid="number-sum"]');
const averageWordLength = document.querySelector ('[data-testid="word-lenght-average"]');


resetButton.addEventListener("click", limparTexto);

textarea.addEventListener("input", atualizarValores);

function limparTexto() {
  textarea.value = "";
  wordCount.textContent = "Palavras: 0";
  characterCount.textContent = "Caracteres: 0";
  characterNoSpacesCount.textContent = "Caracteres sem espaços e símbolos: 0";
  numberCount.textContent = "Números: 0";
  numberSum.textContent = "Soma dos números: 0";
  averageWordLength.textContent = "Comprimento médio: 0";
}

textarea.addEventListener("keyup", atualizarValores); 

function atualizarValores() {
  const text = textarea.value;
  wordCount.textContent = "Palavras:" + analyzer.getWordCount(text);
  characterCount.textContent = "Caracteres:" + analyzer. getCharacterCount(text);
  characterNoSpacesCount.textContent= "Caracteres sem espaços e símbolos:" + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Números:" + analyzer.getNumberCount(text);
  numberSum.textContent = "Soma dos números:" + analyzer.getNumberSum(text);
  averageWordLength.textContent = "Comprimento médio:" + analyzer.getAverageWordLength(text);
}


















