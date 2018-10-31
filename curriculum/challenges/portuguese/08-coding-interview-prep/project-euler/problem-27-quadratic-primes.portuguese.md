---
id: 5900f3871000cf542c50fe9a
challengeType: 5
title: 'Problem 27: Quadratic primes'
videoUrl: ''
localeTitle: 'Problema 27: Primos quadráticos'
---

## Description
<section id="description"> Euler descobriu a notável fórmula quadrática: $ n ^ 2 + n + 41 $ Acontece que a fórmula produzirá 40 primos para os valores inteiros consecutivos $ 0 \ le n \ le 39 $. No entanto, quando $ n = 40, 40 ^ 2 + 40 + 41 = 40 (40 + 1) + 41 $ é divisível por 41, e certamente quando $ n = 41, 41 ^ 2 + 41 + 41 $ é claramente divisível por 41. A incrível fórmula $ n ^ 2 - 79n + 1601 $ foi descoberta, que produz 80 primos para os valores consecutivos $ 0 \ le n \ le 79 $. O produto dos coeficientes, −79 e 1601, é −126479. Considerando quadráticas da forma: <p> $ n ^ 2 + an + b $, em que $ | a | &lt;intervalo $ e $ | b | \ le range $ onde $ | n | $ é o valor de módulo / absoluto de $ n $ ex $ | 11 | = 11 $ e $ | -4 | = 4 $ </p><p> Encontre o produto dos coeficientes, $ a $ e $ b $, para a expressão quadrática que produz o número máximo de primos para valores consecutivos de $ n $, começando com $ n = 0 $. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quadraticPrimes(200)</code> deve retornar -4925.
    testString: 'assert(quadraticPrimes(200) == -4925, "<code>quadraticPrimes(200)</code> should return -4925.");'
  - text: <code>quadraticPrimes(500)</code> deve retornar -18901.
    testString: 'assert(quadraticPrimes(500) == -18901, "<code>quadraticPrimes(500)</code> should return -18901.");'
  - text: <code>quadraticPrimes(800)</code> deve retornar -43835.
    testString: 'assert(quadraticPrimes(800) == -43835, "<code>quadraticPrimes(800)</code> should return -43835.");'
  - text: <code>quadraticPrimes(1000)</code> deve retornar -59231.
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
