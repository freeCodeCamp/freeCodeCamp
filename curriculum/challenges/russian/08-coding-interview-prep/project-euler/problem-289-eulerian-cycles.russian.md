---
id: 5900f48d1000cf542c50ffa0
challengeType: 5
title: 'Problem 289: Eulerian Cycles'
forumTopicId: 301940
localeTitle: 'Задача 289: Эйлерные циклы'
---

## Description
<section id='description'>
Пусть C (x, y) - окружность, проходящая через точки (x, y), (x, y + 1), (x + 1, y) и (x + 1, y + 1). <p> Для положительных целых чисел m и n пусть E (m, n) - конфигурация, состоящая из m · n окружностей: {C (x, y): 0 ≤ x &lt;m, 0 ≤ y &lt;n, x и y are целые числа} </p><p> Эйлеровский цикл на E (m, n) является замкнутым путем, который проходит через каждую дугу ровно один раз. Множество таких путей возможно на E (m, n), но нас интересуют только те, которые не являются самопересекающимися: непересекающийся путь просто касается себя в точках решетки, но он никогда не пересекает себя. </p><p> На приведенном ниже рисунке показано E (3,3) и пример эйлерова пути без пересечения. </p><p> Пусть L (m, n) - число эйлеровых пересекающихся путей на E (m, n). Например, L (1,2) = 2, L (2,2) = 37 и L (3,3) = 104290. </p><p> Найти L (6,10) mod 1010. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler289()</code> should return 6567944538.
    testString: assert.strictEqual(euler289(), 6567944538);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler289() {
  // Good luck!
  return true;
}

euler289();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
