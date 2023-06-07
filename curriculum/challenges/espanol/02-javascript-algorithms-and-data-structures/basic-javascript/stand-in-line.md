---
id: 56533eb9ac21ba0edf2244c6
title: Permanece en línea
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

En Informática una <dfn>cola</dfn> (queue) es una estructura de datos <dfn>abstracta</dfn> donde los elementos se mantienen en orden. Los nuevos elementos se pueden añadir en la parte posterior de la cola y los elementos antiguos se retiran de la parte delantera de la cola.

# --instructions--

Escribe una función `nextInLine` que tome un arreglo (`arr`) y un número (`item`) como argumentos.

Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.

La función `nextInLine` debe entonces devolver el elemento que fue removido.

# --hints--

`nextInLine([], 5)` debe devolver un número.

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` debe devolver `1`

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` debe devolver `2`

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` debe devolver `5`

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

Después de `nextInLine(testArr, 10)`, `testArr[4]` debe ser igual a `10`

```js
nextInLine(testArr, 10);
assert(testArr[4] === 10);
```

# --seed--

## --before-user-code--

```js
var logOutput = [];
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput.push(message);
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
testArr = [1,2,3,4,5];
(function() { return logOutput.join("\n");})();
```

## --seed-contents--

```js
function nextInLine(arr, item) {
  // Only change code below this line

  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

# --solutions--

```js
let testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```
