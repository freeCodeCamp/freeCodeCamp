---
id: 5900f3ca1000cf542c50fedd
title: 'Problem 94: Fast gleichseitige Dreiecke'
challengeType: 1
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

Es ist leicht nachzuweisen, dass kein gleichseitiges Dreieck mit integrierten Längenseiten und integriertem Bereich existiert. Allerdings hat das fast gleichseitige Dreieck 5-5-6 eine Fläche von 12 Quadratmetern.

Wir sollten ein <dfn>fast gleichseitiges Dreieck</dfn> als ein Dreieck definieren bei dem zwei Seiten gleich sind und die dritte Seite um nicht mehr als eine Einheit variiert.

Finde die Summe der Umkreise aller fast gleichseitigen Dreiecke mit integrierten Seitenlängen und deren Umkreise `limit` nicht überschreiten.

# --hints--

`almostEquilateralTriangles(50)` sollte eine Zahl zurückgeben.

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` sollte `66` zurückgeben.

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` sollte `3688` zurückgeben.

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` sollte `9973078` zurückgeben.

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` sollte `518408346` zurückgeben.

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
