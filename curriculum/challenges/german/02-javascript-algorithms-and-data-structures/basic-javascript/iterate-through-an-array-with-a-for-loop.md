---
id: 5675e877dbd60be8ad28edc6
title: Mit einer for-Schleife durch ein Array iterieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

Eine häufige Aufgabe in JavaScript ist es, durch den Inhalt eines Arrays zu iterieren. Eine Möglichkeit, das zu tun, ist eine `for`-Schleife. Dieser Code gibt jedes Element des Arrays `arr` auf der Konsole aus:

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Denke daran, dass Arrays eine nullbasierte Indizierung haben, was bedeutet, dass der letzte Index des Arrays `length - 1` ist. Unsere Bedingung für diese Schleife ist `i < arr.length`, die die Schleife anhält, wenn `i` gleich `length` ist. In diesem Fall ist die letzte Iteration `i === 4`, d.h. wenn `i` gleich `arr.length - 1` wird und `6` auf der Konsole ausgibt. Dann erhöht sich `i` auf `5`, und die Schleife wird beendet, weil `i < arr.length` `false` ist.

# --instructions--

Deklariere und initialisiere eine Variable `total` auf `0`. Verwende eine `for`-Schleife, um den Wert jedes Elements des `myArr`-Arrays zu `total` zu addieren.

# --hints--

`total` sollte deklariert und auf 0 initialisiert werden.

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` sollte gleich 20 sein.

```js
assert(total === 20);
```

Du solltest eine `for`-Schleife verwenden, um durch `myArr` zu iterieren.

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

Du solltest nicht versuchen, `total` direkt den Wert 20 zuzuweisen.

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
