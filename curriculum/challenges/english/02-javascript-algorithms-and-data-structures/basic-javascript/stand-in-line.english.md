---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
---

## Description
<section id='description'>
In Computer Science a <dfn>queue</dfn> is an abstract <dfn>Data Structure</dfn> where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
Write a function <code>nextInLine</code> which takes an array (<code>arr</code>) and a number (<code>item</code>) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The <code>nextInLine</code> function should then return the element that was removed.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>nextInLine([], 5)</code> should return a number.
    testString: assert.isNumber(nextInLine([],5));
  - text: <code>nextInLine([], 1)</code> should return <code>1</code>
    testString: assert(nextInLine([],1) === 1);
  - text: <code>nextInLine([2], 1)</code> should return <code>2</code>
    testString: assert(nextInLine([2],1) === 2);
  - text: <code>nextInLine([5,6,7,8,9], 1)</code> should return <code>5</code>
    testString: assert(nextInLine([5,6,7,8,9],1) === 5);
  - text: After <code>nextInLine(testArr, 10)</code>, <code>testArr[4]</code> should be <code>10</code>
    testString: nextInLine(testArr, 10); assert(testArr[4] === 10);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nextInLine(arr, item) {
  // Only change code below this line
  
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
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
uncapture();
testArr = [1,2,3,4,5];
(function() { return logOutput.join("\n");})();
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
