---
id: 5900f4831000cf542c50ff95
challengeType: 5
title: 'Problem 278: Linear Combinations of Semiprimes'
forumTopicId: 301928
localeTitle: 'Задача 278: Линейные комбинации полупространств'
---

## Description
<section id='description'>
Учитывая значения целых чисел 1 &lt;a1 &lt;a2 &lt;... &lt;an, рассмотрим линейную комбинацию q1a1 + q2a2 + ... + qnan = b, используя только целые значения qk ≥ 0. <p> Заметим, что для данного набора ak может быть, что не все значения b возможны. Например, если a1 = 5 и a2 = 7, то нет q1 ≥ 0 и q2 ≥ 0, так что b может быть 1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18 или 23 , </p><p> На самом деле 23 является наибольшим невозможным значением b для a1 = 5 и a2 = 7. Поэтому мы будем называть f (5, 7) = 23. Аналогично, можно показать, что f (6, 10, 15) = 29 и f (14, 22, 77) = 195. </p><p> Найти Σ f (p <em>q, p</em> r, q * r), где p, q и r - простые числа и p &lt;q &lt;r &lt;5000. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler278()</code> should return 1228215747273908500.
    testString: assert.strictEqual(euler278(), 1228215747273908500);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler278() {
  // Good luck!
  return true;
}

euler278();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
