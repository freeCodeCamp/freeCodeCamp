---
id: 594810f028c0303b75339ad2
title: 矢量叉積
challengeType: 1
forumTopicId: 302342
dashedName: vector-cross-product
---

# --description--

A vector is defined as having three dimensions as being represented by an ordered collection of three numbers: (X, Y, Z).

# --instructions--

編寫一個函數，將兩個向量（數組）作爲輸入並計算它們的叉積。 該函數應該在無效輸入（例如不同長度的向量）上返回 `null`。

# --hints--

`crossProduct` 應該是一個函數。

```js
assert.equal(typeof crossProduct, 'function');
```

`crossProduct()` 應該返回 null。

```js
assert.equal(crossProduct(), null);
```

`crossProduct([1, 2, 3], [4, 5, 6])` 應該返回 `[-3, 6, -3]`。

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
