---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Soma todos os números impares de Fibonacci
---

## Description
<section id="description"> Dado um inteiro positivo <code>num</code> , retornar a soma de todos os números de Fibonacci impares que são menor ou igual a <code>num</code> . Os dois primeiros números da sequência de Fibonacci são 1 e 1. Cada número adicional na sequência é a soma dos dois números anteriores. Os primeiros seis números da seqüência de Fibonacci são 1, 1, 2, 3, 5 e 8. Por exemplo, <code>sumFibs(10)</code> deve retornar <code>10</code> porque todos os números de Fibonacci ímpares menores ou iguais a <code>10</code> são 1, 1, 3 e 5. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumFibs(1)</code> deve retornar um número.
    testString: 'assert(typeof sumFibs(1) === "number", "<code>sumFibs(1)</code> should return a number.");'
  - text: <code>sumFibs(1000)</code> deve retornar 1785.
    testString: 'assert(sumFibs(1000) === 1785, "<code>sumFibs(1000)</code> should return 1785.");'
  - text: <code>sumFibs(4000000)</code> deve retornar 4613732.
    testString: 'assert(sumFibs(4000000) === 4613732, "<code>sumFibs(4000000)</code> should return 4613732.");'
  - text: <code>sumFibs(4)</code> deve retornar 5.
    testString: 'assert(sumFibs(4) === 5, "<code>sumFibs(4)</code> should return 5.");'
  - text: <code>sumFibs(75024)</code> deve retornar 60696.
    testString: 'assert(sumFibs(75024) === 60696, "<code>sumFibs(75024)</code> should return 60696.");'
  - text: <code>sumFibs(75025)</code> deve retornar 135721.
    testString: 'assert(sumFibs(75025) === 135721, "<code>sumFibs(75025)</code> should return 135721.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
