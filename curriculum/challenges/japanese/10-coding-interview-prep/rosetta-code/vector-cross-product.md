---
id: 594810f028c0303b75339ad2
title: ベクトルのクロス積
challengeType: 1
forumTopicId: 302342
dashedName: vector-cross-product
---

# --description--

ベクトルは、3 つの数値 (X、Y、Z) の順序集合で表される 3 つの次元を持つものとして定義されます。

# --instructions--

入力として2つのベクトル (配列) を取り、そのクロス積を計算する関数を記述します。 異なる長さのベクトルのような無効な入力に対して、関数は `null` を返さなければなりません。

# --hints--

`crossProduct` は関数とします。

```js
assert.equal(typeof crossProduct, 'function');
```

`crossProduct()` は null を返す必要があります。

```js
assert.equal(crossProduct(), null);
```

`crossProduct([1, 2, 3], [4, 5, 6])` は `[-3, 6, -3]` を返す必要があります。

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
