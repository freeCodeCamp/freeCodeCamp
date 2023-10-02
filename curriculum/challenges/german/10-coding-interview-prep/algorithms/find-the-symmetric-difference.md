---
id: a3f503de51cf954ede28891d
title: Finde die symmetrische Differenz
challengeType: 1
forumTopicId: 301611
dashedName: find-the-symmetric-difference
---

# --description--

Der mathematische Begriff <dfn>symmetrische Differenz</dfn> (`△` oder `⊕`) von zwei Mengen, ist jene Menge aller Elemente, die entweder in der einen Menge oder in der anderen Menge ist, jedoch nicht in beiden. Ein Beispiel: für die Mengen `A = {1, 2, 3}` und `B = {2, 3, 4}` gilt `A △ B = {1, 4}`.

Die symmetrische Differenz ist ein binärer Operator. Das bedeutet, dass sie auf genau zwei Elementen ausgeführt wird. Um also die symmetrische Differenz zwischen *drei* Elementen (`A △ B △ C`) zu berechnen, muss die Operation mehrmals hintereinander ausgeführt werden. Für die obigen Mengen `A` und `B` sowie für `C = {2, 3}` trifft deshalb `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}` zu.

# --instructions--

Schreibe eine Funktion, die zwei oder mehrere Arrays als Argumente akzeptiert, und die symmetrische Differenz der übergebenen Arrays zurückgibt. Der zurückgegebene Array darf kein Element mehrfach enthalten. (*keine Wiederholungen*).

# --hints--

`sym([1, 2, 3], [5, 2, 1, 4])` sollte `[3, 4, 5]` zurückgeben.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4])` sollte nur drei Elemente enthalten.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` sollte `[3, 4, 5]` zurückgeben.

```js
assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` sollte nur drei Elemente enthalten.

```js
assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` sollte `[3, 4, 5]` zurückgeben.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` sollte nur drei Elemente enthalten.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` sollte `[1, 4, 5]` zurückgeben.

```js
assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` sollte nur drei Elemente enthalten.

```js
assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` sollte `[1, 4, 5]` zurückgeben.

```js
assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` sollte nur drei Elemente enthalten.

```js
assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` sollte `[2, 3, 4, 6, 7]` zurückgeben.

```js
assert.sameMembers(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
  [2, 3, 4, 6, 7]
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` sollte nur 5 Elemente enthalten.

```js
assert.equal(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length,
  5
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` sollte `[1, 2, 4, 5, 6, 7, 8, 9]` zurückgeben.

```js
assert.sameMembers(
  sym(
    [3, 3, 3, 2, 5],
    [2, 1, 5, 7],
    [3, 4, 6, 6],
    [1, 2, 3],
    [5, 3, 9, 8],
    [1]
  ),
  [1, 2, 4, 5, 6, 7, 8, 9]
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` sollte nur acht Elemente enthalten.

```js
assert.equal(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
    .length,
  8
);
```

# --seed--

## --seed-contents--

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
```

# --solutions--

```js
function sym() {
  var arrays = [].slice.call(arguments);
  return arrays.reduce(function (symDiff, arr) {
    return symDiff.concat(arr).filter(function (val, idx, theArr) {
      return theArr.indexOf(val) === idx
        && (symDiff.indexOf(val) === -1 || arr.indexOf(val) === -1);
    });
  });
}
sym([1, 2, 3], [5, 2, 1, 4]);
```
