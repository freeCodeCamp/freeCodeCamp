---
id: 594810f028c0303b75339ad2
title: 矢量叉积
challengeType: 1
forumTopicId: 302342
dashedName: vector-cross-product
---

# --description--

A vector is defined as having three dimensions as being represented by an ordered collection of three numbers: (X, Y, Z).

# --instructions--

编写一个函数，将两个向量（数组）作为输入并计算它们的叉积。 该函数应该在无效输入（例如不同长度的向量）上返回 `null`。

# --hints--

`crossProduct` 应该是一个函数。

```js
assert.equal(typeof crossProduct, 'function');
```

`crossProduct()` 应该返回 null。

```js
assert.equal(crossProduct(), null);
```

`crossProduct([1, 2, 3], [4, 5, 6])` 应该返回 `[-3, 6, -3]`。

```js
assert.deepEqual(res12, exp12);
```

# --seed--

## --after-user-code--

```js
const tv1 = [1, 2, 3];
const tv2 = [4, 5, 6];
const res12 = crossProduct(tv1, tv2);
const exp12 = [-3, 6, -3];
```

## --seed-contents--

```js
function crossProduct(a, b) {

}
```

# --solutions--

```js
function crossProduct(a, b) {
  if (!a || !b) {
    return null;
  }

  // Check lengths
  if (a.length !== 3 || b.length !== 3) {
    return null;
  }

  return [
    (a[1] * b[2]) - (a[2] * b[1]),
    (a[2] * b[0]) - (a[0] * b[2]),
    (a[0] * b[1]) - (a[1] * b[0])
  ];
}
```
