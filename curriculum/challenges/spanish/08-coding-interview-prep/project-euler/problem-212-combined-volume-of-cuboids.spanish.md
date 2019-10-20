---
id: 5900f4411000cf542c50ff53
challengeType: 5
title: 'Problem 212: Combined Volume of Cuboids'
videoUrl: ''
localeTitle: 'Problema 212: Volumen Combinado de Cuboids'
---

## Description
<section id="description"> Un cuboide alineado con el eje, especificado por los parámetros {(x0, y0, z0), (dx, dy, dz)}, consta de todos los puntos (X, Y, Z) de manera que x0 ≤ X ≤ x0 + dx, y0 ≤ Y ≤ y0 + dy y z0 ≤ Z ≤ z0 + dz. El volumen del cuboide es el producto, dx × dy × dz. El volumen combinado de una colección de cuboides es el volumen de su unión y será menor que la suma de los volúmenes individuales si alguno de los cuboides se superponen. <p> Sean C1, ..., C50000 una colección de 50000 cuboides alineados con el eje, de manera que Cn tenga parámetros </p><p> x0 = S6n-5 modulo 10000y0 = S6n-4 modulo 10000z0 = S6n-3 modulo 10000dx = 1 + (S6n-2 modulo 399) dy = 1 + (S6n-1 modulo 399) dz = 1 + (S6n modulo 399) </p><p> donde S1, ..., S300000 provienen del &quot;Generador de Fibonacci Lagged&quot;: </p><p> Para 1 ≤ k ≤ 55, Sk = [100003 - 200003k + 300007k3] (módulo 1000000) Para 56 ≤ k, Sk = [Sk-24 + Sk-55] (módulo 1000000) </p><p> Por lo tanto, C1 tiene los parámetros {(7,53,183), (94,369,56)}, C2 tiene los parámetros {(2383,3563,5079), (42,212,344)}, y así sucesivamente. </p><p> El volumen combinado de los primeros 100 cuboides, C1, ..., C100, es 723581599. </p><p> ¿Cuál es el volumen combinado de todos los 50000 cuboides, C1, ..., C50000? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler212()</code> debe devolver 328968937309.
    testString: 'assert.strictEqual(euler212(), 328968937309, "<code>euler212()</code> should return 328968937309.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler212() {
  // Good luck!
  return true;
}

euler212();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
