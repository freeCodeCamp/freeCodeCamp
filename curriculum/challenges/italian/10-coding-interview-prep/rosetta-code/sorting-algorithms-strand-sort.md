---
id: 5a23c84252665b21eecc8013
title: Algoritmi di ordinamento/Strand sort
challengeType: 1
forumTopicId: 302319
dashedName: sorting-algorithmsstrand-sort
---

# --description--

L'algoritmo **strand sort** crea dei sottoinsiemi ordinati che sono uniti per creare il risultato finale.

Considera un array non ordinato `unsortedArray = [3, 1, 4, 2]`. Scegli il primo elemento `3` e copialo in un array separato. Cerca per qualsiasi elemento più grande che segue questo elemento. Quando trovi un elemento più grande, in questo caso `4`, copialo nell'array separato, `[3, 4]` e compara gli elementi successivi a questo nuovo valore, `4`.

Una volta che hai raggiunto la fine dell'array, rimuovi gli elementi che hai copiato, `[3, 4]`, e inizia di nuovo con il primo elemento rimasto nel array non ordinato, `unsortedArray`, in questo caso `1`.

Seguendo questo processo si ottengono due array ordinati, `[3, 4]` e `[1, 2]`. Unisci questi due array per creare `strandSortedArray`.

```js
const unsortedArray = [3, 1, 4, 2];
const strandsortedArray = [1, 2, 3, 4];
```

Scrivi una funzione per ordinare un array usando l'ordinamento **Strand sort**. La funzione dovrebbe restituire l'array ordinato.


# --hints--

`strandSort` dovrebbe essere una funzione.

```js
assert(typeof strandSort == 'function');
```

`strandSort([25, 32, 12, 7, 20])` dovrebbe restituire un array.

```js
assert(Array.isArray(strandSort([25, 32, 12, 7, 20])));
```

`strandSort([25, 32, 12, 7, 20])` dovrebbe restituire `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(strandSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`strandSort([38, 45, 35, 8, 13])` dovrebbe restituire `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(strandSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`strandSort([43, 36, 20, 34, 24])` dovrebbe restituire `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(strandSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`strandSort([12, 33, 26, 18, 1, 16, 38])` dovrebbe restituire `[1, 12, 16, 18, 26, 33, 38]`.

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

`strandSort([3, 39, 48, 16, 1, 4, 29])` dovrebbe restituire `[1, 3, 4, 16, 29, 39, 48]`.

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
