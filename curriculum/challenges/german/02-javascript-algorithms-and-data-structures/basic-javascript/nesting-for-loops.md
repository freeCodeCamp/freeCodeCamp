---
id: 56533eb9ac21ba0edf2244e1
title: for-Schleifen verschachteln
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

Wenn du ein mehrdimensionales Array hast, kannst du die gleiche Logik wie in der vorherigen Aufgabe verwenden, um eine Schleife durch das Array und alle Unterarrays zu ziehen. Hier ist ein Beispiel:

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

Dies gibt jedes Unterelement in `arr` nacheinander aus. Beachte, dass wir in der inneren Schleife die `.length` von `arr[i]` überprüfen, da `arr[i]` selbst ein Array ist.

# --instructions--

Ändere die Funktion `multiplyAll` so, dass sie das Produkt aller Zahlen in den Unterarrays von `arr` zurückgibt.

# --hints--

`multiplyAll([[1], [2], [3]])` sollte `6` zurückgeben

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` sollte `5040` zurückgeben

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` sollte `54` zurückgeben

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
