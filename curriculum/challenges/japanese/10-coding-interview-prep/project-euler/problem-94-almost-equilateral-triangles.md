---
id: 5900f3ca1000cf542c50fedd
title: '問題 94: ほぼ正三角形'
challengeType: 1
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

辺の長さと面積が整数である正三角形が存在しないことは、容易に証明できます。 しかし、ほぼ正三角形である 5-5-6 は面積が 12 平方単位です。

ここでは、2 辺が等しく、3 つ目の辺との差が 1 単位以内である三角形を<dfn>「ほぼ正三角形」</dfn>と定義します。

周長と面積が整数であり周長が `limit` を超えないすべてのほぼ正三角形について、周長の和を求めなさい。

# --hints--

`almostEquilateralTriangles(50)` は数値を返す必要があります。

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` は `66` を返す必要があります。

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` は `3688` を返す必要があります。

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` は `9973078` を返す必要があります。

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` は `518408346` を返す必要があります。

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
