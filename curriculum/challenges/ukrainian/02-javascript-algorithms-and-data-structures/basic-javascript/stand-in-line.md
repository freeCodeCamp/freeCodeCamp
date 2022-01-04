---
id: 56533eb9ac21ba0edf2244c6
title: Стояти в черзі
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

В комп'ютерних науках <dfn>queue</dfn> це абстрактне поняття <dfn>Data Structure</dfn>, де усі елементи зберігають певний порядок. Нові елементи можуть бути додані до черги, а старі елементи - зняті з черги.

Напишіть функцію `nextInLine`, аргументами якої є масив (`arr`) та число (`item`).

Додайте число до кінця масиву, а тоді видаліть перший елемент з масиву.

Функція `nextInLine` повинна повернути видалений елемент.

# --hints--

`nextInLine([], 5)` має повернути до числа.

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` має повернути до `1`

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` має повернути до `2`

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` має повернути до `5`

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

Після `nextInLine(testArr, 10)`, код `testArr[4]` має стати `10`

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
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```

# --solutions--

```js
const testArr = [1, 2, 3, 4, 5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```
