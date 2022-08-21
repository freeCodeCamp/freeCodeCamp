---
id: 587d7b8a367417b2b2512b4c
title: >-
  Verwende die Destrukturierungszuweisung mit dem Rest-Parameter, um Array-Elemente neu zuzuweisen
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

Die Variablen `a` und `b` entnehmen den ersten und zweiten Wert aus dem Array. Danach erhält `arr` die restlichen Werte in Form eines Arrays, da der Rest-Parameter vorhanden ist. Das Rest-Element funktioniert nur als letzte Variable in der Liste richtig. Das heißt, du kannst den Rest-Parameter nicht verwenden, um ein Subarray zu erfassen, das das letzte Element des ursprünglichen Arrays auslässt.

# --instructions--

Verwende die Destrukturierungszuweisung mit dem Rest-Parameter, um ein effektives `Array.prototype.slice()` durchzuführen, so dass `arr` ein Unterarray des ursprünglichen Arrays `source` ist, bei dem die ersten beiden Elemente weggelassen werden.

# --hints--

`arr` sollte `[3,4,5,6,7,8,9,10]` sein

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` sollte `[1,2,3,4,5,6,7,8,9,10]` sein

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
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
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
