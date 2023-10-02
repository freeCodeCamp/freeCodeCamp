---
id: 5a23c84252665b21eecc8001
title: Algoritmi di ordinamento/Bead sort
challengeType: 1
forumTopicId: 302310
dashedName: sorting-algorithmsbead-sort
---

# --description--

L'algoritmo *bead sort* inizia creando una matrice di zeri la cui lunghezza è pari al valore dell'elemento più grande nell'array di input. La matrice è trasformata aggiungendo uno a tutti gli elementi tra l'indice zero e l'indice indicato dall'elemento corrente. Questo processo è ripetuto fino a che non hai riempito la matrice.

Iterare sulla matrice, sommare i numeri degli elementi maggiori di zero, poi diminuire il valore di ogni elemento di uno produce l'array ordinato.

**Nota:** Ogni elemento dell'array di input è unico.

Ordina un array di numeri interi positivi usando l'algoritmo Bead Sort.

# --hints--

`beadSort` dovrebbe essere una funzione.

```js
assert(typeof beadSort == 'function');
```

`beadSort([25, 32, 12, 7, 20])` dovrebbe restituire un array.

```js
assert(Array.isArray(beadSort([25, 32, 12, 7, 20])));
```

`beadSort([25, 32, 12, 7, 20])` dovrebbe restituire `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(beadSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`beadSort([38, 45, 35, 8, 13])` dovrebbe restituire `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(beadSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`beadSort([43, 36, 20, 34, 24])` dovrebbe restituire `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(beadSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`beadSort([12, 33, 26, 18, 1, 16, 38])` dovrebbe restituire `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(beadSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`beadSort([3, 39, 48, 16, 1, 4, 29])` dovrebbe restituire `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(beadSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function beadSort(arr) {

}
```

# --solutions--

```js
function beadSort(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  const grid = new Array(arr.length);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(max);
  }
  const levelcount = new Array(max);
  levelcount.fill(0);
  for (let i = 0; i < max; i++) {
    levelcount[i] = 0;
    for (let j = 0; j < arr.length; j++) grid[j][i] = '_';
  }
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = 0; num > 0; j++) {
      grid[levelcount[j]++][j] = '*';
      num--;
    }
  }
  const sorted = new Array(arr.length);
  sorted.fill(0);
  for (let i = 0; i < arr.length; i++) {
    let putt = 0;
    for (
      let j = 0;
      j < max &&
      (function(c) {
        return c.charCodeAt == null ? c : c.charCodeAt(0);
      })(grid[arr.length - 1 - i][j]) == '*'.charCodeAt(0);
      j++
    )
      putt++;
    sorted[i] = putt;
  }
  return sorted;
}
```
