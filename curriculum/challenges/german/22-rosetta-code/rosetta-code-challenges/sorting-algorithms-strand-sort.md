---
id: 5a23c84252665b21eecc8013
title: Sortieralgorithmen/Strangsortierung
challengeType: 1
forumTopicId: 302319
dashedName: sorting-algorithmsstrand-sort
---

# --description--

The **Strand sort** creates sorted subsets that are merged to create the final result.

Betrachte ein `unsortedArray = [3, 1, 4, 2]`. Wähle das erste Element `3` und kopiere es in ein separates Array. Suche nach einem größeren Artikel, der diesem Artikel folgt. Wenn du ein größeres Element findest, in diesem Fall `4`, dann kopiere es in das serparate Array, `[3, 4]`, und vergleiche die folgenden Gegenstände mit diesem neuen Wert, `4`.

Wenn du das Ende der Anordnung erreicht hast, entferne die kopierten Elemente, `[3, 4]`, und beginne wieder mit dem ersten Element, das im `unsortedArray` verbleibt, in diesem Fall `1`.

Nach diesem Verfahren ergeben sich zwei sortierte Anordnungen, `[3, 4]` und `[1, 2]`. Führe diese beiden Anordnungen zusammen, um das `strandSortedArray` zu erstellen.

```js
const unsortedArray = [3, 1, 4, 2];
const strandsortedArray = [1, 2, 3, 4];
```

Schreibe eine Funktion zum Sortieren einer Anordnung unter Verwendung der **Strangsortierung**. Die Funktion sollte das sortierte Array zurückgeben.


# --hints--

`strandSort` sollte eine Funktion sein.

```js
assert(typeof strandSort == 'function');
```

`strandSort([25, 32, 12, 7, 20])` sollte ein Array zurückgeben.

```js
assert(Array.isArray(strandSort([25, 32, 12, 7, 20])));
```

`strandSort([25, 32, 12, 7, 20])` sollte `[7, 12, 20, 25, 32]` zurückgeben.

```js
assert.deepEqual(strandSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`strandSort([38, 45, 35, 8, 13])` sollte `[8, 13, 35, 38, 45]` zurückgeben.

```js
assert.deepEqual(strandSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`strandSort([43, 36, 20, 34, 24])` sollte `[20, 24, 34, 36, 43]` zurückgeben.

```js
assert.deepEqual(strandSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`strandSort([12, 33, 26, 18, 1, 16, 38])` sollte `[1, 12, 16, 18, 26, 33, 38]` zurückgeben.

```js
assert.deepEqual(strandSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`strandSort([3, 39, 48, 16, 1, 4, 29])` sollte `[1, 3, 4, 16, 29, 39, 48]` zurückgeben.

```js
assert.deepEqual(strandSort([3, 39, 48, 16, 1, 4, 29]), [
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
function strandSort(list) {

}
```

# --solutions--

```js
function strandSort(list) {
  function merge(left, right) {
    var result = [];
    while (left.length != 0 && right.length != 0) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    result.push.apply(result, left);
    result.push.apply(result, right);
    return result;
  }

  if (list.length <= 1) return list;
  var result = [];
  while (list.length > 0) {
    var sorted = [];
    sorted.push(list.shift());
    var len = list.length;
    for (var i = 1; i < len; i++) {
      var elem = list[i];
      if (sorted[i - 1] <= elem) {
        sorted.push(elem);
        sorted.splice(i, 1);
      }
    }

    result = merge(result, sorted);
  }
  return result;
}
```
