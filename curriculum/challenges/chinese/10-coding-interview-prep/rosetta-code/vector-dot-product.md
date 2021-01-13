---
id: 594810f028c0303b75339ad3
title: 矢量点积
challengeType: 5
videoUrl: ''
dashedName: vector-dot-product
---

# --description--

<p>矢量被定义为具有三个维度，由三个数字的有序集合表示：（X，Y，Z）。 </p><p>任务： </p><pre> <code>Write a function that takes any numbers of vectors (arrays) as input and computes their dot product.</code> </pre><p>您的函数应在无效输入（即不同长度的向量）上返回<code>null</code> 。 </p><p></p>

# --hints--

dotProduct必须是一个函数

```js
assert.equal(typeof dotProduct, 'function');
```

dotProduct（）必须返回null

```js
assert.equal(dotProduct(), null);
```

dotProduct（\[[1]，[1]]）必须返回1。

```js
assert.equal(dotProduct([1], [1]), 1);
```

dotProduct（\[[1]，[1,2]]）必须返回null。

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

dotProduct（[1,3，-5]，[4，-2，-1]）必须返回3。

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct(...nVectors)`应该返回`dotProduct(...nVectors)`

```js
assert.equal(
  dotProduct(
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16],
    [0, 5, 10, 15, 20]
  ),
  156000
);
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
  if (!vectors || !vectors.length) {
    return null;
  }
  if (!vectors[0] || !vectors[0].length) {
    return null;
  }
  const vectorLen = vectors[0].length;
  const numVectors = vectors.length;

  // If all vectors not same length, return null
  for (let i = 0; i < numVectors; i++) {
    if (vectors[i].length !== vectorLen) {
      return null;  // return undefined
    }
  }

  let prod = 0;
  let sum = 0;
  let j = vectorLen;
  let i = numVectors;
  // Sum terms
  while (j--) {
    i = numVectors;
    prod = 1;

    while (i--) {
      prod *= vectors[i][j];
    }
    sum += prod;
  }
  return sum;
}
```
