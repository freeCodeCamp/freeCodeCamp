---
id: 587d8259367417b2b2512c86
title: Implementiere einen Insertionsort-Algorithmus
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

Die nächste Sortiermethode, die wir uns ansehen, ist Insertionsort. Bei dieser Methode wird ein sortiertes Array am Anfang der Liste erstellt. Das Array wird mit dem ersten Element sortiert. Dann wird das nächste Element untersucht und rückwärts in das sortierte Array verschoben, bis es sich in der sortierten Position befindet. Es fährt fort, die Liste zu durchlaufen und neue Elemente rückwärts in den sortierten Teil zu verschieben, bis es das Ende erreicht. Dieser Algorithmus hat im mittleren und schlimmsten Fall eine quadratische Zeitkomplexität.

**Instructions:** Write a function `insertionSort` which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

# --hints--

`insertionSort` sollte eine Funktion sein.

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` sollte ein sortiertes Array (vom kleinsten zum größten) zurückgeben.

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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` sollte ein Array zurückgeben, das bis auf die Reihenfolge unverändert ist.

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

`insertionSort([5, 4, 33, 2, 8])` sollte `[2, 4, 5, 8, 33]` zurückgeben.

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` sollte nicht die eingebaute Methode `.sort()` verwenden.

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
