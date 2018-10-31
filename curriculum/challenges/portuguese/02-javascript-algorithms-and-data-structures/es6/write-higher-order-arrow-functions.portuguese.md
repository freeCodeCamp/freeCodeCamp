---
id: 587d7b88367417b2b2512b45
title: Write Higher Order Arrow Functions
challengeType: 1
videoUrl: ''
localeTitle: Escrever funções de seta de ordem superior
---

## Description
<section id="description"> É hora de vermos como as funções de flecha são poderosas ao processar dados. As funções de seta funcionam muito bem com funções de ordem superior, como <code>map()</code> , <code>filter()</code> e <code>reduce()</code> , que tomam outras funções como argumentos para o processamento de coleções de dados. Leia o seguinte código: <blockquote> FBPosts.filter (function (post) { <br> return post.thumbnail! == null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500; <br> }) </blockquote> Nós escrevemos isso com <code>filter()</code> para pelo menos torná-lo um pouco legível. Agora, compare-o ao seguinte código que usa a sintaxe da função de seta: <blockquote> FBPosts.filter ((post) =&gt; post.thumbnail! == null &amp;&amp; post.shares&gt; 100 &amp;&amp; post.likes&gt; 500) </blockquote> Esse código é mais sucinto e realiza a mesma tarefa com menos linhas de código. </section>

## Instructions
<section id="instructions"> Use a sintaxe da função de seta para calcular o quadrado de apenas os inteiros positivos (os números decimais não são inteiros) na matriz <code>realNumberArray</code> e armazene a nova matriz na variável <code>squaredIntegers</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>squaredIntegers</code> deve ser uma variável constante (usando <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+squaredIntegers/g), "<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>squaredIntegers</code> deve ser um <code>array</code>
    testString: 'assert(Array.isArray(squaredIntegers), "<code>squaredIntegers</code> should be an <code>array</code>");'
  - text: '<code>squaredIntegers</code> deve ser <code>[16, 1764, 36]</code>'
    testString: 'assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], "<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>");'
  - text: palavra-chave de <code>function</code> não foi usada.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'
  - text: loop não deve ser usado
    testString: 'getUserInput => assert(!getUserInput("index").match(/(for)|(while)/g), "loop should not be used");'
  - text: '<code>map</code> , <code>filter</code> ou <code>reduce</code> deve ser usado'
    testString: 'getUserInput => assert(getUserInput("index").match(/map|filter|reduce/g), "<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
