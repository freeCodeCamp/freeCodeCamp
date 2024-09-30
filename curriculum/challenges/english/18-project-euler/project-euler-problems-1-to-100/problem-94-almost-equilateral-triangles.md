---
id: 5900f3ca1000cf542c50fedd
title: 'Problem 94: Almost equilateral triangles'
challengeType: 1
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

It is easily proved that no equilateral triangle exists with integral length sides and integral area. However, the almost equilateral triangle 5-5-6 has an area of 12 square units.

We shall define an <dfn>almost equilateral triangle</dfn> to be a triangle for which two sides are equal and the third differs by no more than one unit.

Find the sum of the perimeters of all almost equilateral triangles with integral side lengths and area and whose perimeters do not exceed `limit`.

# --hints--

`almostEquilateralTriangles(50)` should return a number.

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` should return `66`.

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` should return `3688`.

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` should return `9973078`.

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` should return `518408346`.

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
