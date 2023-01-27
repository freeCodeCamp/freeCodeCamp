---
id: 5900f3c71000cf542c50feda
title: 'Завдання 91: Прямокутні трикутники з цілочисельними координатами'
challengeType: 1
forumTopicId: 302208
dashedName: problem-91-right-triangles-with-integer-coordinates
---

# --description--

Точки ${P}(x_1, y_1)$ і ${Q}(x_2, y_2)$ нанесені на цілочисельні координати та приєднані до координат ${O}(0, 0)$ для формування ${\Delta}OPQ$.

<img class="img-responsive center-block" alt="графік, що зображує точки P (x_1, y_1) і Q(x_2, y_2) у цілочисельних координатах, які приєднуються до координат O (0, 0)" src="https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-1.png" style="background-color: white; padding: 10px;" />

Існує рівно чотирнадцять трикутників, що містять прямий кут, який можна утворити, коли кожна координата знаходиться між 0 та 2 включно; тобто, $0 ≤ x_1, y_1, x_2, y_2 ≤ 2$.

<img class="img-responsive center-block" alt="діаграм, що показує 14 трикутників, які містять прямий кут, що може бути утворений, якщо кожна координата знаходиться між 0 та 2" src="https://cdn-media-1.freecodecamp.org/project-euler/right-triangles-integer-coordinates-2.png" style="background-color: white; padding: 10px;" />

Враховуючи, що $0 ≤ x_1, y_1, x_2, y_2 ≤ limit$, скільки прямокутних трикутників можна утворити?

# --hints--

`rightTrianglesIntCoords(2)` має вивести число.

```js
assert(typeof rightTrianglesIntCoords(2) === 'number');
```

`rightTrianglesIntCoords(2)` має вивести `14`.

```js
assert.strictEqual(rightTrianglesIntCoords(2), 14);
```

`rightTrianglesIntCoords(10)` має вивести `448`.

```js
assert.strictEqual(rightTrianglesIntCoords(10), 448);
```

`rightTrianglesIntCoords(25)` має вивести `3207`.

```js
assert.strictEqual(rightTrianglesIntCoords(25), 3207);
```

`rightTrianglesIntCoords(50)` має вивести `14234`.

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
