---
id: 587d7b87367417b2b2512b41
title: Declare a Read-Only Variable with the const Keyword
challengeType: 1
videoUrl: ''
localeTitle: Declarar uma variável somente leitura com a palavra-chave const
---

## Description
<section id="description"> <code>let</code> não é a única maneira nova para declarar variáveis. No ES6, você também pode declarar variáveis ​​usando a palavra-chave <code>const</code> . <code>const</code> tem todos os recursos incríveis que <code>let</code> , com a vantagem adicional de que as variáveis ​​declaradas usando <code>const</code> são somente leitura. Eles são um valor constante, o que significa que, uma vez que uma variável é atribuída com <code>const</code> , ela não pode ser reatribuída. <blockquote> &quot;use strict&quot; <br> const FAV_PET = &quot;Gatos&quot;; <br> FAV_PET = &quot;Cães&quot;; // retorna erro </blockquote> Como você pode ver, tentar reatribuir uma variável declarada com <code>const</code> causará um erro. Você deve sempre nomear as variáveis ​​que não deseja reatribuir usando a palavra-chave <code>const</code> . Isso ajuda quando você acidentalmente tenta reatribuir uma variável que deve permanecer constante. Uma prática comum ao nomear constantes é usar todas as letras maiúsculas, com palavras separadas por um sublinhado. </section>

## Instructions
<section id="instructions"> Altere o código para que todas as variáveis ​​sejam declaradas usando <code>let</code> ou <code>const</code> . Use <code>let</code> quando quiser que a variável seja alterada e <code>const</code> quando quiser que a variável permaneça constante. Além disso, renomeie as variáveis ​​declaradas com <code>const</code> para estar em conformidade com as práticas comuns, o que significa que as constantes devem estar em maiúsculas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> não existe em seu código.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in your code.");'
  - text: <code>SENTENCE</code> deve ser uma variável constante declarada com <code>const</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/(const SENTENCE)/g), "<code>SENTENCE</code> should be a constant variable declared with <code>const</code>.");'
  - text: <code>i</code> deveria ser declarado com <code>let</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/(let i)/g), "<code>i</code> should be declared with <code>let</code>.");'
  - text: <code>console.log</code> deve ser alterado para imprimir a variável <code>SENTENCE</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g), "<code>console.log</code> should be adjusted to print the variable <code>SENTENCE</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  var sentence = str + " is cool!";
  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
