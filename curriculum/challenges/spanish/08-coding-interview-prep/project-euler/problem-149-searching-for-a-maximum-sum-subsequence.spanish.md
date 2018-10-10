---
id: 5900f4021000cf542c50ff13
challengeType: 5
title: 'Problem 149: Searching for a maximum-sum subsequence'
videoUrl: ''
localeTitle: 'Problema 149: Buscar una subsecuencia de suma máxima'
---

## Description
<section id="description"> Mirando la tabla de abajo, es fácil verificar que la suma máxima posible de números adyacentes en cualquier dirección (horizontal, vertical, diagonal o anti-diagonal) es 16 (= 8 + 7 + 1). <p> −25329−6513273−18−4 8 </p><p> Ahora, repitamos la búsqueda, pero en una escala mucho mayor: </p><p> Primero, genere cuatro millones de números pseudoaleatorios utilizando una forma específica de lo que se conoce como &quot;Generador de Fibonacci Rezagado&quot;: </p><p> Para 1 ≤ k ≤ 55, sk = [100003 - 200003k + 300007k3] (módulo 1000000) - 500000. Para 56 ≤ k ≤ 4000000, sk = [sk − 24 + sk − 55 + 1000000] (módulo 1000000) - 500000. </p><p> Por lo tanto, s10 = −393027 y s100 = 86613. </p><p> Los términos de s se organizan en una tabla de 2000 × 2000, utilizando los primeros 2000 números para completar la primera fila (secuencialmente), los siguientes 2000 números para completar la segunda fila, y así sucesivamente. </p><p> Finalmente, encuentre la mayor suma de (cualquier número de) entradas adyacentes en cualquier dirección (horizontal, vertical, diagonal o anti-diagonal). </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler149()</code> debe devolver 52852124.
    testString: 'assert.strictEqual(euler149(), 52852124, "<code>euler149()</code> should return 52852124.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler149() {
  // Good luck!
  return true;
}

euler149();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
