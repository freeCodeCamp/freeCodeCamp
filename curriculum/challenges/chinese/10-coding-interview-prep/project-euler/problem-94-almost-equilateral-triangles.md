---
id: 5900f3ca1000cf542c50fedd
title: 'Problem 94: Almost equilateral triangles'
challengeType: 1
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

很容易证明，不存在同时具有整数边长和整数面积的等边三角形。 但是，存在边长为 5-5-6 的几乎等边三角形，其面积恰为整数 12。

我们定义<dfn>几乎等边三角形</dfn>是有两边一样长，且第三边与两边最多相差1的三角形。

从周长不超过 `limit` 的三角形中，求出所有边长和面积均为整数的几乎等边三角形的周长之和。

# --hints--

`almostEquilateralTriangles(50)` 应该返回一个数字。

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` 应该返回 `66`。

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` 应该返回 `3688`。

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` 应该返回 `9973078`。

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` 应该返回 `518408346`。

```js
assert.strictEqual(almostEquilateralTriangles(1000000000), 518408346);
```

# --seed--

## --seed-contents--

```js
function almostEquilateralTriangles(limit) {

  return true;
}

almostEquilateralTriangles(50);
```

# --solutions--

```js
function almostEquilateralTriangles(limit) {
  // Based on https://blog.dreamshire.com/project-euler-94-solution/
  let perimetersSum = 0;

  let sidesAB = 1;
  let sideC = 1;
  let perimeter = 0;
  let perimeterOffset = 1;

  while (perimeter <= limit) {
    [sidesAB, sideC] = [4 * sidesAB - sideC + 2 * perimeterOffset, sidesAB];
    perimeterOffset = -perimeterOffset;

    perimetersSum += perimeter;
    perimeter = 3 * sidesAB - perimeterOffset;
  }

  return perimetersSum;
}
```
