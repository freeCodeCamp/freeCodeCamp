---
id: 5900f3871000cf542c50fe9a
challengeType: 5
title: 'Problem 27: Quadratic primes'
videoUrl: ''
localeTitle: 'Problema 27: primos cuadráticos'
---

## Description
<section id="description"> Euler descubrió la extraordinaria fórmula cuadrática: $ n ^ 2 + n + 41 $ Resulta que la fórmula producirá 40 primos para los valores enteros consecutivos $ 0 \ le n \ le 39 $. Sin embargo, cuando $ n = 40, 40 ^ 2 + 40 + 41 = 40 (40 + 1) + 41 $ es divisible por 41, y ciertamente cuando $ n = 41, 41 ^ 2 + 41 + 41 $ es claramente divisible por 41. Se descubrió la increíble fórmula $ n ^ 2 - 79n + 1601 $, que produce 80 números primos para los valores consecutivos $ 0 \ le n \ le 79 $. El producto de los coeficientes, −79 y 1601, es −126479. Teniendo en cuenta las cuadráticas de la forma: <p> $ n ^ 2 + an + b $, donde $ | a | &lt;rango $ y $ | b | \ le range $ donde $ | n | $ es el módulo / valor absoluto de $ n $, por ejemplo, $ | 11 | = 11 $ y $ | -4 | = 4 $ </p><p> Encuentre el producto de los coeficientes, $ a $ y $ b $, para la expresión cuadrática que produce el número máximo de primos para valores consecutivos de $ n $, comenzando con $ n = 0 $. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quadraticPrimes(200)</code> debe devolver -4925.
    testString: 'assert(quadraticPrimes(200) == -4925, "<code>quadraticPrimes(200)</code> should return -4925.");'
  - text: <code>quadraticPrimes(500)</code> debe devolver -18901.
    testString: 'assert(quadraticPrimes(500) == -18901, "<code>quadraticPrimes(500)</code> should return -18901.");'
  - text: <code>quadraticPrimes(800)</code> debe devolver -43835.
    testString: 'assert(quadraticPrimes(800) == -43835, "<code>quadraticPrimes(800)</code> should return -43835.");'
  - text: <code>quadraticPrimes(1000)</code> debe devolver -59231.
    testString: 'assert(quadraticPrimes(1000) == -59231, "<code>quadraticPrimes(1000)</code> should return -59231.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quadraticPrimes(range) {
  // Good luck!
  return range;
}

quadraticPrimes(1000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
