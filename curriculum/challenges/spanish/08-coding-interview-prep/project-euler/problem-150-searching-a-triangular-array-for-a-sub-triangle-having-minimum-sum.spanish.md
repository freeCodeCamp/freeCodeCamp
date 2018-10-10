---
id: 5900f4031000cf542c50ff15
challengeType: 5
title: 'Problem 150: Searching a triangular array for a sub-triangle having minimum-sum'
videoUrl: ''
localeTitle: 'Problema 150: buscar en una matriz triangular un sub-triángulo que tenga una suma mínima'
---

## Description
<section id="description"> En una matriz triangular de enteros positivos y negativos, deseamos encontrar un sub-triángulo tal que la suma de los números que contiene sea la más pequeña posible. En el siguiente ejemplo, se puede verificar fácilmente que el triángulo marcado cumple esta condición con una suma de −42. <p> Deseamos hacer una matriz triangular con mil filas, por lo que generamos 500500 números pseudoaleatorios en el rango ± 219, usando un tipo de generador de números aleatorios (conocido como un generador lineal congruente) de la siguiente manera: t: = 0 </p><p> para k = 1 hasta k = 500.500: </p><p> t: = (615949 * t + 797807) modulo 220 sk: = t − 219 Por lo tanto: s1 = 273519, s2 = −153582, s3 = 450905 etc. Nuestra matriz triangular se forma luego usando los números pseudoaleatorios: </p><p> s1 s2 s3 s4 s5 s6 </p><p> s7 s8 s9 s10 ... </p><p> Los sub-triángulos pueden comenzar en cualquier elemento de la matriz y extenderse hacia abajo como nos guste (tomando los dos elementos directamente debajo de ella desde la siguiente fila, los tres elementos directamente debajo de la fila después de eso, y así sucesivamente). </p><p> La &quot;suma de un sub-triángulo&quot; se define como la suma de todos los elementos que contiene. </p><p> Encuentra la suma de sub-triángulos más pequeña posible. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler150()</code> debe devolver -271248680.
    testString: 'assert.strictEqual(euler150(), -271248680, "<code>euler150()</code> should return -271248680.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler150() {
  // Good luck!
  return true;
}

euler150();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
