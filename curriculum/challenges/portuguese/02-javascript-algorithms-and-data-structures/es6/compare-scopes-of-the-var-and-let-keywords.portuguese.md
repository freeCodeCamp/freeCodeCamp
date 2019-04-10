---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: Compare escopos das palvras-chave var e let
---

## Description
<section id="description"> Quando você declara uma variável com a palavra-chave <code>var</code> , ela é declarada globalmente ou localmente se declarada dentro de uma função. A palavra-chave <code>let</code> se comporta de maneira semelhante, mas com alguns recursos extras. Quando você declara uma variável com a palavra-chave <code>let</code> dentro de um bloco, instrução ou expressão, seu escopo é limitado a esse bloco, instrução ou expressão. Por exemplo: <blockquote> var numArray = []; <br> para (var i = 0; i &lt;3; i ++) { <br> numArray.push (i); <br> } <br> console.log (numArray); <br> // retorna [0, 1, 2] <br> console.log (i); <br> // retorna 3 </blockquote> Com a palavra-chave <code>var</code> , <code>i</code> é declarado globalmente. Então, quando o <code>i++</code> é executado, ele atualiza a variável global. Este código é semelhante ao seguinte: <blockquote> var numArray = []; <br> var i; <br> para (i = 0; i &lt;3; i ++) { <br> numArray.push (i); <br> } <br> console.log (numArray); <br> // retorna [0, 1, 2] <br> console.log (i); <br> // retorna 3 </blockquote> Esse comportamento causará problemas se você criar uma função e armazená-la para uso posterior dentro de um loop for que use a variável <code>i</code> . Isso ocorre porque a função armazenada sempre se referirá ao valor da variável global <code>i</code> atualizada. <blockquote> var printNumTwo; <br> para (var i = 0; i &lt;3; i ++) { <br> if (i === 2) { <br> printNumTwo = function () { <br> return i; <br> }; <br> } <br> } <br> console.log (printNumTwo ()); <br> // retorna 3 </blockquote> Como você pode ver, <code>printNumTwo()</code> imprime 3 e não 2. Isso ocorre porque o valor atribuído a <code>i</code> foi atualizado e o <code>printNumTwo()</code> retorna o <code>i</code> global e não o valor que <code>i</code> tinha quando a função foi criada no loop for. A palavra-chave <code>let</code> não segue esse comportamento: <blockquote> &#39;use strict&#39;; <br> deixe printNumTwo; <br> para (let i = 0; i &lt;3; i ++) { <br> if (i === 2) { <br> printNumTwo = function () { <br> return i; <br> }; <br> } <br> } <br> console.log (printNumTwo ()); <br> // retorna 2 <br> console.log (i); <br> // retorna &quot;i não está definido&quot; </blockquote> <code>i</code> não está definido porque não foi declarado no escopo global. Apenas é declarado dentro da instrução for loop. <code>printNumTwo()</code> retornou o valor correto porque três variáveis <code>i</code> diferentes com valores exclusivos (0, 1 e 2) foram criadas pela palavra-chave <code>let</code> dentro da instrução loop. </section>

## Instructions
<section id="instructions"> Corrigir o código para que <code>i</code> declarado na declaração if é uma variável separada do que <code>i</code> declarado na primeira linha da função. Certifique-se de não usar a palavra-chave <code>var</code> em nenhum lugar do seu código. Este exercício foi projetado para ilustrar a diferença entre como <code>var</code> e <code>let</code> keywords atribuem escopo à variável declarada. Ao programar uma função semelhante à usada neste exercício, é melhor usar nomes de variáveis ​​diferentes para evitar confusão. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> não existe no código.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in code.");'
  - text: A variável <code>i</code> declarada na instrução if deve ser igual a &quot;escopo de bloco&quot;.
    testString: 'getUserInput => assert(getUserInput("index").match(/(i\s*=\s*).*\s*.*\s*.*\1("|")block\s*scope\2/g), "The variable <code>i</code> declared in the if statement should equal "block scope".");'
  - text: <code>checkScope()</code> deve retornar &quot;escopo de função&quot;
    testString: 'assert(checkScope() === "function scope", "<code>checkScope()</code> should return "function scope"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkScope() {
"use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
