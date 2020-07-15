---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Suma todos los números impares de Fibonacci
---

## Description
<section id="description"> Dado un número entero positivo <code>num</code> , devolver la suma de todos los números impares de Fibonacci que son menos que o igual a <code>num</code> . Los primeros dos números en la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los primeros seis números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8. Por ejemplo, <code>sumFibs(10)</code> debe devolver <code>10</code> porque todos los números de Fibonacci impares menores o iguales a <code>10</code> son 1, 1, 3 y 5. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumFibs(1)</code> debe devolver un número.
    testString: 'assert(typeof sumFibs(1) === "number", "<code>sumFibs(1)</code> should return a number.");'
  - text: <code>sumFibs(1000)</code> debe devolver 1785.
    testString: 'assert(sumFibs(1000) === 1785, "<code>sumFibs(1000)</code> should return 1785.");'
  - text: <code>sumFibs(4000000)</code> debe devolver 4613732.
    testString: 'assert(sumFibs(4000000) === 4613732, "<code>sumFibs(4000000)</code> should return 4613732.");'
  - text: <code>sumFibs(4)</code> debe devolver 5.
    testString: 'assert(sumFibs(4) === 5, "<code>sumFibs(4)</code> should return 5.");'
  - text: <code>sumFibs(75024)</code> debe devolver 60696.
    testString: 'assert(sumFibs(75024) === 60696, "<code>sumFibs(75024)</code> should return 60696.");'
  - text: <code>sumFibs(75025)</code> debe devolver 135721.
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
