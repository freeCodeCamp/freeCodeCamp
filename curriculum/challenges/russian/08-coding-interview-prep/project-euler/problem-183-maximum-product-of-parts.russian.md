---
id: 5900f4231000cf542c50ff36
challengeType: 5
title: 'Problem 183: Maximum product of parts'
forumTopicId: 301819
localeTitle: 'Проблема 183: Максимальный продукт деталей'
---

## Description
<section id='description'>
Пусть N - положительное целое число и N разбивается на k равных частей, r = N / k, так что N = r + r + ... + r. Пусть P - произведение этих частей, P = r × r × ... × r = rk. <p> Например, если 11 разбивается на пять равных частей, 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2, то P = 2.25 = 51.53632. </p><p> Пусть M (N) = Pmax при заданном значении N. </p><p> Оказывается, что максимум при N = 11 определяется расщеплением одиннадцати на четыре равные части, что приводит к Pmax = (11/4) 4; то есть M (11) = 14641/256 = 57.19140625, который является конечным десятичным. </p><p> Однако при N = 8 максимум достигается путем разбиения его на три равные части, поэтому M (8) = 512/27, что является бесконечным десятичным числом. </p><p> Пусть D (N) = N, если M (N) не является бесконечным десятичным числом, а D (N) = -N, если M (N) является конечным десятичным. </p><p> Например, ΣD (N) для 5 ≤ N ≤ 100 составляет 2438. </p><p> Найти ΣD (N) для 5 ≤ N ≤ 10000. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler183()</code> should return 48861552.
    testString: assert.strictEqual(euler183(), 48861552);

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
