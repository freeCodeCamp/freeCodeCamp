---
id: 61abc7ebf3029b56226de5b6
title: Implementare Binary Search
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

Binary Search è un algoritmo con efficienza **O(log(n))** che permette di cercare un elemento dentro a un array ordinato. Funziona usando i seguenti step:

1. Trova il `value` centrale di un array ordinato. Se `value == target` restituisce `true` (il valore è stato trovato e la ricerca è completa).
1. Se invece `value < target`, cerca nella metà destra dell'array nella prossima comparazione.
1. Se invece `value > target`, cerca nella metà sinistra dell'array nella prossima comparazione.
1. Se dopo aver cercato nell'intero array il valore non è presente, restituisce `false` (l'array è stato setacciato e il valore non è nell'array).

Come puoi vedere, stai dimessando successivamente un array, cosa che da l'efficienza log(n). Per questa sfida vogliamo vedere il tuo lavoro - come sei arrivato al valore target... la strada che hai preso!

# --instructions--

Scrivi una funzione `binarySearch` che implementa un algoritmo di ricerca binaria su un array, restituendo il percorso che hai preso (ogni valore centrale di comparazione) per trovare il target nell'array.

La funzione riceve un array di numeri interi ordinati, e un valore target come input. Restituisce un array contentente in ordine i valori centrali che hai trovato ad ogni dimezzamento dell'array originale fino a che non hai trovato il valore target. Il valore target dovrebbe essere l'ultimo elemento dell'array restituito. Se il valore non è stato trovato, restituisci `Value Not Found`.

Per esempio, `binarySearch([1,2,3,4,5,6,7], 5)` dovrebbe restituisce `[4,6,5]`.

Per questa sfida, quando dimezzi, DEVI usare `Math.floor()` quando fai la divisione: `Math.floor(x/2)`. Questo darà un percorso consistente e testabile.

**Nota:** Il seguente array sarà usato nei test:

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` dovrebbe essere una funzione.

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` dovrebbe restituire `[13, 5, 2, 0]`.

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` dovrebbe restituire `[13, 5, 2, 0, 1]`.

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` dovrebbe restituire `[13, 5, 2]`.

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` dovrebbe restituire la stringa `Value Not Found`.

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` dovrebbe restituire `[13, 5, 10, 11]`.

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` dovrebbe restituire `[13]`.

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` dovrebbe restituire `[13, 19, 22, 49, 70]`.

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
