---
id: 594810f028c0303b75339ad2
title: 矢量交叉产品
challengeType: 5
videoUrl: ''
dashedName: vector-cross-product
---

# --description--

矢量被定义为具有三个维度，由三个数字的有序集合表示：（X，Y，Z）。

任务：

```
 Write a function that takes two vectors (arrays) as input and computes their cross product. 
```

您的函数应在无效输入（即不同长度的向量）上返回`null` 。

# --hints--

dotProduct必须是一个函数

```js
assert.equal(typeof crossProduct, 'function');
```

dotProduct（）必须返回null

```js
assert.equal(crossProduct(), null);
```

crossProduct（[1,2,3]，[4,5,6]）必须返回[-3,6，-3]。

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
