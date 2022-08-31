---
id: 5a23c84252665b21eecc8000
title: Ordina sottoliste disgiunte
challengeType: 1
forumTopicId: 302307
dashedName: sort-disjoint-sublist
---

# --description--

Dato un elenco di valori e un insieme di indici interi in tale lista di valori, l'attività è quella di ordinare i valori negli indici indicati, ma mantenendo i valori in indici al di fuori dell'insieme di quelli da ordinare.

Fai funzionare la tua funzione con il seguente elenco di valori e set di indici:

<code>values: [7, <b>6</b>, 5, 4, 3, 2, <b>1</b>, <b>0</b>]</code>

```js
indices(0-based): {6, 1, 7}
```

Dove il risultato corretto sarà:

<code>[7, <b>0</b>, 5, 4, 3, 2, <b>1</b>, <b>6</b>]</code>.

# --hints--

`sortDisjoint` dovrebbe essere una funzione.

```js
assert(typeof sortDisjoint == 'function');
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` dovrebbe restituire un array.

```js
assert(Array.isArray(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])));
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` dovrebbe restituire `[7, 0, 5, 4, 3, 2, 1, 6]`.

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]), [
  7,
  0,
  5,
  4,
  3,
  2,
  1,
  6
]);
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6])` dovrebbe restituire `[7, 1, 2, 4, 3, 5, 6, 0]`.

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6]), [
  7,
  1,
  2,
  4,
  3,
  5,
  6,
  0
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7])` dovrebbe restituire `[8, 1, 6, 5, 4, 3, 2, 7]`.

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7]), [
  8,
  1,
  6,
  5,
  4,
  3,
  2,
  7
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6])` dovrebbe restituire `[8, 2, 6, 3, 4, 5, 7, 1]`.

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6]), [
  8,
  2,
  6,
  3,
  4,
  5,
  7,
  1
]);
```

`sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4])` dovrebbe restituire `[6, 1, 7, 1, 3, 5, 6]`.

```js
assert.deepEqual(sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4]), [
  6,
  1,
  7,
  1,
  3,
  5,
  6
]);
```

# --seed--

## --seed-contents--

```js
function sortDisjoint(values, indices) {

}
```

# --solutions--

```js
function sortDisjoint(values, indices) {
  let sublist = [];

  indices.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    sublist.push(values[indices[i]]);
  }

  sublist.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = sublist[i];
  }

  return values;
}
```
