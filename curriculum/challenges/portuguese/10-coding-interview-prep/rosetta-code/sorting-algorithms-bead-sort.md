---
id: 5a23c84252665b21eecc8001
title: Ordenar algoritmos/ordenação de contas
challengeType: 5
forumTopicId: 302310
dashedName: sorting-algorithmsbead-sort
---

# --description--

Ordene um array de números inteiros positivos usando o [Algoritmo de ordenação de contas](https://en.wikipedia.org/wiki/Bead_sort).

Uma *ordenação de contas* também é conhecida como *ordenação por gravidade*.

O algoritmo tem O(S), onde S é a soma dos inteiros no conjunto de entrada: cada conta é movida individualmente.

Esse é o caso quando a ordenação de contas é implementada sem um mecanismo para ajudar a encontrar espaços vazios abaixo das contas, como em implementações de software.

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
  var max = 0;
  for (var i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  var grid = new Array(arr.length);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(max);
  }
  var levelcount = new Array(max);
  levelcount.fill(0);
  for (var i = 0; i < max; i++) {
    levelcount[i] = 0;
    for (var j = 0; j < arr.length; j++) grid[j][i] = '_';
  }
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    for (var j = 0; num > 0; j++) {
      grid[levelcount[j]++][j] = '*';
      num--;
    }
  }
  var sorted = new Array(arr.length);
  sorted.fill(0);
  for (var i = 0; i < arr.length; i++) {
    var putt = 0;
    for (
      var j = 0;
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
