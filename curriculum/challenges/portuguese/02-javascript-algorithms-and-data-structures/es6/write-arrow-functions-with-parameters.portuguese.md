---
id: 587d7b88367417b2b2512b44
title: Write Arrow Functions with Parameters
challengeType: 1
videoUrl: ''
localeTitle: Escrever funções de seta com parâmetros
---

## Description
<section id="description"> Assim como uma função normal, você pode passar argumentos para as funções de seta. <blockquote> // duplica o valor de entrada e retorna <br> const doubler = (item) =&gt; item * 2; </blockquote> Você pode passar mais de um argumento em funções de seta também. </section>

## Instructions
<section id="instructions"> Reescreva a função <code>myConcat</code> que anexa o conteúdo de <code>arr2</code> a <code>arr1</code> para que a função use a sintaxe da função de seta. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O usuário substituiu a palavra-chave <code>var</code> .
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: <code>myConcat</code> deve ser uma variável constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+myConcat/g), "<code>myConcat</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>myConcat</code> deve ser uma função
    testString: 'assert(typeof myConcat === "function", "<code>myConcat</code> should be a function");'
  - text: <code>myConcat()</code> retorna o <code>array</code> correto
    testString: 'assert(() => { const a = myConcat([1], [2]); return a[0] == 1 && a[1] == 2; }, "<code>myConcat()</code> returns the correct <code>array</code>");'
  - text: palavra-chave de <code>function</code> não foi usada.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
