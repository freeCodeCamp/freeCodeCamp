---
id: 5900f37b1000cf542c50fe8e
challengeType: 5
title: 'Problem 15: Lattice paths'
forumTopicId: 301780
localeTitle: 'Задача 15: Решетчатые пути'
---

## Description
<section id='description'>
Начиная в левом верхнем углу сетки 2 × 2 и только имея возможность двигаться вправо и вниз, ровно 6 маршрутов в нижний правый угол. <img class="img-responsive center-block" alt="диаграмма 6 2 на 2 сетки, показывающая все маршруты в нижний правый угол" src="https://cdn-media-1.freecodecamp.org/imgr/1Atixoj.gif"><p> Сколько таких маршрутов существует через заданный <code>gridSize</code> ? </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>latticePaths(4)</code> should return 70.
    testString: assert.strictEqual(latticePaths(4), 70);
  - text: <code>latticePaths(9)</code> should return 48620.
    testString: assert.strictEqual(latticePaths(9), 48620);
  - text: <code>latticePaths(20)</code> should return 137846528820.
    testString: assert.strictEqual(latticePaths(20), 137846528820);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function latticePaths(gridSize) {
  // Good luck!
  return true;
}

latticePaths(4);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function latticePaths(gridSize) {
  let paths = 1;

  for (let i = 0; i < gridSize; i++) {
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
  }
  return paths;
}
```

</section>
