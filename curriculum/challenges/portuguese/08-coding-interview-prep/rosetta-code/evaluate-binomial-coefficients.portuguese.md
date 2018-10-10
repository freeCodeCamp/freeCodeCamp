---
title: Evaluate binomial coefficients
id: 598de241872ef8353c58a7a2
challengeType: 5
videoUrl: ''
localeTitle: Avaliar coeficientes binomiais
---

## Description
<section id="description"><p> Escreva uma função para calcular o coeficiente binomial para o valor dado de n e k. </p><p> Esta fórmula é recomendada: </p> $ \ binom {n} {k} = \ frac {n!} {(nk)! k!} = \ frac {n (n-1) (n-2) \ ldots (n-k + 1)} { k (k-1) (k-2) \ ldots 1} $ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>binom</code> é uma função.
    testString: 'assert(typeof binom === "function", "<code>binom</code> is a function.");'
  - text: '<code>binom(5,3)</code> deve retornar 10.'
    testString: 'assert.equal(binom(5, 3), 10, "<code>binom(5,3)</code> should return 10.");'
  - text: '<code>binom(7,2)</code> deve retornar 21.'
    testString: 'assert.equal(binom(7, 2), 21, "<code>binom(7,2)</code> should return 21.");'
  - text: '<code>binom(10,4)</code> deve retornar 210.'
    testString: 'assert.equal(binom(10, 4), 210, "<code>binom(10,4)</code> should return 210.");'
  - text: '<code>binom(6,1)</code> deve retornar 6.'
    testString: 'assert.equal(binom(6, 1), 6, "<code>binom(6,1)</code> should return 6.");'
  - text: '<code>binom(12,8)</code> deve retornar 495.'
    testString: 'assert.equal(binom(12, 8), 495, "<code>binom(12,8)</code> should return 495.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function binom (n, k) {
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
