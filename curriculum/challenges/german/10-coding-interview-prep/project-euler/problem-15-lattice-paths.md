---
id: 5900f37b1000cf542c50fe8e
title: 'Problem 15: Lattice paths'
challengeType: 1
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

Wenn man in der linken oberen Ecke eines 2×2-Rasters beginnt und sich nur nach rechts und unten bewegen kann, gibt es genau 6 Pfade zur rechten unteren Ecke.

<img class="img-responsive center-block" alt="ein Diagramm mit 6 2 x 2 Gittern, das alle Pfade zur rechten unteren Ecke zeigt" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;" />

Wie viele solcher Pfade gibt es aufgrund einer bestimmten `gridSize`?

# --hints--

`latticePaths(4)` sollte eine Zahl zurückgeben.

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` sollte 70 zurückgeben.

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` sollte 48620 zurückgeben.

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` sollte 137846528820 zurückgeben.

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
