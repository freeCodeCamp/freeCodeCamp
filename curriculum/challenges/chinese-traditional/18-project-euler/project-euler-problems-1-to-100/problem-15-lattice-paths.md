---
id: 5900f37b1000cf542c50fe8e
title: '問題 15：網格路徑'
challengeType: 1
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

<img class="img-responsive center-block" alt="圖片展示了到達 2 × 2 網格右下角的所有 6 條路徑" src="https://cdn-media-1.freecodecamp.org/imgr/1Atixoj.gif" style="background-color: white; padding: 10px;" />

給定網格大小爲 `gridSize`，請求出這樣的路徑有多少條?

# --hints--

`latticePaths(4)` 應該返回一個數字。

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` 應該返回 70。

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` 應該返回 48620。

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` 應該返回 137846528820。

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
