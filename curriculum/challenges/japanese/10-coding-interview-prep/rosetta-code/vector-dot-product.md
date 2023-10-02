---
id: 594810f028c0303b75339ad3
title: ベクトルのドット積
challengeType: 1
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

ベクトルは、順序集合によって表される 1 つ以上の値を持つことができます。 例として (x)、(x, y)、(x, y, z) などがあります。

# --instructions--

入力として2つのベクトル (1次元配列として表される) を取り、それらのドット積を計算する関数を記述してください。 異なる長さのベクトルや2つのベクトル以外のベクトルを渡すなどの無効な入力に対して、関数は `null` を返さなければなりません。

# --hints--

`dotProduct` は関数とします。

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` は `null` を返す必要があります。

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` は `1` を返す必要があります。

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` は `null` を返す必要があります。

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` は `3` を返す必要があります。

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` は `null` を返す必要があります。

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` は `360` を返す必要があります。

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
