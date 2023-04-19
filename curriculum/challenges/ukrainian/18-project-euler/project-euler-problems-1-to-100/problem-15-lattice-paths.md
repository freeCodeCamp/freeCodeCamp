---
id: 5900f37b1000cf542c50fe8e
title: 'Завдання 15: доріжки на сітці'
challengeType: 1
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

Починаючи з верхнього лівого кутка сітки 2×2 та маючи право рухатися лише вправо чи вниз, дійти до нижнього правого кутка можна 6 шляхами.

<img class="img-responsive center-block" alt="зображення з шістьма сітками 2 на 2, що показує усі шляхи до нижнього правого кутка" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;" />

Скільки таких шляхів можна прокласти для наданої `gridSize`?

# --hints--

`latticePaths(4)` має повернути число.

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` має повернути 70.

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` має повернути 48620.

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` має повернути 137846528820.

```js
assert.strictEqual(latticePaths(20), 137846528820);
```

# --seed--

## --seed-contents--

```js
function latticePaths(gridSize) {

  return true;
}

latticePaths(4);
```

# --solutions--

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
