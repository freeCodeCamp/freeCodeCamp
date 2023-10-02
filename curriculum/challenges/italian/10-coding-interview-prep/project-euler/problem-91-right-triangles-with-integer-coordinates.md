---
id: 5900f3c71000cf542c50feda
title: 'Problema 91: Triangoli rettangoli con coordinate intere'
challengeType: 1
forumTopicId: 302208
dashedName: problem-91-right-triangles-with-integer-coordinates
---

# --description--

I punti ${P}(x_1, y_1)$ e ${Q}(x_2, y_2)$ sono tracciati a coordinate intere e sono uniti all'origine, ${O}(0, 0)$, per formare ${\Delta}OPQ$.

<img class="img-responsive center-block" alt="un grafico con punti P (x_1, y_1) e Q(x_2, y_2) a coordinate intere unite all'origine O (0, 0)" src="https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-1.png" style="background-color: white; padding: 10px;" />

Ci sono esattamente quattordici triangoli aventi un angolo retto che possono essere formati con coordinate compresa tra 0 e 2 inclusi; cioè, $0 ≤ x_1, y_1, x_2, y_2 ≤ 2$.

<img class="img-responsive center-block" alt="un diagramma che mostra i 14 triangoli contenenti un angolo retto che possono essere formati quando ciascuna coordinata è compresa tra 0 e 2" src="https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-2.png" style="background-color: white; padding: 10px;" />

Dato che $0 ≤ x_1, y_1, x_2, y_2 ≤ limit$, quanti triangoli rettangoli possono essere formati?

# --hints--

`rightTrianglesIntCoords(2)` dovrebbe restituire un numero.

```js
assert(typeof rightTrianglesIntCoords(2) === 'number');
```

`rightTrianglesIntCoords(2)` dovrebbe restituire `14`.

```js
assert.strictEqual(rightTrianglesIntCoords(2), 14);
```

`rightTrianglesIntCoords(10)` dovrebbe restituire `448`.

```js
assert.strictEqual(rightTrianglesIntCoords(10), 448);
```

`rightTrianglesIntCoords(25)` dovrebbe restituire `3207`.

```js
assert.strictEqual(rightTrianglesIntCoords(25), 3207);
```

`rightTrianglesIntCoords(50)` dovrebbe restituire `14234`.

```js
assert.strictEqual(rightTrianglesIntCoords(50), 14234);
```

# --seed--

## --seed-contents--

```js
function rightTrianglesIntCoords(limit) {

  return true;
}

rightTrianglesIntCoords(2);
```

# --solutions--

```js
function rightTrianglesIntCoords(limit) {
  function isRightTriangle(points) {
    for (let i = 0; i < points.length; i++) {
      const pointA = points[i];
      const pointB = points[(i + 1) % 3];
      const pointC = points[(i + 2) % 3];
      const vectorAB = [pointB[0] - pointA[0], pointB[1] - pointA[1]];
      const vectorAC = [pointC[0] - pointA[0], pointC[1] - pointA[1]];

      if (isRightAngleBetween(vectorAB, vectorAC)) {
        return true;
      }
    }
    return false;
  }

  function isRightAngleBetween(vector1, vector2) {
    return vector1[0] * vector2[0] + vector1[1] * vector2[1] === 0;
  }

  function getSetKey(points) {
    return (
      '0.0,' +
      points
        .sort((a, b) => a[0] - b[0])
        .map(point => point.join('.'))
        .join(',')
    );
  }

  const pointO = [0, 0];
  const rightTriangles = new Set();
  for (let x1 = 1; x1 <= limit; x1++) {
    for (let y1 = 0; y1 <= limit; y1++) {
      const pointP = [x1, y1];
      for (let x2 = 0; x2 <= limit; x2++) {
        for (let y2 = 1; y2 <= limit; y2++) {
          const pointQ = [x2, y2];
          if (pointP[0] === pointQ[0] && pointP[1] === pointQ[1]) {
            continue;
          }
          if (isRightTriangle([pointO, pointP, pointQ])) {
            rightTriangles.add(getSetKey([pointP, pointQ]));
          }
        }
      }
    }
  }
  return rightTriangles.size;
}
```
