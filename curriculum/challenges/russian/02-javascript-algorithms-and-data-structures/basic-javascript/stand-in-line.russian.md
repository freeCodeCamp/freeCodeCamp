---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1
videoUrl: ''
localeTitle: Стоять в очереди
---

## Description
<section id="description"> В информатике <dfn>очередь</dfn> представляет собой абстрактную <dfn>структуру данных, в</dfn> которой элементы хранятся в порядке. Новые элементы могут быть добавлены в конце <code>queue</code> а старые элементы сняты с передней части <code>queue</code> . Напишите функцию <code>nextInLine</code> которая принимает массив ( <code>arr</code> ) и число ( <code>item</code> ) в качестве аргументов. Добавьте число в конец массива, затем удалите первый элемент массива. Затем функция <code>nextInLine</code> возвращает элемент, который был удален. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>nextInLine([], 5)</code> должен возвращать число.'
    testString: 'assert.isNumber(nextInLine([],5), "<code>nextInLine([], 5)</code> should return a number.");'
  - text: '<code>nextInLine([], 1)</code> должен возвращать <code>1</code>'
    testString: 'assert(nextInLine([],1) === 1, "<code>nextInLine([], 1)</code> should return <code>1</code>");'
  - text: '<code>nextInLine([2], 1)</code> должен вернуть <code>2</code>'
    testString: 'assert(nextInLine([2],1) === 2, "<code>nextInLine([2], 1)</code> should return <code>2</code>");'
  - text: '<code>nextInLine([5,6,7,8,9], 1)</code> должен вернуть <code>5</code>'
    testString: 'assert(nextInLine([5,6,7,8,9],1) === 5, "<code>nextInLine([5,6,7,8,9], 1)</code> should return <code>5</code>");'
  - text: 'После <code>nextInLine(testArr, 10)</code> <code>testArr[4]</code> должно быть <code>10</code>'
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
// solution required
```
</section>
