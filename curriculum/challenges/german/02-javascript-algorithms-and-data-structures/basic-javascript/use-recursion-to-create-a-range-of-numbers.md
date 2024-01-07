---
id: 5cc0bd7a49b71cb96132e54c
title: Benutze die Rekursion, um eine Reihe von Zahlen zu erstellen
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

In Fortsetzung der vorherigen Aufgabe bieten wir dir eine weitere Möglichkeit an, eine rekursive Funktion zu erstellen, um ein Problem zu lösen.

# --instructions--

Wir haben eine Funktion namens `rangeOfNumbers` mit zwei Parametern definiert. Die Funktion sollte ein Array von Ganzzahlen zurückgeben, das mit einer Zahl beginnt, die durch den Parameter `startNum` dargestellt wird, und mit einer Zahl endet, die durch den Parameter `endNum` dargestellt wird. Die Startnummer ist immer kleiner oder gleich der Endnummer. Deine Funktion muss eine Rekursion verwenden, indem sie sich selbst aufruft, und darf keinerlei Schleifen verwenden. Es sollte auch funktionieren, wenn `startNum` und `endNum` gleich sind.

# --hints--

Deine Funktion sollte ein Array zurückgeben.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

Dein Code sollte keine Schleifensyntax verwenden (`for` oder `while` oder Funktionen höherer Ordnung wie `forEach`, `map`, `filter` oder `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` sollte die Rekursion nutzen (sich selbst aufrufen), um diese Aufgabe zu lösen.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` sollte `[1, 2, 3, 4, 5]` zurückgeben.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` sollte `[6, 7, 8, 9]` zurückgeben.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` sollte `[4]` zurückgeben.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

Globale Variablen sollten nicht zum Zwischenspeichern des Arrays verwendet werden.

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
