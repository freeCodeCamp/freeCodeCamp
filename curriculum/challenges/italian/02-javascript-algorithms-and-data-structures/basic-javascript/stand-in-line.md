---
id: 56533eb9ac21ba0edf2244c6
title: Stare in fila
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

In Informatica una <dfn>coda</dfn> (queue) è una <dfn>struttura di dati</dfn> astratta dove gli elementi sono tenuti in ordine. I nuovi elementi possono essere aggiunti alla fine della coda e quelli vecchi vengono rimossi dall'inizio della coda.

# --instructions--

Scrivi una funzione `nextInLine` che prende un array (`arr`) e un numero (`item`) come argomenti.

Aggiungi il numero alla fine dell'array, quindi rimuovi il primo elemento dell'array.

La funzione `nextInLine` dovrebbe quindi restituire l'elemento rimosso.

# --hints--

`nextInLine([], 5)` dovrebbe restituire un numero.

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` dovrebbe restituire `1`

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` dovrebbe restituire `2`

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` dovrebbe restituire `5`

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

Dopo la chiamata di `nextInLine(testArr, 10)`, `testArr[4]` dovrebbe valere `10`

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
