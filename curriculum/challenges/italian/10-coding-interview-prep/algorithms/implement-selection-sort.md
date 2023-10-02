---
id: 587d8259367417b2b2512c85
title: Implementare Selection Sort
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

Qui implementeremo Selection Sort. Selection Sort funziona selezionando il valore minimo in una lista e scambiandolo con il primo valore dell'elenco. Poi inizia dalla seconda posizione, seleziona il valore più piccolo nella lista rimanente e lo scambia con il secondo elemento. Continua a iterare attraverso la lista e scambiare gli elementi fino a raggiungere la fine della lista. Ora la lista è ordinata. Il selection sort ha una complessità di tempo quadratica in tutti i casi.

**Istruzioni:** Scrivi una funzione `selectionSort` che prende un array di interi come input e restituisce un array di questi interi in ordine dal più piccolo al più grande.

# --hints--

`selectionSort` dovrebbe essere una funzione.

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` dovrebbe restituire un array ordinato (dal più piccolo al più grande).

```js
assert(
  isSorted(
    selectionSort([
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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` dovrebbe restituire un array invariato tranne che per l'ordine.

```js
assert.sameMembers(
  selectionSort([
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

`selectionSort` non dovrebbe usare il metodo integrato `.sort()`.

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
  selectionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function selectionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i];
    array[i] = value;
  }
    return array;
}
```
