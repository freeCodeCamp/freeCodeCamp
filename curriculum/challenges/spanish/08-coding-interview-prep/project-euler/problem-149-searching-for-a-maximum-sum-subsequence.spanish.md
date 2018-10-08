---
id: 5
localeTitle: 5900f4021000cf542c50ff13
challengeType: 5
title: 'Problem 149: Searching for a maximum-sum subsequence'
---

## Description
<section id='description'> 
Mirando la tabla de abajo, es fácil verificar que la suma máxima posible de números adyacentes en cualquier dirección (horizontal, vertical, diagonal o anti-diagonal) es 16 (= 8 + 7 + 1). 


−25329−6513273−18−4 8 

Ahora, repitamos la búsqueda, pero en una escala mucho mayor: 

Primero, genere cuatro millones de números pseudoaleatorios utilizando una forma específica de lo que se conoce como &quot;Lagged Fibonacci Generator&quot;: 

para 1 ≤ k ≤ 55, sk = [100003 - 200003k + 300007k3] (módulo 1000000) - 500000. 
para 56 ≤ k ≤ 4000000, sk = [sk − 24 + sk − 55 + 1000000] (módulo 1000000) - 500000. 

Por lo tanto, s10 = −393027 y s100 = 86613. 

Los términos de s se ordenan en una tabla de 2000 × 2000, usando los primeros 2000 números para llenar la primera fila (secuencialmente ), los siguientes 2000 números para llenar la segunda fila, y así sucesivamente. 

Finalmente, encuentre la mayor suma de (cualquier número de) entradas adyacentes en cualquier dirección (horizontal, vertical, diagonal o anti-diagonal). 
</section>

## Instructions
<section id='instructions'> 

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
