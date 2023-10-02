---
id: 587d8259367417b2b2512c85
title: Implementiere einen Selectionsort-Algorithmus
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

Hier werden wir einen Selectionsort-Algorithmus implementieren. Mit Selectionsort wird der kleinste Wert in einer Liste ausgewählt und durch den ersten Wert in der Liste ausgetauscht. Es beginnt dann an der zweiten Position, wählt den kleinsten Wert in der verbleibenden Liste aus und vertauscht ihn mit dem zweiten Element. Der Algorithmus fährt fort, die Liste zu durchlaufen und Elemente zu vertauschen, bis das Ende der Liste erreicht ist. Nun ist die Liste sortiert. Selectionsort weist eine quadratische Zeitkomplexität in allen Fällen auf.

**Anleitung:** Schreibe eine Funktion `selectionSort`, die ein Array mit ganzen Zahlen als Eingabe verwendet und ein Array mit diesen ganzen Zahlen in sortierter Reihenfolge vom kleinsten zum größten Wert zurückgibt.

# --hints--

`selectionSort` sollte eine Funktion sein.

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` sollte ein sortiertes Array (vom kleinsten zum größten) zurückgeben.

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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` sollte ein Array zurückgeben, das bis auf die Reihenfolge unverändert ist.

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

`selectionSort` sollte nicht die eingebaute Methode `.sort()` verwenden.

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
