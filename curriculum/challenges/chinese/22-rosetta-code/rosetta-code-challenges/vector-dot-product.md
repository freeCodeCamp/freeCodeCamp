---
id: 594810f028c0303b75339ad3
title: 矢量点积
challengeType: 1
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

A vector can have one or more values represented by an ordered collection. Examples could be (x), (x, y), or (x, y, z).

# --instructions--

编写一个函数，将两个向量（表示为一维数组）作为输入并计算它们的点积。 您的函数应该在无效输入上返回 `null`，例如不同长度的向量或传递两个向量以外的任何内容。

# --hints--

`dotProduct` 应该是一个函数。

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` 应该返回 `null`。

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` 应该返回 `1`。

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` 应该返回 `null`。

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` 应该返回 `3`。

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` 应该返回 `null`。

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` 应该返回 `360`。

```js
assert.equal(dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ]), 360);
```

# --seed--

## --seed-contents--

```js
function dotProduct(...vectors) {

}
```

# --solutions--

```js
function dotProduct(...vectors) {
  if (!vectors || !vectors.length || vectors.length > 2 || vectors[0].length !== vectors[1].length) {
    return null;
  }
  const vectorLen = vectors[0].length;

  let prod = 0;
  let sum = 0;
  let j = vectorLen;
  let i = 2;
  // Sum terms
  while (j--) {
    i = 2;
    prod = 1;

    while (i--) {
      prod *= vectors[i][j];
    }
    sum += prod;
  }
  return sum;
}
```
