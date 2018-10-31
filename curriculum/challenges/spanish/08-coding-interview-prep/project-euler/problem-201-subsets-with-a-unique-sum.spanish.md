---
id: 5900f4361000cf542c50ff48
challengeType: 5
title: 'Problem 201: Subsets with a unique sum'
videoUrl: ''
localeTitle: 'Problema 201: Subconjuntos con una suma única'
---

## Description
<section id="description"> Para cualquier conjunto A de números, sea la suma (A) la suma de los elementos de A. Considere el conjunto B = {1,3,6,8,10,11}. Hay 20 subconjuntos de B que contienen tres elementos, y sus sumas son: <p> suma ({1,3,6}) = 10, suma ({1,3,8}) = 12, suma ({1,3,10}) = 14, suma ({1,3,11}) = 15, suma ({1,6,8}) = 15, suma ({1,6,10}) = 17, suma ({1,6,11}) = 18, suma ({1,8,10} ) = 19, suma ({1,8,11}) = 20, suma ({1,10,11}) = 22, suma ({3,6,8}) = 17, suma ({3,6, 10}) = 19, suma ({3,6,11}) = 20, suma ({3,8,10}) = 21, suma ({3,8,11}) = 22, suma ({3, 10,11}) = 24, suma ({6,8,10}) = 24, suma ({6,8,11}) = 25, suma ({6,10,11}) = 27, suma ({ 8,10,11}) = 29. </p><p> Algunas de estas sumas ocurren más de una vez, otras son únicas. Para un conjunto A, sea U (A, k) el conjunto de sumas únicas de subconjuntos de elementos k de A, en nuestro ejemplo encontramos U (B, 3) = {10,12,14,18,21,25 , 27,29} y suma (U (B, 3)) = 156. </p><p> Ahora considere el conjunto de 100 elementos S = {12, 22, ..., 1002}. S tiene 100891344545564193334812497256 subconjuntos de 50 elementos. </p><p> Determine la suma de todos los enteros que son la suma de exactamente uno de los subconjuntos de S de 50 elementos, es decir, encuentre la suma (U (S, 50)). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler201()</code> debe devolver 115039000.
    testString: 'assert.strictEqual(euler201(), 115039000, "<code>euler201()</code> should return 115039000.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler201() {
  // Good luck!
  return true;
}

euler201();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
