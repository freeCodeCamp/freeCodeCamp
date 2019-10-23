---
id: 5900f4091000cf542c50ff1b
challengeType: 5
title: 'Problem 156: Counting Digits'
videoUrl: ''
localeTitle: 'Problema 156: contando los dígitos'
---

## Description
<section id="description"> A partir de cero, los números naturales se escriben en la base 10 de la siguiente manera: <p> 0 1 2 3 4 5 6 7 8 9 10 11 12 .... </p><p> Considere el dígito d = 1. Después de anotar cada número n, actualizaremos el número de los que se han producido y llamaremos a este número f (n, 1). Los primeros valores para f (n, 1), entonces, son los siguientes: </p><p> nf (n, 1) 00 11 21 31 41 51 61 71 81 91 102 114 125 125 </p><p> Tenga en cuenta que f (n, 1) nunca es igual a 3. </p><p> Así que las dos primeras soluciones de la ecuación f (n, 1) = n son n = 0 y n = 1. La siguiente solución es n = 199981. De la misma manera, la función f (n, d) da el número total de dígitos d que se han escrito después de que se haya escrito el número n. </p><p> De hecho, para cada dígito d ≠ 0, 0 es la primera solución de la ecuación f (n, d) = n. Sea s (d) la suma de todas las soluciones para las cuales f (n, d) = n. </p><p> Se le da que s (1) = 22786974071. Encuentre ∑ s (d) para 1 ≤ d ≤ 9. Nota: si, para algunos n, f (n, d) = n para más de un valor de d, este valor de n se cuenta de nuevo para cada valor de d para el cual f (n, d) = n. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler156()</code> debe devolver 21295121502550.
    testString: 'assert.strictEqual(euler156(), 21295121502550, "<code>euler156()</code> should return 21295121502550.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler156() {
  // Good luck!
  return true;
}

euler156();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
