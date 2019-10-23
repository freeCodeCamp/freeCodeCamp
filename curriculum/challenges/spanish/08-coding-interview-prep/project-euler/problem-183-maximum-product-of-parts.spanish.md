---
id: 5900f4231000cf542c50ff36
challengeType: 5
title: 'Problem 183: Maximum product of parts'
videoUrl: ''
localeTitle: 'Problema 183: Producto máximo de piezas.'
---

## Description
<section id="description"> Sea N un entero positivo y sea N dividido en k partes iguales, r = N / k, de modo que N = r + r + ... + r. Sea P el producto de estas partes, P = r × r × ... × r = rk. <p> Por ejemplo, si 11 se divide en cinco partes iguales, 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2, entonces P = 2.25 = 51.53632. </p><p> Sea M (N) = Pmax para un valor dado de N. </p><p> Resulta que el máximo para N = 11 se encuentra dividiendo once en cuatro partes iguales, lo que lleva a Pmax = (11/4) 4; es decir, M (11) = 14641/256 = 57.19140625, que es un decimal de terminación. </p><p> Sin embargo, para N = 8, el máximo se logra dividiéndolo en tres partes iguales, por lo que M (8) = 512/27, que es un decimal sin terminación. </p><p> Sea D (N) = N si M (N) es un decimal no terminado y D (N) = -N si M (N) es un decimal terminal. </p><p> Por ejemplo, ΣD (N) para 5 ≤ N ≤ 100 es 2438. </p><p> Encuentre ΣD (N) para 5 ≤ N ≤ 10000. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler183()</code> debe devolver 48861552.
    testString: 'assert.strictEqual(euler183(), 48861552, "<code>euler183()</code> should return 48861552.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler183() {
  // Good luck!
  return true;
}

euler183();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
