---
id: 5900f3871000cf542c50fe9a
challengeType: 5
title: 'Problem 27: Quadratic primes'
forumTopicId: 301919
localeTitle: 'Задача 27: Квадратичные простые числа'
---

## Description
<section id='description'>
Эйлер обнаружил замечательную квадратичную формулу: $ n ^ 2 + n + 41 $ Оказывается, что формула будет давать 40 простых чисел для последовательных целочисленных значений $ 0 \ le n \ le 39 $. Однако, когда $ n = 40, 40 ^ 2 + 40 + 41 = 40 (40 + 1) + 41 $ делится на 41, и, конечно, когда $ n = 41, 41 ^ 2 + 41 + 41 $ явно делится на 41. Была обнаружена невероятная формула $ n ^ 2 - 79n + 1601 $, которая дает 80 простых чисел для последовательных значений $ 0 \ le n \ le 79 $. Произведением коэффициентов -79 и 1601 является -126479. Учитывая квадратичность вида: <p> $ n ^ 2 + an + b $, где $ | a | &lt;диапазон $ и $ | b | \ le range $, где $ | n | $ - модуль / абсолютное значение $ n $, например $ | 11 | = 11 $ и $ | -4 | = 4 $ </p><p> Найдите произведение коэффициентов $ a $ и $ b $ для квадратичного выражения, которое выражает максимальное число простых чисел для последовательных значений $ n $, начиная с $ n = 0 $. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quadraticPrimes(200)</code> should return -4925.
    testString: assert(quadraticPrimes(200) == -4925);
  - text: <code>quadraticPrimes(500)</code> should return -18901.
    testString: assert(quadraticPrimes(500) == -18901);
  - text: <code>quadraticPrimes(800)</code> should return -43835.
    testString: assert(quadraticPrimes(800) == -43835);
  - text: <code>quadraticPrimes(1000)</code> should return -59231.
    testString: assert(quadraticPrimes(1000) == -59231);

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
