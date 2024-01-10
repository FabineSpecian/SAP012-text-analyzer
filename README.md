
![bannerAnalyzer](https://github.com/FabineSpecian/SAP012-text-analyzer/blob/main/src/bannerAnalyzer.png?raw=true)

# Analisador de Texto

## Índice

- [1. Considerações gerais](#1-considerações-gerais)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Funcionalidades](#3-funcionalidades)
- [4. Boilerplate](#4-boilerplate)
- [5. Objetivos de Aprendizagem](#5-objetivos-de-aprendizagem)
- [6. Testes](#6-testes)
- [7. Ferramentas utilizadas no processo](#7-ferramentas-utilizadas-no-processo)
- [8. Autora](#8-autora)


---

## 1. Considerações gerais

- Este projeto foi desenvolvido por Fabine Specian com a mentoria da Laboratoria (coaches e colegas).
- O tempo da realização do projeto foi de 4 Sprints (4 semanas).
- O aprendizado não foi um processo cíclico, foi um processo único e de construção do conhecimento.

## 2. Resumo do projeto

Um analisador de texto é uma aplicação para extrair informações úteis de um
texto utilizando diversas técnicas, como o processamento de linguagem natural
(PLN),aprendizado de máquina (ML) e análise estatística. Essas aplicações podem
fornecer uma variedade de métricas que oferecem informações básicas sobre
o comprimento e a estrutura do texto, como contagem de palavras, contagem de
caracteres, contagem de sentenças e contagem de parágrafos. Outras métricas
incluem análise de sentimentos, que utiliza técnicas de PLN para determinar
o tom geral positivo, negativo ou neutro do texto, e análise de legibilidade,
que utiliza algoritmos para avaliar a complexidade e legibilidade do texto.

Em geral, as aplicações de análise de texto fornecem informações valiosas e métricas
sobre os textos que podem ajudar os usuários a tomar decisões informadas e tirar
conclusões significativas. Por meio do uso dessas ferramentas de análise, os usuários
podem obter uma compreensão mais profunda dos textos.

Em síntese, a aplicação web permite que a usuária analise
um texto no navegador, exibindo uma série de indicadores e métricas específicas
sobre caracteres, letras, números, etc., que foram inseridos por ela como entrada.
Utilizando para a sua estrutura HTML, CSS e JavaScript.

## 3. Funcionalidades

1. A aplicação permite a usuária inserir um texto escrevendo-o
    em uma caixa de texto.

2. A aplicação calcula as seguintes métricas e atualiza o
    resultado em tempo real conforme a usuária escreve o texto:

    - **Contagem de palavras**: conta o número de
    palavras no texto de entrada e mostra essa contagem para a usuária.
    - **Contagem de caracteres**: conta o número de
    caracteres no texto de entrada, incluindo espaços e sinais de
    pontuação, e mostra essa contagem para a usuária.
    - **Contagem de caracteres excluindo espaços e sinais de pontuação**:
    conta o número de caracteres no texto de
    entrada, excluindo espaços e sinais de pontuação, e mostra essa contagem
    para a usuária.
    - **Contagem de números**: conta quantos números há no
    texto de entrada e mostra essa contagem para a usuária.
    - **Soma total dos números**: soma todos os números que
    estão no texto de entrada e mostra o resultado para a usuária.
    - **Comprimento médio das palavras**: calcula o
    comprimento médio das palavras no texto de entrada e mostra esse valor para a usuária.

3. A aplicação permite limpar o conteúdo da caixa de texto ao clicar
    em um botão (Limpar texto).

![analyzerGif.gif](https://github.com/FabineSpecian/SAP012-text-analyzer/blob/main/src/analyzerGif.gif?raw=true)


## 4. Boilerplate

A lógica do projeto foi implementada completamente em JavaScript. Neste
projeto, NÃO foi permitido usar bibliotecas ou frameworks, apenas JavaScript
puro, também conhecido como Vanilla JavaScript.

Para começar este projeto, foi necessário fazer um _fork_ e _clonar_ este
repositório que contém um _boilerplate_ com testes. Um _boilerplate_
é a estrutura básica de um projeto que serve como um ponto de partida com
arquivos e configuração inicial de dependências e testes.

O _boilerplate_ forneciso continha a seguinte estrutura:

    ./
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── src
    │   ├── analyzer.js
    │   ├── index.html
    │   ├── index.js
    │   └── style.css
    └── test
        ├── .eslintrc
        └── analyzer.spec.js

### Descrição de scripts / arquivos que foram manipulados no projeto

- `README.md`: foi modificado para explicar as informações necessárias para
  o uso da aplicação web, bem como uma introdução à aplicação, sua funcionalidade
  e decisões de design tomadas.

- [`src/index.html`](./src/index.html): este é o ponto de entrada da aplicação.
  Este arquivo contém o HTML.

- [`src/style.css`](./src/style.css): este arquivo contém as regras de
estilo. NÃO foi
permitido o uso de frameworks de CSS (Bootstrap, Materialize, etc).

- [`src/analyzer.js`](./src/analyzer.js): aqui foi implementado
o objeto `analyzer`, que já estava _exportado_ no _boilerplate_.
Este objeto (`analyzer`) contém seis métodos:
   
  - `analyzer.getWordCount(text)`: esta função deve retornar a contagem de
  palavras que estão no parâmetro `text` do tipo `string`.
  - **`analyzer.getCharacterCount(text)`: esta função deve retornar a
  contagem de caracteres que estão no parâmetro `text` do tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta função deve
  retornar a contagem de caracteres excluindo espaços e sinais de pontuação
  que estão no parâmetro `text` do tipo `string`.
  - `analyzer.getNumberCount(text)`: esta função deve retornar quantos
  números estão no parâmetro `text` do tipo `string`.
  - `analyzer.getNumberSum(text)`: esta função deve retornar a soma de todos os
  números que estão no parâmetro `text` do tipo `string`.
  - `analyzer.getAverageWordLength(text)`: esta função deve retornar o
  comprimento médio das palavras que estão no parâmetro `text` do tipo
  `string`. Use 2 casas decimais.

- [`src/index.js`](./src/index.js): aqui foi ouvido os eventos do DOM,
invocado os métodos do objeto `analyzer` conforme necessário e atualizado
o resultado na IU (interface de usuária).


#### Deploy

O projeto foi publicado (ou _deployed_),  utilizando o _Github Pages_ para implantar o site: [Analisador de Texto](https://fabinespecian.github.io/SAP012-text-analyzer/).


## 5. Objetivos de aprendizagem

A seguir estão os objetivos de aprendizagem percorridos durante a realização do projeto.

### HTML

- **Uso de HTML semântico**

  + A aplicação possui um cabeçalho composto por um `<header>` que é pai de um `<h1>` com o texto `Analisador de texto`. Para o projeto os elementos não puderam ter atributos `id`, `name` ou `class`.

  + A aplicação utiliza um `<textarea>` com o atributo `name` com o valor `user-input` para permitir à usuária inserir um texto. Para o projeto os elementos não puderam ter atributos `id` ou `class`.

  + A aplicação utiliza uma `<ul>` com 6 filhos `<li>`, um para exibir cada métrica. Para o projeto os elementos não puderam ter atributos `id`, `name` ou filhos.

  + O`<li>` para exibir a _contagem de palavras_ tem um atributo `data-testid` com o valor `word-count`.

  + O `<li>` para exibir a _contagem de caracteres_ tem um atributo `data-testid` com o valor `character-count`.

  + O `<li>` para exibir a _contagem de caracteres excluindo espaços e sinais de pontuação_ tem um atributo `data-testid` com o valor `character-no-spaces-count`.

  + O `<li>` para exibir a _contagem de números_ tem um atributo `data-testid` com o valor `number-count`.

  + O `<li>` para exibir a _soma total de números_ tem um atributo `data-testid` com o valor `number-sum`.

  + O `<li>` para exibir o _comprimento médio das palavras_ tem um atributo `data-testid` com o valor `word-length-average`.

  + A aplicação possui um rodapé composto por um`<footer>` que é pai de um `<p>`que possui o nome Fabine Specian desenvolvedora da aplicação como texto. Para o projeto os elementos não puderam ter atributos `id`, `name` ou `class`.

  + A aplicação utiliza um `<button>` com o atributo `id` com o valor `reset-button` para permitir à usuária, através de um clique, limpar o conteúdo da caixa de texto.

### CSS

- **Uso de seletores CSS**

  + A aplicação utiliza `seletores CSS de tipo` para estilizar o `<header>` e o `<footer>`.

  + A aplicação utiliza `seletores CSS de classe` para estilizar os `<li>` mencionados anteriormente.

  + A aplicação utiliza `seletores de atributo` para estilizar o`<textarea>` utilizando o atributo `name`.

  + A aplicação utiliza `seletores CSS de ID` para estilizar o `<button>` com o atributo `id` com o valor `reset-button`.

- **Modelo de caixa (box model): borda, margem, preenchimento**

  + As `classes CSS` dos `<li>` filhos da `<ul>` definem um estilo usando as propriedades do modelo de caixa, (`background`,`border`, `margin` e `padding`).

### Web APIs

- **Uso de seletores do DOM**

  + A aplicação utiliza o `seletor do DOM querySelector`.

  + A aplicação utiliza o `seletor do DOM getElementById`.

- **Manipulação de eventos do DOM (ouvintes, propagação, delegação)**

  + A aplicação registra um Event Listener para ouvir o evento `keyup` do `<textarea>` e atualiza as métricas quando o texto for digitado na caixa de texto.

  + A aplicação registra um Event Listener para ouvir o evento `click` do `<button>` que limpa o conteúdo da caixa de texto.

- **Manipulação dinâmica do DOM**

  + A aplicação atualiza o atributo `textContent` dos `<li>` que exibem as métricas do texto.

### JavaScript

- **Tipos de dados primitivos**

  + A aplicação converte valores do tipo `string` para o tipo `number`.

- **Strings (cadeias de caracteres)**

  + A aplicação utiliza métodos para manipular strings como `split` `trim` e `replace`.

- **Variáveis (declaração, atribuição, escopo)**

  + A aplicação declara variáveis com `let`e `const`.

  + A aplicação NÃO declara variáveis com `var`.

- **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  + A aplicação utiliza a estrutura `if..else` para avaliar condições.

- **Uso de loops (while, for, for..of)**

  + A aplicação utiliza a estrutura `for` para criar um loop.

- **Funções (parâmetros, argumentos, retorno)**

  + O objeto `analyzer` contém um método `getWordCount` para calcular a contagem de palavras de um texto.

  + O objeto `analyzer` contém um método `getCharacterCount` para calcular a contagem de caracteres de um texto.

  + O objeto `analyzer` contém um método `getCharacterCountExcludingSpaces` para calcular a contagem de caracteres excluindo espaços e pontuações de um texto.

  + O objeto `analyzer` contém um método `getNumbersCount` para contar quantos  números existem em um texto.

  + O objeto `analyzer` contém um método `getNumbersSum` para calcular a soma dos números em um texto.

  + O objeto `analyzer` contém um método `getAverageWordLength` para calcular o comprimento médio das palavras em um texto.

- **Testes unitários (unit tests)**

  + Todos os testes unitários passaram.

- **Módulos do ECMAScript (ES Modules)**

  + A aplicação utiliza`import` e `export` para importar e exportar valores de um módulo JavaScript.

- **Uso de linter (ESLINT)**

  + Ao executar o linter, não são exibidos erros de formato e estilo.

- **Uso de identificadores descritivos (Nomenclatura e Semântica)**

  + O código utiliza identificadores descritivos para variáveis e funções.

### Controle de Versões (Git e GitHub)

- **GitHub: Criação de conta e repositórios, configuração de chaves SSH**

  + Foi criada uma uma conta no [Github](https://github.com/FabineSpecian).

  + Foi configurada sua conta do Github com uma chave SSH.

- **Git: Controle de versões com git (clone, add, commit, push)**

  + Foi criado um _fork_ para o projeto.

  + Foi clonado seu repositório usando uma chave SSH.

  + Foram criados _commits_ e foram salvos no Github.

- **GitHub: Implantação com GitHub Pages**

  + A aplicação está implantada no GitHub Pages.

### Foco na Usuária

- **Projetar e desenvolver um produto ou serviço centrado nas usuárias**

### Design do Produto

- **Projetar em diferentes níveis de fidelidade**

  + Foram criados protótipos de baixa fidelidade para a UI (interface gráfica).






  

- **Seguir os princípios básicos do design visual**

  + Foram consideradas as regras básicas de design visual para projetar a UI (interface gráfica).

## 6. Testes

Este projeto conta com 3 conjuntos de testes para verificar se
os critérios mínimos de aceitação são cumpridos.

### Testes Unitários

Um teste unitário é uma técnica de teste de software na qual se verifica
que cada componente individual de um programa ou sistema funcione corretamente
isoladamente. Em outras palavras, cada unidade de código é testada separadamente
para garantir que atenda aos requisitos e especificações.

Os testes unitários deste projeto executaram os métodos `getWordCount`,
`getCharacterCount`, `getCharacterCountExcludingSpaces`, `getNumbersCount`,
`getNumbersSum` e `getAverageWordLength` com diferentes argumentos e verificam
se os valores retornados são os esperados.

Pode executar esses testes com o comando `npm run test` como mostrado
na imagem a seguir:

![npm run test](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650584-c8267968-d631-4fbb-b05f-458a970544b7.gif "npm run test")

O _boilerplate_ inclui tarefas que executam [eslint](https://eslint.org/) e
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar o `HTML` e
`JavaScript` em relação a diretrizes de estilo. Ambas as tarefas são executadas
automaticamente antes de executar os testes unitários ao usar o comando
`npm run test`. No caso do `JavaScript`, estamos usando um arquivo de configuração
do `eslint` chamado `.eslintrc`, que contém informações mínimas sobre o parser
a ser usado (qual versão do JavaScript/ECMAScript), o ambiente (navegador neste caso)
e as [regras recomendadas (`eslint:recommended`)](https://eslint.org/docs/rules/).
Em relação às próprias regras/diretrizes de estilo,
vamos seguir as recomendações _padrão_ tanto do `eslint` quanto do `htmlhint`.

### Testes de Critérios Mínimos de Aceitação

Esses testes analisam os arquivos
[`index.html`](src/index.html),
[`index.js`](src/index.html),
[`analyzer.js`](src/analyzer.js)
e
[`style.css`](src/style.css)
para verificar se você cumpre os
[critérios mínimos de aceitação](#6-critérios-de-aceitação-mínimos-do-projeto).
Cada critério está relacionado a um objetivo de aprendizado.

Pode executar todos esses testes com o comando `npm run test:oas`
como mostrado na imagem a seguir:

![npm run test oas](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650602-f0ca9170-7563-4edc-9e78-874fa012c4fd.gif "npm run test oas")

Também pode executar os testes de cada grupo de objetivos de aprendizado
individualmente com os seguintes comandos:

- `npm run test:oas-html`
- `npm run test:oas-css`
- `npm run test:oas-web-api`
- `npm run test:oas-js`

#### Testes End-to-End

Um teste end-to-end (E2E) é uma técnica de teste de software na qual se verifica
o funcionamento de todo o sistema, do início ao fim. Em outras palavras, é testado
o fluxo completo do software, simulando a interação da usuária com a aplicação,
para garantir que todas as partes do sistema funcionem corretamente em conjunto.

Pode executar esses testes com o comando `npm run test:e2e` como mostrado
na imagem a seguir:

![npm run test e2e](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650622-a4da630e-8d39-4dd8-9fde-1a38c31a53e2.gif "npm run test e2e")


## 7. Ferramentas utilizadas no processo


1. Canva - o que é...

    - **Construção do Protótipo**: a ap
   
2. Visual Studio Code - o que é...

    - **Construção do Código**: a a

3. Sublime Text - o que é...

    - **Anotações**: a apl


## 8. Autora
---

<a href="https://github.com/FabineSpecian" src="" width="100px;" alt=""/>
 <br />
 <sub><b>Fabine Specian</b></sub></a> <a href="https://github.com/FabineSpecian" title="https://github.com/FabineSpecian">🚀</a>


Feito com ❤️ por Fabine Specian 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/tgmarinho/) 

[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:fabine.specian@gmail.com)](mailto:fabine.specian@gmail.com)  