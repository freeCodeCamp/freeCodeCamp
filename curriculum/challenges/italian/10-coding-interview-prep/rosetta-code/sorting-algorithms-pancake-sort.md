---
id: 5a23c84252665b21eecc800b
title: Algoritmi di ordinamento/Pancake sort
challengeType: 1
forumTopicId: 302315
dashedName: sorting-algorithmspancake-sort
---

# --description--

Scrivi una funzione per ordinare un array di numeri interi (di qualsiasi dimensione conveniente) in ordine crescente usando Pancake sorting. La funzione dovrebbe restituire l'array ordinato.

In breve, invece di ordinare singoli elementi, l'unica operazione consentita è quella di "capovolgere" una estremità della lista in questo modo:

<pre>Prima:
<b>6 7 8 9</b> 2 5 3 4 1<br>
Dopo:
<b>9 8 7 6</b> 2 5 3 4 1
</pre>

Solo una fine della lista può essere capovolta; questa dovrebbe essere l'estremità di valore più basso, ma l'estremità alta va comunque bene se è più facile da codificare o funziona meglio, ma essa **deve** essere la stessa estremità per l'intera soluzione. (L'estremità capovolta non può essere cambiata arbitrariamente.)

# --hints--

`pancakeSort` dovrebbe essere una funzione.

```js
assert(typeof pancakeSort == 'function');
```

`pancakeSort([25, 32, 12, 7, 20])` dovrebbe restituire un array.

```js
assert(Array.isArray(pancakeSort([25, 32, 12, 7, 20])));
```

`pancakeSort([25, 32, 12, 7, 20])` dovrebbe restituire `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(pancakeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`pancakeSort([38, 45, 35, 8, 13])` dovrebbe restituire `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(pancakeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`pancakeSort([43, 36, 20, 34, 24])` dovrebbe restituire `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(pancakeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`pancakeSort([12, 33, 26, 18, 1, 16, 38])` dovrebbe restituire `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(pancakeSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`pancakeSort([3, 39, 48, 16, 1, 4, 29])` dovrebbe restituire `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(pancakeSort([3, 39, 48, 16, 1, 4, 29]), [
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
function pancakeSort(arr) {

}
```

# --solutions--

```js
function pancakeSort(arr) {
  for (var i = arr.length - 1; i >= 1; i--) {
    // find the index of the largest element not yet sorted
    var max_idx = 0;
    var max = arr[0];
    for (var j = 1; j <= i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        max_idx = j;
      }
    }

    if (max_idx == i) continue; // element already in place

    var new_slice;

    // flip arr max element to index 0
    if (max_idx > 0) {
      new_slice = arr.slice(0, max_idx + 1).reverse();
      for (var j = 0; j <= max_idx; j++) arr[j] = new_slice[j];
    }

    // then flip the max element to its place
    new_slice = arr.slice(0, i + 1).reverse();
    for (var j = 0; j <= i; j++) arr[j] = new_slice[j];
  }
  return arr;
}
```
