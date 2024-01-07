---
id: 56533eb9ac21ba0edf2244c6
title: In der Schlange stehen
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

In der Informatik ist eine <dfn>Warteschlange (Queue)</dfn> eine abstrakte <dfn>Datenstruktur</dfn>, in der Elemente in einer Reihenfolge aufbewahrt werden. Neue Elemente können am Ende der Warteschlange hinzugefügt werden und alte Elemente werden vom Anfang der Warteschlange entfernt.

# --instructions--

Schreibe eine Funktion `nextInLine`, die ein Array (`arr`) und eine Zahl (`item`) als Argumente entgegennimmt.

Füge die Zahl an das Ende des Arrays an und entferne dann das erste Element des Arrays.

Die Funktion `nextInLine` sollte dann das Element zurückgeben, das entfernt wurde.

# --hints--

`nextInLine([], 5)` sollte eine Zahl zurückgeben.

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` sollte `1` zurückgeben

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` sollte `2` zurückgeben

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` sollte `5` zurückgeben

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

Nach der Ausführung der Funktion `nextInLine(testArr, 10)`, sollte `testArr[4]` gleich `10` sein

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
