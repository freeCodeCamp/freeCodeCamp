---
id: 5900f37b1000cf542c50fe8e
title: 'Problem 15: Lattice paths'
challengeType: 5
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

<img class="img-responsive center-block" alt="a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;">

How many such routes are there through a given `gridSize`?

# --hints--

`latticePaths(4)` should return a number.

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` should return 70.

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` should return 48620.

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` should return 137846528820.

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
