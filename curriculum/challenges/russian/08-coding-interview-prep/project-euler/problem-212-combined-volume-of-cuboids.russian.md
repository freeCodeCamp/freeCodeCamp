---
id: 5900f4411000cf542c50ff53
challengeType: 5
title: 'Problem 212: Combined Volume of Cuboids'
forumTopicId: 301854
localeTitle: 'Задача 212: Комбинированный объем кубоидов'
---

## Description
<section id='description'>
Выровненный по оси кубоид, заданный параметрами {(x0, y0, z0), (dx, dy, dz)}, состоит из всех точек (X, Y, Z) таких, что x0 ≤ X ≤ x0 + dx, y0 ≤ Y ≤ y0 + dy и z0 ≤ Z ≤ z0 + dz. Объем кубоида - это произведение, dx × dy × dz. Объединенный объем коллекции кубоидов - это объем их объединения и будет меньше суммы отдельных томов, если любые кубоиды перекрываются. <p> Пусть C1, ..., C50000 представляют собой набор из 50000 выровненных по оси кубоидов, так что Cn имеет параметры </p><p> x0 = S6n-5 по модулю 10000y0 = S6n-4 по модулю 10000z0 = S6n-3 по модулю 10000dx = 1 + (S6n-2 по модулю 399) dy = 1 + (S6n-1 по модулю 399) dz = 1 + (S6n по модулю 399) </p><p> где S1, ..., S300000 исходят от генератора «Отложенного Фибоначчи»: </p><p> Для 1 ≤ k ≤ 55, Sk = [100003 - 200003k + 300007k3] (по модулю 1000000) Для 56 ≤ k Sk = [Sk-24 + Sk-55] (по модулю 1000000) </p><p> Таким образом, C1 имеет параметры {(7,53,183), (94,369,56)}, C2 имеет параметры {(2383,3563,5079), (42,212,344)} и т. Д. </p><p> Комбинированный объем первых 100 кубоидов, C1, ..., C100, составляет 723581599. </p><p> Что такое объединенный объем всех 50000 кубоидов, C1, ..., C50000? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler212()</code> should return 328968937309.
    testString: assert.strictEqual(euler212(), 328968937309);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler212() {
  // Good luck!
  return true;
}

euler212();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
