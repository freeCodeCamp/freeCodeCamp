---
id: 8d5123c8c441eddfaeb5bdef
title: Implementiere einen Bubblesort-Algorithmus
challengeType: 1
forumTopicId: 301612
dashedName: implement-bubble-sort
---

# --description--

Dies ist die erste von mehreren Aufgaben zu Sortieralgorithmen. Aus einem Array mit unsortierten Elementen wollen wir ein sortiertes Array zurückgeben. Wir lernen verschiedene Methoden kennen, um dies zu erreichen, und schauen uns einige Unterschiede zwischen diesen verschiedenen Vorgehensweisen an. Während die meisten modernen Programmiersprachen eingebaute Sortierungsalgorithmen besitzen, ist es dennoch wichtig die Grundlagen zu verstehen und diese auch umsetzen zu können.

Hier werden wir einen Bubblesort-Algorithmus verwenden. Die Bubblesort-Methode beginnt am Anfang eines unsortierten Arrays und "bläst" unsortierte Werte zum Ende hin auf, wobei sie das Array so lange durchläuft, bis es vollständig sortiert ist. Dazu vergleicht es benachbarte Elemente und tauscht sie aus, wenn sie nicht in der richtigen Reihenfolge sind. Die Methode läuft so lange in einer Schleife durch das Array, bis keine Änderungen mehr vorgenommen werden und das Array schlussendlich sortiert ist.

Diese Methode erfordert mehrere Iterationen durch das Array und hat im Durchschnitt oder im schlimmsten Fall eine quadratische Zeitkomplexität. Obwohl die Methode einfach ist, ist sie meistens sehr unpraktisch.

**Anleitung:** Schreibe eine Funktion `bubbleSort`, die ein Array mit ganzen Zahlen als Eingabe verwendet und ein Array mit diesen ganzen Zahlen in sortierter Reihenfolge vom kleinsten zum größten Wert zurückgibt.

# --hints--

`bubbleSort` sollte eine Funktion sein.

```js
assert(typeof bubbleSort == 'function');
```

`bubbleSort` sollte ein sortiertes Array zurückgeben (vom kleinsten zum größten).

```js
assert(
  isSorted(
    bubbleSort([
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

`bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` soll ein, bis auf die Reihenfolge, unverändertes Array zurückgeben.

```js
assert.sameMembers(
  bubbleSort([
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

`bubbleSort` soll nicht die eingebaute Methode `.sort()` verwenden.

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
  bubbleSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function bubbleSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        let temp = array[j-1];
        array[j-1] =  array[j];
        array[j] = temp;
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}
```
