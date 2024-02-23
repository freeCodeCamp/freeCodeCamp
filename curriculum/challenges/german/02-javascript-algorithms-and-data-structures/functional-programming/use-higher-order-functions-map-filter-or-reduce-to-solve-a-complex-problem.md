---
id: 587d7b88367417b2b2512b45
title: 'Verwende Funktionen höherer Ordnung map, filter oder reduce, um ein komplexes Problem zu lösen'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Nachdem du nun ein paar Aufgaben mit Funktionen höherer Ordnung wie `map()`, `filter()` und `reduce()` gelöst hast, kannst du sie jetzt anwenden, um eine komplexere Aufgabe zu lösen.

# --instructions--

Vervollständige den Code für die Funktion `squareList` mit einer beliebigen Kombination aus `map()`, `filter()` und `reduce()`. Die Funktion sollte ein neues Array zurückgeben, das die Quadratzahlen *nur* von den positiven ganzen Zahlen enthält (Dezimalzahlen sind keine ganzen Zahlen), wenn ihr ein Array mit reellen Zahlen übergeben wird. Ein Beispiel für ein Array mit reellen Zahlen ist `[-3, 4.8, 5, 3, -3.2]`.

**Hinweis:** Deine Funktion sollte weder `for` noch `while`-Schleifen oder die Funktion `forEach()` verwenden.

# --hints--

`squareList` sollte eine Funktion (`function`) sein.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for`, `while` und `forEach` sollten nicht verwendet werden.

```js
assert(!code.match(/for|while|forEach/g));
```

`map`, `filter` oder `reduce` sollten verwendet werden.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

Die Funktion sollte ein `array` zurückgeben.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` sollte `[16, 1764, 36]` zurückgeben.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` sollte `[9, 100, 49]` zurückgeben.

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
