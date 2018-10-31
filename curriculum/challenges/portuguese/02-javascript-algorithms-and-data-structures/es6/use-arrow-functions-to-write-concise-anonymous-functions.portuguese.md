---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
videoUrl: ''
localeTitle: Use as funções de seta para escrever funções anônimas concisas
---

## Description
<section id="description"> Em JavaScript, geralmente não precisamos nomear nossas funções, especialmente ao passar uma função como um argumento para outra função. Em vez disso, criamos funções inline. Não precisamos nomear essas funções porque não as reutilizamos em nenhum outro lugar. Para conseguir isso, geralmente usamos a seguinte sintaxe: <blockquote> const myFunc = function () { <br> const myVar = &quot;valor&quot;; <br> return myVar; <br> } </blockquote> ES6 nos fornece o açúcar sintático para não ter que escrever funções anônimas dessa maneira. Em vez disso, você pode usar a <strong>sintaxe da função de seta</strong> : <blockquote> const myFunc = () =&gt; { <br> const myVar = &quot;valor&quot;; <br> return myVar; <br> } </blockquote> Quando não há corpo da função e apenas um valor de retorno, a sintaxe da função de seta permite omitir o <code>return</code> da palavra-chave, bem como os colchetes ao redor do código. Isso ajuda a simplificar funções menores em instruções de uma linha: <blockquote> const myFunc = () =&gt; &quot;valor&quot; </blockquote> Este código ainda retornará <code>value</code> por padrão. </section>

## Instructions
<section id="instructions"> Reescreva a função atribuída à variável <code>magic</code> que retorna um novo <code>Date()</code> para usar a sintaxe da função de seta. Também certifique-se de que nada seja definido usando a palavra-chave <code>var</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O usuário substituiu a palavra-chave <code>var</code> .
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: <code>magic</code> deve ser uma variável constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+magic/g), "<code>magic</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>magic</code> é uma <code>function</code> .
    testString: 'assert(typeof magic === "function", "<code>magic</code> is a <code>function</code>.");'
  - text: <code>magic()</code> retorna a data correta.
    testString: 'assert(magic().getDate() == new Date().getDate(), "<code>magic()</code> returns correct date.");'
  - text: palavra-chave de <code>function</code> não foi usada.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var magic = function() {
  "use strict";
  return new Date();
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
