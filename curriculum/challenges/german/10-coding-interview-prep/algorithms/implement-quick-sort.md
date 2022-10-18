---
id: 587d825a367417b2b2512c89
title: Implementiere einen Quicksort-Algorithmus
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

Here we will move on to an intermediate sorting algorithm: quick sort. Quicksort ist ein effizientes, rekursives Teile-und-herrsche-Verfahren (Divide-and-conquer algorithm) zum Sortieren eines Arrays. Bei dieser Methode wird ein Pivot-Wert im ursprünglichen Array gewählt. Das Array wird dann in zwei Subarrays mit Werten kleiner und größer als der Pivot-Wert unterteilt. Dann kombinieren wir das Ergebnis des rekursiven Abrufs des Quicksort-Algorithmus für beide Subarrays. Dies wird so lange fortgesetzt, bis der grundlegende Fall eines leeren Arrays oder eines Arrays mit nur einem Element erreicht ist, das wir zurückgeben. The unwinding of the recursive calls return us the sorted array.

Quicksort ist eine sehr effiziente Sortiermethode, die im Durchschnitt *O(nlog(n))* ausführt. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

**Instructions:** Write a function `quickSort` which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. Der Einfachkeit halber, kann das erste oder das letzte Element benutzt werden.

# --hints--

`quickSort` sollte eine Funktion sein.

```js
assert(typeof quickSort == 'function');
```

`quickSort` sollte ein sortieres Array zurückgeben (vom kleinsten zum größten)

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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` should return an array that is unchanged except for order.

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

`quickSort` should not use the built-in `.sort()` method.

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
