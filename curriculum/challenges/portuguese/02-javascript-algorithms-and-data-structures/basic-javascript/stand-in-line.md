---
id: 56533eb9ac21ba0edf2244c6
title: Ficar na linha
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

Na Ciência da Computação, uma <dfn>fila</dfn> é uma <dfn>estrutura de dados</dfn> abstrata onde itens são mantidos em ordem. Novos itens podem ser adicionados no final da fila e itens mais antigos são removidos do início da fila.

# --instructions--

Escreva a função `nextInLine`, que recebe um array (`arr`) e um número (`item`) como argumentos.

Adicione o número no final do array e então remova o primeiro elemento do array.

A função `nextInLine` deve, em seguida, retornar o elemento que foi removido.

# --hints--

`nextInLine([], 5)` deve retornar um número.

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` deve retornar `1`

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` deve retornar `2`

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` deve retornar `5`

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

Após `nextInLine(testArr, 10)`, `testArr[4]` deve ser `10`

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
