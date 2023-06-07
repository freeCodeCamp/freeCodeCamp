---
id: 5900f37b1000cf542c50fe8e
title: '問題 15: 格子の経路'
challengeType: 1
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

2×2 格子の左上隅から始まり、右下にのみ移動できる場合、右下隅への経路はちょうど 6 つあります。

<img class="img-responsive center-block" alt="右下隅へのすべての経路を示す 6×2 格子の図" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;" />

与えられた `gridSize` にそのような経路はいくつありますか。

# --hints--

`latticePaths(4)` は数値を返す必要があります。

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` は 70 を返す必要があります。

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` は 48620 を返す必要があります。

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` は 137846528820 を返す必要があります。

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
