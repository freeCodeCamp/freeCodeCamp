---
id: 587d8259367417b2b2512c86
title: Implementare Insertion Sort
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

Il prossimo metodo di ordinamento che vedremo è Insertion Sort. Questo metodo funziona costruendo un array ordinato all'inizio della lista. Esso inizia l'array ordinato con il primo elemento. Poi ispeziona l'elemento successivo e lo scambia all'indietro nell'array ordinato fino a quando non è in posizione ordinata. Continua a iterare attraverso la lista e a scambiare nuovi elementi all'indietro nella porzione ordinata fino a raggiungere la fine. Questo algoritmo ha una complessità di tempo quadratica nei casi medi e peggiori.

**Istruzioni:** Scrivi una funzione `insertionSort` che prende un array di interi come input e restituisce un array di questi interi in ordine dal più piccolo al più grande.

# --hints--

`insertionSort` dovrebbe essere una funzione.

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` dovrebbe restituire un array ordinato (dal più piccolo al più grande).

```js
assert(
  isSorted(
    insertionSort([
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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` dovrebbe restituire un array invariato tranne che per l'ordine.

```js
assert.sameMembers(
  insertionSort([
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

`insertionSort([5, 4, 33, 2, 8])` dovrebbe restituire `[2, 4, 5, 8, 33]`.

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` non deve usare il metodo integrato `.sort()`.

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
  insertionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function insertionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```
