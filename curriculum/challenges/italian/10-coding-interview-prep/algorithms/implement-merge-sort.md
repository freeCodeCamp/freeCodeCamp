---
id: 587d825c367417b2b2512c8f
title: Implementare Merge Sort
challengeType: 1
forumTopicId: 301614
dashedName: implement-merge-sort
---

# --description--

Un altro algoritmo di ordinamento intermedio comune è Merge Sort. Come Quick Sort, anche Merge Sort utilizza una metodologia ricorsiva divide-et-impera per ordinare un array. Esso si avvale del fatto che è relativamente semplice ordinare due array se ciascuno di essi è già ordinato. Ma inizieremo con un solo array come input, quindi come arriviamo a due array ordinati partendo da quello? Bene, possiamo dividere ricorsivamente a metà l'input originale fino a raggiungere il caso base di un array con un elemento. Un array con un singolo elemento è naturalmente ordinato, quindi possiamo iniziare a combinare. Questa combinazione darà il via alle chiamate ricorsive che dividono l'array originale, producendo alla fine un array finale ordinato di tutti gli elementi. I passi di Merge Sort, sono quindi:

**1)** Dividi ricorsivamente l'array di input a metà finché non viene prodotto un sotto-array con un solo elemento.

**2)** Unisci tutti i sottoarray ordinati per produrre l'array finale ordinato.

Il Merge Sort è un metodo di ordinamento efficiente, con complessità temporale di *O(nlog(n))*. Questo algoritmo è popolare perché è performante e relativamente facile da implementare.

A parte questo, questo sarà l'ultimo algoritmo di ordinamento che tratteremo qui. Tuttavia, più tardi nella sezione sulle strutture di dati ad albero descriveremo Heap Sort, un altro metodo di ordinamento efficiente che richiede un heap binario nella sua implementazione.

**Istruzioni:** Scrivi una funzione `mergeSort` che prende un array di interi come input e restituisce un array di questi interi in ordine dal più piccolo al più grande. Un buon modo per implementarlo è quello di scrivere una funzione, per esempio `merge`, che si occupa dell'unione di due array, e un'altra funzione, per esempio `mergeSort`, che è responsabile della ricorsione e che produce array di elementi singoli da fornire a Merge. Buona fortuna!

# --hints--

`mergeSort` dovrebbe essere una funzione.

```js
assert(typeof mergeSort == 'function');
```

`mergeSort` dovrebbe restituire un array ordinato (dal più piccolo al più grande).

```js
assert(
  isSorted(
    mergeSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` dovrebbe restituire un array invariato tranne che per l'ordine.

```js
assert.sameMembers(
  mergeSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`mergeSort` non dovrebbe utilizzare il metodo integrato `.sort()`.

```js
assert(isBuiltInSortUsed());
```

# --seed--

## --after-user-code--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}

function isBuiltInSortUsed(){
  let sortUsed = false;
  Array.prototype.sort = () => sortUsed = true;
  mergeSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function mergeSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }

  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }

    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```
