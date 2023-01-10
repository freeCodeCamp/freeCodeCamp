---
id: 5a23c84252665b21eecc8001
title: Ordenar algoritmos/ordenação de contas
challengeType: 1
forumTopicId: 302310
dashedName: sorting-algorithmsbead-sort
---

# --description--

Uma ordenação *Bead Sort* começa criando um array de zeros, cujo comprimento é igual ao valor do maior elemento no array de origem. A matriz é transformada adicionando um a todos os elementos entre o índice zero e o índice indicado pelo elemento atual. Esse processo é repetido, até que você tenha preenchido a matriz.

Iterando sobre a matriz, somando o número de elementos maiores que zero e diminuindo o valor de cada elemento por um temos a matriz ordenada.

**Observação:** cada elemento no array de entrada é único.

Ordene um array de números inteiros positivos usando o algoritmo Bead Sort.

# --hints--

`beadSort` deve ser uma função.

```js
assert(typeof beadSort == 'function');
```

`beadSort([25, 32, 12, 7, 20])` deve retornar um array.

```js
assert(Array.isArray(beadSort([25, 32, 12, 7, 20])));
```

`beadSort([25, 32, 12, 7, 20])` deve retornar `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(beadSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`beadSort([38, 45, 35, 8, 13])` deve retornar `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(beadSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`beadSort([43, 36, 20, 34, 24])` deve retornar `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(beadSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`beadSort([12, 33, 26, 18, 1, 16, 38])` deve retornar `[1, 12, 16, 18, 26, 33, 38]`.

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

`beadSort([3, 39, 48, 16, 1, 4, 29])` deve retornar `[1, 3, 4, 16, 29, 39, 48]`.

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
