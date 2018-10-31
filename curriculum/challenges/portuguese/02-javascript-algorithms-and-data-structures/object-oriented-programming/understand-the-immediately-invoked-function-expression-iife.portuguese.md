---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
videoUrl: ''
localeTitle: Entenda a Expressão de Função Imediatamente Invocada (IIFE)
---

## Description
<section id="description"> Um padrão comum em JavaScript é executar uma função assim que ela é declarada: <blockquote> (function () { <br> console.log (&quot;Chirp, chirp!&quot;); <br> }) (); // esta é uma expressão de função anônima que é executada imediatamente <br> // Saídas &quot;Chirp, chirp!&quot; imediatamente </blockquote> Note que a função não tem nome e não é armazenada em uma variável. Os dois parênteses () no final da expressão da função fazem com que ela seja imediatamente executada ou chamada. Esse padrão é conhecido como uma <code>immediately invoked function expression</code> ou <code>IIFE</code> . </section>

## Instructions
<section id="instructions"> Reescreva a função <code>makeNest</code> e remova sua chamada, em vez disso, é uma <code>immediately invoked function expression</code> ( <code>IIFE</code> ) anônima <code>immediately invoked function expression</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A função deve ser anônima.
    testString: 'assert(/\(\s*?function\s*?\(\s*?\)\s*?{/.test(code), "The function should be anonymous.");'
  - text: Sua função deve ter parênteses no final da expressão para chamá-lo imediatamente.
    testString: 'assert(/}\s*?\)\s*?\(\s*?\)/.test(code), "Your function should have parentheses at the end of the expression to call it immediately.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
