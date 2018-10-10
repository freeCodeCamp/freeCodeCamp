---
id: 5900f3831000cf542c50fe96
challengeType: 5
title: 'Problem 23: Non-abundant sums'
videoUrl: ''
localeTitle: 'Problema 23: sumas no abundantes'
---

## Description
<section id="description"> Un número perfecto es un número para el cual la suma de sus divisores apropiados es exactamente igual al número. Por ejemplo, la suma de los divisores apropiados de 28 sería 1 + 2 + 4 + 7 + 14 = 28, lo que significa que 28 es un número perfecto. Un número <var>n</var> se llama deficiente si la suma de sus divisores apropiados es menor que <var>n</var> y se llama abundante si esta suma excede <var>n</var> . Como 12 es el número abundante más pequeño, 1 + 2 + 3 + 4 + 6 = 16, el número más pequeño que se puede escribir como la suma de dos números abundantes es 24. Por análisis matemático, se puede mostrar que todos los enteros mayores que 28123 se puede escribir como la suma de dos números abundantes. Sin embargo, este límite superior no puede reducirse más por análisis aunque se sepa que el mayor número que no puede expresarse como la suma de dos números abundantes es menor que este límite. Encuentre la suma de todos los enteros positivos &lt;= <var>n</var> que no se puede escribir como la suma de dos números abundantes. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfNonAbundantNumbers(10000)</code> debe devolver 3731004.
    testString: 'assert(sumOfNonAbundantNumbers(10000) === 3731004, "<code>sumOfNonAbundantNumbers(10000)</code> should return 3731004.");'
  - text: <code>sumOfNonAbundantNumbers(15000)</code> debe devolver 4039939.
    testString: 'assert(sumOfNonAbundantNumbers(15000) === 4039939, "<code>sumOfNonAbundantNumbers(15000)</code> should return 4039939.");'
  - text: <code>sumOfNonAbundantNumbers(20000)</code> debe devolver 4159710.
    testString: 'assert(sumOfNonAbundantNumbers(20000) === 4159710, "<code>sumOfNonAbundantNumbers(20000)</code> should return 4159710.");'
  - text: <code>sumOfNonAbundantNumbers(28123)</code> debe devolver 4179871.
    testString: 'assert(sumOfNonAbundantNumbers(28123) === 4179871, "<code>sumOfNonAbundantNumbers(28123)</code> should return 4179871.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfNonAbundantNumbers(n) {
  // Good luck!
  return n;
}

sumOfNonAbundantNumbers(28123);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
