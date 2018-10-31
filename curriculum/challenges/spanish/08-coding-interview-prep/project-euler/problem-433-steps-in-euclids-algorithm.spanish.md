---
id: 5900f51d1000cf542c51002f
challengeType: 5
title: 'Problem 433: Steps in Euclid"s algorithm'
videoUrl: ''
localeTitle: 'Problema 433: Pasos en el algoritmo de Euclides'
---

## Description
<section id="description"> Sea E (x0, y0) el número de pasos necesarios para determinar el mayor divisor común de x0 y y0 con el algoritmo de Euclid. Más formalmente: x1 = y0, y1 = x0 mod y0xn = yn-1, yn = xn-1 mod yn-1 E (x0, y0) es la n más pequeña, tal que yn = 0. <p> Tenemos E (1,1) = 1, E (10,6) = 3 y E (6,10) = 4. </p><p> Defina S (N) como la suma de E (x, y) para 1 ≤ x, y ≤ N. Tenemos S (1) = 1, S (10) = 221 y S (100) = 39826. </p><p> Encontrar S (5 · 106). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler433()</code> debe devolver 326624372659664.
    testString: 'assert.strictEqual(euler433(), 326624372659664, "<code>euler433()</code> should return 326624372659664.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler433() {
  // Good luck!
  return true;
}

euler433();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
