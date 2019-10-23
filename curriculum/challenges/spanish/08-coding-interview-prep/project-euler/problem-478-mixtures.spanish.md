---
id: 5900f54c1000cf542c51005e
challengeType: 5
title: 'Problem 478: Mixtures'
videoUrl: ''
localeTitle: 'Problema 478: Mezclas'
---

## Description
<section id="description"> Consideremos mezclas de tres sustancias: A, B y C. Una mezcla puede describirse por una proporción de las cantidades de A, B y C en ella, es decir, (a: b: c). Por ejemplo, una mezcla descrita por la relación (2: 3: 5) contiene 20% de A, 30% de B y 50% de C. <p> Para los propósitos de este problema, no podemos separar los componentes individuales de una mezcla. Sin embargo, podemos combinar diferentes cantidades de diferentes mezclas para formar mezclas con nuevas proporciones. </p><p> Por ejemplo, digamos que tenemos tres mezclas con relaciones (3: 0: 2), (3: 6: 11) y (3: 3: 4). Al mezclar 10 unidades del primero, 20 unidades del segundo y 30 unidades del tercero, obtenemos una nueva mezcla con relación (6: 5: 9), ya que: (10 · 3/5 + 20 · 3/20 + 30 · 3/10: 10 · 0/5 + 20 · 6/20 + 30 · 3/10: 10 · 2/5 + 20 · 11/20 + 30 · 4/10) = (18: 15: 27) = (6: 5: 9) </p><p> Sin embargo, con las mismas tres mezclas, es imposible formar la relación (3: 2: 1), ya que la cantidad de B es siempre menor que la cantidad de C. </p><p> Sea n un entero positivo. Supongamos que por cada triple de enteros (a, b, c) con 0 ≤ a, b, c ≤ n y gcd (a, b, c) = 1, tenemos una mezcla con relación (a: b: c). Sea M (n) el conjunto de todas estas mezclas. </p><p> Por ejemplo, M (2) contiene las 19 mezclas con las siguientes relaciones: {(0: 0: 1), (0: ​​1: 0), (0: ​​1: 1), (0: ​​1: 2), ( 0: 2: 1), (1: 0: 0), (1: 0: 1), (1: 0: 2), (1: 1: 0), (1: 1: 1), (1: 1: 2), (1: 2: 0), (1: 2: 1), (1: 2: 2), (2: 0: 1), (2: 1: 0), (2: 1: 1), (2: 1: 2), (2: 2: 1)}. </p><p> Sea E (n) el número de subconjuntos de M (n) que puede producir la mezcla con relación (1: 1: 1), es decir, la mezcla con partes iguales A, B y C. Podemos verificar que E (1) ) = 103, E (2) = 520447, E (10) mod 118 = 82608406 y E (500) mod 118 = 13801403. Encuentre E (10 000 000) mod 118. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler478()</code> debe devolver 59510340.
    testString: 'assert.strictEqual(euler478(), 59510340, "<code>euler478()</code> should return 59510340.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler478() {
  // Good luck!
  return true;
}

euler478();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
