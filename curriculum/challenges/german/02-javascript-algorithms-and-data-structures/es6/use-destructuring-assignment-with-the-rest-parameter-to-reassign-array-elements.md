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

Die Variablen `a` und `b` entnehmen den ersten und zweiten Wert aus dem Array. Danach erhält `arr` aufgrund des Vorhandenseins der Rest-Syntax die restlichen Werte in Form eines Arrays. Das Rest-Element funktioniert nur als letzte Variable in der Liste richtig. As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.

# --instructions--

Use a destructuring assignment with the rest syntax to emulate the behavior of `Array.prototype.slice()`. `removeFirstTwo()` should return a sub-array of the original array `list` with the first two elements omitted.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` sollte `[3, 4, 5]` ergeben

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` sollte `list` nicht verändern

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
```

`Array.slice()` sollte nicht verwendet werden.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Die Destrukturierung auf `list` sollte verwendet werden.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
