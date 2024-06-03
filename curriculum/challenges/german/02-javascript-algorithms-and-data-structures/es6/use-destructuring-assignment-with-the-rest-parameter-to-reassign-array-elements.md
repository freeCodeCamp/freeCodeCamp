---
id: 587d7b8a367417b2b2512b4c
title: >-
  Destrukturierung über Rest-Elemente
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

In manchen Situationen, in denen es um die Destrukturierung von Arrays geht, möchten wir vielleicht die restlichen Elemente in einem separaten Array sammeln.

Das Ergebnis ist ähnlich wie bei `Array.prototype.slice()`, wie unten gezeigt:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

Die Konsole würde die Werte `1, 2` und `[3, 4, 5, 7]` anzeigen.

Die Variablen `a` und `b` entnehmen den ersten und zweiten Wert aus dem Array. Danach erhält `arr` aufgrund des Vorhandenseins der Rest-Syntax die restlichen Werte in Form eines Arrays. Das Rest-Element funktioniert nur als letzte Variable in der Liste richtig. Das bedeutet, dass du die Rest-Syntax nicht verwenden kannst, um ein Subarray zu erfassen, das das letzte Element des ursprünglichen Arrays auslässt.

# --instructions--

Verwende eine Destrukturierungszuweisung mit der Rest-Syntax, um das Verhalten von `Array.prototype.slice()` zu emulieren. `removeFirstTwo()` sollte ein Subarray des ursprünglichen Arrays `list` zurückgeben, wobei die ersten beiden Elemente weggelassen werden.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` sollte `[3, 4, 5]` ergeben

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

`removeFirstTwo()` sollte `list` nicht verändern

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

`Array.slice()` sollte nicht verwendet werden.

```js
assert(!__helpers.removeJSComments(code).match(/\.\s*slice\s*\(/));
```

You should use the rest syntax.

```js
assert.match(code, /\.\.\./);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  // comment with 'slice' to check comments are removed in tests
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
