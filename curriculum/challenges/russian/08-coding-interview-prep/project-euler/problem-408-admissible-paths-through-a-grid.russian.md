---
id: 5900f5091000cf542c51001b
challengeType: 5
title: 'Problem 408: Admissible paths through a grid'
forumTopicId: 302076
localeTitle: 'Задача 408: Допустимые пути через сетку'
---

## Description
<section id='description'>
Назовем точку решетки (x, y) недопустимой, если x, y и x + y - все положительные совершенные квадраты. Например, (9, 16) недопустимо, а (0, 4), (3, 1) и (9, 4) - нет. <p> Рассмотрим путь от точки (x1, y1) до точки (x2, y2), используя только единичные шаги на север или восток. Назовем такой путь допустимым, если ни одна из его промежуточных точек недопустима. </p><p> Пусть P (n) - число допустимых путей от (0, 0) до (n, n). Можно проверить, что P (5) = 252, P (16) = 596994440 и P (1000) mod 1 000 000 007 = 341920854. </p><p> Найти P (10 000 000) mod 1 000 000 007. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler408()</code> should return 299742733.
    testString: assert.strictEqual(euler408(), 299742733);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler408() {
  // Good luck!
  return true;
}

euler408();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
