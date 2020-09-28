---
id: 5900f4a51000cf542c50ffb7
challengeType: 5
title: 'Problem 312: Cyclic paths on Sierpiński graphs'
forumTopicId: 301968
localeTitle: 'Задача 312: Циклические пути на графиках Серпиньского'
---

## Description
<section id='description'>
- График Серпиньского порядка-1 (S1) является равносторонним треугольником. - Sn + 1 получается из Sn путем размещения трех копий Sn, так что каждая пара копий имеет один общий угол. <p> Пусть C (n) - число циклов, проходящих ровно один раз через все вершины Sn. Например, C (3) = 8, потому что восемь таких циклов можно нарисовать на S3, как показано ниже: </p><p> Также можно проверить, что: C (1) = C (2) = 1 C (5) = 71328803586048 C (10 000) mod 108 = 37652224 C (10 000) mod 138 = 617720485 </p><p> Найти C (C (C (10 000))) mod 138. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler312()</code> should return 324681947.
    testString: assert.strictEqual(euler312(), 324681947);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler312() {
  // Good luck!
  return true;
}

euler312();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
