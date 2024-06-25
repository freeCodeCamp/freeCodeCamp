---
id: 5900f3c31000cf542c50fed5
title: 'Problem 86: Cuboid route'
challengeType: 1
forumTopicId: 302200
dashedName: problem-86-cuboid-route
---

# --description--

Eine Spinne, S, sitzt in einer Ecke eines quaderförmigen Raums mit den Maßen 6 x 5 x 3, und eine Fliege, F, sitzt in der gegenüberliegenden Ecke. Wenn man auf den Oberflächen des Raumes reist, ist die kürzeste "gerade" Entfernung von S nach F 10 und der Weg ist auf dem Diagramm dargestellt.

<img class="img-responsive center-block" alt="ein Diagramm des Weges einer Spinne und einer Fliege von einer Ecke eines quaderförmigen Raumes zur gegenüberliegenden Ecke" src="https://cdn-media-1.freecodecamp.org/project-euler/cuboid-route.png" style="background-color: white; padding: 10px;" />

However, there are up to three "shortest" path candidates for any given cuboid and the shortest route doesn't always have integer length.

It can be shown that there are exactly `2060` distinct cuboids, ignoring rotations, with integer dimensions, up to a maximum size of M by M by M, for which the shortest route has integer length when M = 100. This is the least value of M for which the number of solutions first exceeds two thousand; the number of solutions when M = 99 is `1975`.

Find the least value of M such that the number of solutions first exceeds `n`.

# --hints--

`cuboidRoute(2000)` sollte eine Zahl zurückgeben.

```js
assert(typeof cuboidRoute(2000) === 'number');
```

`cuboidRoute(2000)` sollte `100` zurückgeben.

```js
assert.strictEqual(cuboidRoute(2000), 100);
```

`cuboidRoute(25000)` sollte `320` zurückgeben.

```js
assert.strictEqual(cuboidRoute(25000), 320);
```

`cuboidRoute(500000)` sollte `1309` zurückgeben.

```js
assert.strictEqual(cuboidRoute(500000), 1309);
```

`cuboidRoute(1000000)` sollte `1818` zurückgeben.

```js
assert.strictEqual(cuboidRoute(1000000), 1818);
```

# --seed--

## --seed-contents--

```js
function cuboidRoute(n) {

  return true;
}

cuboidRoute(2000);
```

# --solutions--

```js
function cuboidRoute(n) {
  // Based on https://www.mathblog.dk/project-euler-86-shortest-path-cuboid/
  function getLength(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
  }

  let M = 2;
  let counter = 0;

  while (counter < n) {
    M++;
    for (let baseHeightWidth = 3; baseHeightWidth <= 2 * M; baseHeightWidth++) {
      const pathLength = getLength(M, baseHeightWidth);
      if (Number.isInteger(pathLength)) {
        if (baseHeightWidth <= M) {
          counter += Math.floor(baseHeightWidth / 2);
        } else {
          counter += 1 + M - Math.floor((baseHeightWidth + 1) / 2);
        }
      }
    }
  }

  return M;
}
```
