---
id: 5900f3891000cf542c50fe9c
challengeType: 5
title: 'Problem 29: Distinct powers'
videoUrl: ''
localeTitle: 'Problema 29: poderes distintos'
---

## Description
<section id="description"> Considere todas las combinaciones de números enteros de ab para 2 ≤ a ≤ 5 y 2 ≤ b ≤ 5: 22 = 4, 23 = 8, 24 = 16, 25 = 32 32 = 9, 33 = 27, 34 = 81, 35 = 243 42 = 16, 43 = 64, 44 = 256, 45 = 1024 52 = 25, 53 = 125, 54 = 625, 55 = 3125 Si luego se colocan en orden numérico, con cualquier repetición eliminada, obtenemos la siguiente secuencia de 15 términos distintos: 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125 ¿Cuántos términos distintos hay en la secuencia generada por ab para 2 ≤ a ≤ n y 2 ≤ b ≤ n? </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>distinctPowers(15)</code> debe devolver 177.
    testString: 'assert.strictEqual(distinctPowers(15), 177, "<code>distinctPowers(15)</code> should return 177.");'
  - text: <code>distinctPowers(20)</code> debe devolver 324.
    testString: 'assert.strictEqual(distinctPowers(20), 324, "<code>distinctPowers(20)</code> should return 324.");'
  - text: <code>distinctPowers(25)</code> debe devolver 519.
    testString: 'assert.strictEqual(distinctPowers(25), 519, "<code>distinctPowers(25)</code> should return 519.");'
  - text: <code>distinctPowers(30)</code> debe devolver 755.
    testString: 'assert.strictEqual(distinctPowers(30), 755, "<code>distinctPowers(30)</code> should return 755.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function distinctPowers(n) {
  // Good luck!
  return n;
}

distinctPowers(30);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
