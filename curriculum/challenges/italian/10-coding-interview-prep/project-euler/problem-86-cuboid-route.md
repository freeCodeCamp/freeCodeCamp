---
id: 5900f3c31000cf542c50fed5
title: 'Problema 86: percorso del cuboide'
challengeType: 1
forumTopicId: 302200
dashedName: problem-86-cuboid-route
---

# --description--

Un ragno, S, si trova in un angolo di una stanza cuboide, che misura 6 x 5 x 3, e una mosca, F, si trova nell'angolo opposto. Muovendosi sulla superficie della stanza la più corta distanza "linea dritta" da S a F è 10 e il percorso è mostrato nel diagramma.

<img class="img-responsive center-block" alt="un diagramma del percorso di un ragno e una mosca da un vertice di una stanza cuboidale al vertice opposto" src="https://cdn-media-1.freecodecamp.org/project-euler/cuboid-route.png" style="background-color: white; padding: 10px;" />

Invece, ci sono fino a tre candidati come percorso "più corto" per ogni dato cuboide e il percorso non ha sempre una lunghezza intera.

Si può mostrare che ci sono esattamente `2060` cuboidi distinti, ignorando le rotazioni, con lati interi, fino a una dimensione massima di M per M per M, per cui il percorso più corto ha una lunghezza intera per M = 100. Questo è il valore più piccolo di M per cui il numero delle soluzioni eccede per la prima volta il duemila; il numero delle soluzioni per M = 99 è `1975`.

Trova l'ultimo valore di M per cui il numero delle soluzioni eccede per primo `n`.

# --hints--

`cuboidRoute(2000)` dovrebbe restituire un numero.

```js
assert(typeof cuboidRoute(2000) === 'number');
```

`cuboidRoute(2000)` dovrebbe restituire `100`.

```js
assert.strictEqual(cuboidRoute(2000), 100);
```

`cuboidRoute(25000)` dovrebbe restituire `320`.

```js
assert.strictEqual(cuboidRoute(25000), 320);
```

`cuboidRoute(500000)` dovrebbe restituire `1309`.

```js
assert.strictEqual(cuboidRoute(500000), 1309);
```

`cuboidRoute(1000000)` dovrebbe restituire `1818`.

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
