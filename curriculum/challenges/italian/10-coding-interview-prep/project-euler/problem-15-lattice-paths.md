---
id: 5900f37b1000cf542c50fe8e
title: 'Problema 15: Percorsi nel reticolo'
challengeType: 1
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

Iniziando nell'angolo in alto a sinistra di una griglia 2x2, e avendo l'abilità di muoversi solo verso destra e verso il basso, ci sono esattamente 6 strade verso l'angolo in basso a sinistra.

<img class="img-responsive center-block" alt="un diagramma di 6 griglie 2 per 2 che mostra tutte le strade per raggiungere l'angolo in basso a destra" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;" />

Quante strade di questo tipo ci sono data la dimensione della griglia `gridSize`?

# --hints--

`latticePaths(4)` dovrebbe restituire un numero.

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` dovrebbe restituire 70.

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` dovrebbe restituire 48620.

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` dovrebbe restituire 137846528820.

```js
assert.strictEqual(latticePaths(20), 137846528820);
```

# --seed--

## --seed-contents--

```js
function latticePaths(gridSize) {

  return true;
}

latticePaths(4);
```

# --solutions--

```js
function latticePaths(gridSize) {
  let paths = 1;

  for (let i = 0; i < gridSize; i++) {
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
  }
  return paths;
}
```
