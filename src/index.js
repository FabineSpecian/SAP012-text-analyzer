import analyzer from "./analyzer.js";

 const textarea = document.querySelector('[name="user-input"]'); 

 const button = document.getElementById("reset-button"); 

 const wordCount = document.querySelector('[data-testid="word-count"]'); 

 const characterCount = document.querySelector('[data-testid="character-count"]'); 

 const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');

 const numberCount = document.querySelector('[data-testid="number-count"]'); 

 const numberSum = document.querySelector('[data-testid="number-sum"]'); 

 const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');

 
function allMetricsUpdate() { 
  const text = textarea.value; 
  wordCount.textContent = "Palavras: " + analyzer.getWordCount(text);
  characterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(text);
  characterNoSpacesCount.textContent = "Caracteres sem espaços e símbolos: " + analyzer.getCharacterCountExcludingSpaces(text);
  numberCount.textContent = "Números: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Soma dos números: " + analyzer.getNumberSum(text);
  wordLengthAverage.textContent = "Comprimento médio: " + analyzer.getAverageWordLength(text);
}

function clearAllMetricsAndText() {  
  textarea.value = "";
  wordCount.textContent = "Palavras: 0"; 
  characterCount.textContent = "Caracteres: 0";
  characterNoSpacesCount.textContent = "Caracteres sem espaços e símbolos: 0";
  numberCount.textContent = "Números: 0";
  numberSum.textContent = "Soma dos números: 0";
  wordLengthAverage.textContent = "Comprimento médio:  0";
}


textarea.addEventListener("keyup", allMetricsUpdate); 
textarea.addEventListener('input', allMetricsUpdate);
button.addEventListener("click", clearAllMetricsAndText); 

