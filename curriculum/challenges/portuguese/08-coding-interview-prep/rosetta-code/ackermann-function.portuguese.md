---
title: Ackermann function
id: 594810f028c0303b75339acf
challengeType: 5
videoUrl: ''
localeTitle: Função Ackermann
---

## Description
<section id="description"><p> A função Ackermann é um exemplo clássico de uma função recursiva, notável principalmente porque não é uma função recursiva primitiva. Ela cresce muito rapidamente em valor, assim como o tamanho de sua árvore de chamadas. </p><p> A função Ackermann é geralmente definida da seguinte forma: </p> $$ A (m, n) = \ begin {casos} n + 1 &amp; \ mbox {if} m = 0 \\ A (m-1, 1) e \ mbox {if} m&gt; 0 \ mbox {e} n = 0 \\ A (m-1, A (m, n-1)) e \ mbox {if} m&gt; 0 \ mbox {e} n&gt; 0. \ end {cases} $$ <p> Seus argumentos nunca são negativos e sempre terminam. Escreva uma função que retorne o valor de $ A (m, n) $. Precisão arbitrária é preferida (já que a função cresce tão rapidamente), mas não é necessária. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ack</code> é uma função.
    testString: 'assert(typeof ack === "function", "<code>ack</code> is a function.");'
  - text: '<code>ack(0, 0)</code> deve retornar 1.'
    testString: 'assert(ack(0, 0) === 1, "<code>ack(0, 0)</code> should return 1.");'
  - text: '<code>ack(1, 1)</code> deve retornar 3.'
    testString: 'assert(ack(1, 1) === 3, "<code>ack(1, 1)</code> should return 3.");'
  - text: '<code>ack(2, 5)</code> deve retornar 13.'
    testString: 'assert(ack(2, 5) === 13, "<code>ack(2, 5)</code> should return 13.");'
  - text: '<code>ack(3, 3)</code> deve retornar 61.'
    testString: 'assert(ack(3, 3) === 61, "<code>ack(3, 3)</code> should return 61.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function ack (m, n) {
  // Good luck!
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
