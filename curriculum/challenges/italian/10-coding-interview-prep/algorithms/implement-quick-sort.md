---
id: 587d825a367417b2b2512c89
title: Implementare Quick Sort
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

Qui passeremo ad un algoritmo di ordinamento intermedio: Quick Sort. Quick Sort è un approccio efficiente e ricorsivo di logica divide-et-impera per l'ordinamento di un array. In questo approccio, viene scelto un valore pivot nell'array originale. L'array viene poi suddiviso in due sottoarray di valori inferiori e superiori al valore pivot. Quindi combiniamo il risultato della chiamata ricorsiva dell'algoritmo Quick Sort su entrambi i sotto-array. Questo continua fino al raggiungimento del caso base di un array vuoto o di un singolo oggetto, al che torniamo indietro. Lo svolgimento delle chiamate ricorsive restitusce l'array ordinato.

Quick Sort è un metodo di ordinamento molto efficiente, che fornisce prestazioni *O(nlog(n))* in media. È anche relativamente facile da implementare. Questi attributi lo rendono un metodo di ordinamento popolare e utile.

**Istruzioni:** Scrivi una funzione `quickSort` che prende un array di interi come input e restituisce un array di questi interi in ordine dal più piccolo al più grande. Anche se la scelta del valore pivot è importante, per i nostri scopi andrà bene qualsiasi pivot. Per semplicità, si potrebbe usare il primo o l'ultimo elemento.

# --hints--

`quickSort` dovrebbe essere una funzione.

```js
assert(typeof quickSort == 'function');
```

`quickSort` dovrebbe restituire un array ordinato (dal più piccolo al più grande).

```js
assert(
  isSorted(
    quickSort([
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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` dovrebbe restituire un array che è invariato tranne che per l'ordine.

```js
assert.sameMembers(
  quickSort([
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

`quickSort` non dovrebbe utilizzare il metodo integrato `.sort()`.

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
  quickSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function quickSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];

    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }

    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}
```
