---
id: 5a23c84252665b21eecc8010
title: Algoritmi di ordinamento/Shell Sort
challengeType: 1
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

Scrivi una funzione per ordinare un array di elementi usando l'algoritmo Shell sort, un metodo di ordinamento a intervalli decrescenti. La funzione dovrebbe restituire l'array ordinato.

Shell Short (noto anche come metodo di Shellsort o Shell) prende il nome dal suo inventore, Donald Shell, che ha pubblicato l'algoritmo nel 1959.

Shell Sort è una sequenza di Insertion Sort intercalati basata su una sequenza di incremento. La dimensione dell'incremento viene ridotta dopo ogni passaggio fino a quando la dimensione dell'incremento è 1.

Con un incremento della dimensione di 1, l'ordinamento è un classico Insertion Sort, ma per questo esercizio i dati sono garantiti essere quasi ordinati, che è il "caso migliore" per Insertion Sort.

Qualsiasi sequenza ordinerà i dati finché terminerà in 1, ma alcune funzionano meglio di altre.

Studi empirici hanno mostrato che una sequenza geometrica di incremento con un rapporto di circa 2.2 funziona bene nella pratica.

# --hints--

`shellSort` dovrebbe essere una funzione.

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` dovrebbe restituire un array.

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` dovrebbe restituire `[7, 12, 20, 25, 32]`.

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` dovrebbe restituire `[8, 13, 35, 38, 45]`.

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` dovrebbe restituire `[20, 24, 34, 36, 43]`.

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` dovrebbe restituire `[1, 12, 16, 18, 26, 33, 38]`.

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` dovrebbe restituire `[1, 3, 4, 16, 29, 39, 48]`.

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
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
function shellSort(a) {

}
```

# --solutions--

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```
