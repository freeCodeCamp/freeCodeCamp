---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
localeTitle: Hacer cola
challengeType: 1
---

## Description
<section id='description'>
En informática, una <dfn>cola</dfn> es una <dfn>estructura de datos</dfn> abstracta donde los elementos se mantienen en orden. Los nuevos elementos se pueden agregar al final de la <code>queue</code> y los elementos antiguos se quitan de la parte delantera de la <code>queue</code> .
Escriba una función <code>nextInLine</code> que tome una matriz ( <code>arr</code> ) y un número ( <code>item</code> ) como argumentos.
Agregue el número al final de la matriz, luego elimine el primer elemento de la matriz.
La función <code>nextInLine</code> debe devolver el elemento que se eliminó.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>nextInLine([], 5)</code> debe devolver un número'
    testString: 'assert.isNumber(nextInLine([],5), "<code>nextInLine([], 5)</code> should return a number.");'
  - text: ' <code>nextInLine([], 1)</code> debe devolver <code>1</code> '
    testString: 'assert(nextInLine([],1) === 1, "<code>nextInLine([], 1)</code> should return <code>1</code>");'
  - text: ' <code>nextInLine([2], 1)</code> debe devolver <code>2</code> '
    testString: 'assert(nextInLine([2],1) === 2, "<code>nextInLine([2], 1)</code> should return <code>2</code>");'
  - text: ' <code>nextInLine([5,6,7,8,9], 1)</code> debe devolver <code>5</code> '
    testString: 'assert(nextInLine([5,6,7,8,9],1) === 5, "<code>nextInLine([5,6,7,8,9], 1)</code> should return <code>5</code>");'
  - text: 'Después de <code>nextInLine(testArr, 10)</code> , <code>testArr[4]</code> debería ser <code>10</code> '
    testString: 'nextInLine(testArr, 10); assert(testArr[4] === 10, "After <code>nextInLine(testArr, 10)</code>, <code>testArr[4]</code> should be <code>10</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nextInLine(arr, item) {
  // Your code here

  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
```

</div>

### Before Test
<div id='js-setup'>

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

</div>

### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var testArr = [ 1,2,3,4,5];

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```

</section>
