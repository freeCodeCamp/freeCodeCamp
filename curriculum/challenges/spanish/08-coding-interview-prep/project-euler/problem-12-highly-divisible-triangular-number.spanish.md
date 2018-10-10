---
id: 5900f3781000cf542c50fe8b
challengeType: 5
title: 'Problem 12: Highly divisible triangular number'
videoUrl: ''
localeTitle: 'Problema 12: Número triangular altamente divisible'
---

## Description
<section id="description"> La secuencia de los números de triángulos se genera al sumar los números naturales. Entonces, el número del séptimo triángulo sería 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Los primeros diez términos serían: <div style="text-align: center;"> 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ... </div> Enlistemos los factores de los primeros siete números de triángulos: <div style="padding-left: 4em;"> <b>1:</b> 1 </div><div style="padding-left: 4em;"> <b>3:</b> 1, 3 </div><div style="padding-left: 4em;"> <b>6:</b> 1, 2, 3, 6 </div><div style="padding-left: 4em;"> <b>10:</b> 1, 2, 5, 10 </div><div style="padding-left: 4em;"> <b>15:</b> 1, 3, 5, 15 </div><div style="padding-left: 4em;"> <b>21:</b> 1, 3, 7, 21 </div><div style="padding-left: 4em;"> <b>28:</b> 1, 2, 4, 7, 14, 28 </div> Podemos ver que 28 es el primer número de triángulo que tiene más de cinco divisores. ¿Cuál es el valor del primer número de triángulo que tiene más de <code>n</code> divisores? </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>divisibleTriangleNumber(5)</code> debe devolver 28.
    testString: 'assert.strictEqual(divisibleTriangleNumber(5), 28, "<code>divisibleTriangleNumber(5)</code> should return 28.");'
  - text: <code>divisibleTriangleNumber(23)</code> debe devolver 630.
    testString: 'assert.strictEqual(divisibleTriangleNumber(23), 630, "<code>divisibleTriangleNumber(23)</code> should return 630.");'
  - text: <code>divisibleTriangleNumber(167)</code> debe devolver 1385280.
    testString: 'assert.strictEqual(divisibleTriangleNumber(167), 1385280, "<code>divisibleTriangleNumber(167)</code> should return 1385280.");'
  - text: <code>divisibleTriangleNumber(374)</code> debe devolver 17907120.
    testString: 'assert.strictEqual(divisibleTriangleNumber(374), 17907120, "<code>divisibleTriangleNumber(374)</code> should return 17907120.");'
  - text: <code>divisibleTriangleNumber(500)</code> debe devolver 76576500.
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
