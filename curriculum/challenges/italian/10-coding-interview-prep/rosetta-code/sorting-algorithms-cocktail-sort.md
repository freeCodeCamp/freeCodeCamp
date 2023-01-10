---
id: 5a23c84252665b21eecc8004
title: Algoritmi di Ordinamento/Cocktail Sort
challengeType: 1
forumTopicId: 302312
dashedName: sorting-algorithmscocktail-sort
---

# --description--

L'algoritmo <a href="https://rosettacode.org/wiki/Sorting_algorithms/Cocktail_sort" target="_blank" rel="noopener noreferrer nofollow">cocktail sort</a> è un miglioramento dell'algoritmo Bubble Sort. Dato un array di numeri, il cocktail sort percorrerà l'array dall'inizio alla fine, muovendo il numero più grande alla fine. Quindi, attraverserà l'array all'indietro e muoverà il numero più piccolo all'inizio. Ripete questi due passi, muovendo il prossimo numero più grande/più piccolo alla sua posizione corretta nell'array fino a che non è ordinato.

# --instructions--

Scrivi una funzione che ordina un dato array usando cocktail sort.

# --hints--

`cocktailSort` dovrebbe essere una funzione.

```js
assert(typeof cocktailSort == 'function');
```

`cocktailSort([25, 32, 12, 7, 20])` dovrebbe restituire un array.

```js
assert(Array.isArray(cocktailSort([25, 32, 12, 7, 20])));
```

`cocktailSort([25, 32, 12, 7, 20])` dovrebbe restituire `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(cocktailSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`cocktailSort([38, 45, 35, 8, 13])` dovrebbe restituire `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(cocktailSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`cocktailSort([43, 36, 20, 34, 24])` dovrebbe restituire `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(cocktailSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`cocktailSort([12, 33, 26, 18, 1, 16, 38])` dovrebbe restituire `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(cocktailSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`cocktailSort([3, 39, 48, 16, 1, 4, 29])` dovrebbe restituire `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(cocktailSort([3, 39, 48, 16, 1, 4, 29]), [
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
function cocktailSort(arr) {

}
```

# --solutions--

```js
function cocktailSort(arr) {
  let isSorted = true;
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;

    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSorted = true;
      }
    }
  }

  return arr;
}
```
