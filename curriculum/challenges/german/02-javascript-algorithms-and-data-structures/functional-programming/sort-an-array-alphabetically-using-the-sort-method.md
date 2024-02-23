---
id: 587d7da9367417b2b2512b69
title: Ein Array mit der sort-Methode alphabetisch sortieren
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

Die Methode `sort` sortiert die Elemente eines Arrays entsprechend der Callback-Funktion.

Zum Beispiel:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

Dies würde den Wert `[1, 2, 3, 4, 5]` zurückgeben.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

Dies würde den Wert `['z', 's', 'l', 'h', 'b']` zurückgeben.

Die Standard-Sortiermethode von JavaScript sortiert nach dem Unicode-Punktwert eines Strings, was zu unerwarteten Ergebnissen führen kann. Daher ist es ratsam, eine Callback-Funktion bereitzustellen, die angibt, wie die Array-Elemente sortiert werden sollen. Wenn eine solche Callback-Funktion, die normalerweise `compareFunction` heißt, übergeben wird, werden die Array-Elemente nach dem Rückgabewert der `compareFunction` sortiert: Wenn `compareFunction(a,b)` für zwei Elemente `a` und `b` einen Wert kleiner als 0 zurückgibt, dann kommt `a` vor `b`. Wenn `compareFunction(a,b)` für zwei Elemente `a` und `b` einen Wert größer als 0 liefert, dann kommt `b` vor `a`. Wenn `compareFunction(a,b)` für zwei Elemente `a` und `b` einen Wert gleich 0 zurückgibt, dann bleiben `a` und `b` unverändert.

# --instructions--

Verwende die Methode `sort` in der Funktion `alphabeticalOrder`, um die Elemente von `arr` in alphabetischer Reihenfolge zu sortieren. Die Funktion sollte das sortierte Array zurückgeben.

# --hints--

Dein Code sollte die Methode `sort` verwenden.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` sollte `["a", "a", "c", "d", "g", "z"]` zurückgeben.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` sollte `["a", "h", "m", "m", "n", "x"]` zurückgeben.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` sollte `["a", "a", "a", "a", "t", "x"]` zurückgeben.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
