---
id: 5900f3781000cf542c50fe8b
challengeType: 5
title: 'Problem 12: Highly divisible triangular number'
videoUrl: ''
localeTitle: 'Problema 12: Número triangular altamente divisível'
---

## Description
<section id="description"> A seqüência de números do triângulo é gerada pela adição dos números naturais. Então o número do 7º triângulo seria 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Os primeiros dez termos seriam: <div style="text-align: center;"> 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ... </div> Vamos listar os fatores dos primeiros sete números do triângulo: <div style="padding-left: 4em;"> <b>1:</b> 1 </div><div style="padding-left: 4em;"> <b>3:</b> 1, 3 </div><div style="padding-left: 4em;"> <b>6:</b> 1, 2, 3, 6 </div><div style="padding-left: 4em;"> <b>10:</b> 1, 2, 5, 10 </div><div style="padding-left: 4em;"> <b>15:</b> 1, 3, 5, 15 </div><div style="padding-left: 4em;"> <b>21:</b> 1, 3, 7, 21 </div><div style="padding-left: 4em;"> <b>28:</b> 1, 2, 4, 7, 14, 28 </div> Podemos ver que 28 é o primeiro número do triângulo a ter mais de cinco divisores. Qual é o valor do primeiro número do triângulo para ter mais de <code>n</code> divisores? </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>divisibleTriangleNumber(5)</code> deve retornar 28.
    testString: 'assert.strictEqual(divisibleTriangleNumber(5), 28, "<code>divisibleTriangleNumber(5)</code> should return 28.");'
  - text: <code>divisibleTriangleNumber(23)</code> deve retornar 630.
    testString: 'assert.strictEqual(divisibleTriangleNumber(23), 630, "<code>divisibleTriangleNumber(23)</code> should return 630.");'
  - text: <code>divisibleTriangleNumber(167)</code> deve retornar 1385280.
    testString: 'assert.strictEqual(divisibleTriangleNumber(167), 1385280, "<code>divisibleTriangleNumber(167)</code> should return 1385280.");'
  - text: <code>divisibleTriangleNumber(374)</code> deve retornar 17907120.
    testString: 'assert.strictEqual(divisibleTriangleNumber(374), 17907120, "<code>divisibleTriangleNumber(374)</code> should return 17907120.");'
  - text: <code>divisibleTriangleNumber(500)</code> deve retornar 76576500.
    testString: 'assert.strictEqual(divisibleTriangleNumber(500), 76576500, "<code>divisibleTriangleNumber(500)</code> should return 76576500.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function divisibleTriangleNumber(n) {
  // Good luck!
  return true;
}

divisibleTriangleNumber(500);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
