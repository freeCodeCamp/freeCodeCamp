---
id: 56533eb9ac21ba0edf2244c6
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
title: 排队
---

## Description
<section id='description'>
在计算机科学中<dfn>队列</dfn>（queue）是一个抽象的数据结构，队列中的条目都是有秩序的。新的条目会被加到<code>队列</code>的末尾，旧的条目会从<code>队列</code>的头部被移出。
写一个函数<code>nextInLine</code>，用一个数组(<code>arr</code>)和一个数字(<code>item</code>)作为参数。
把数字添加到数组的结尾，然后移出数组的第一个元素。
最后<code>nextInLine</code>函数应该返回被删除的元素。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>nextInLine([], 5)</code>应该返回一个数字。
    testString: assert.isNumber(nextInLine([],5));
  - text: <code>nextInLine([], 1)</code>应该返回<code>1</code>。
    testString: assert(nextInLine([],1) === 1);
  - text: <code>nextInLine([2], 1)</code>应该返回<code>2</code>。
    testString: assert(nextInLine([2],1) === 2);
  - text: <code>nextInLine([5,6,7,8,9], 1)</code>应该返回<code>5</code>。
    testString: assert(nextInLine([5,6,7,8,9],1) === 5);
  - text: 在<code>nextInLine(testArr, 10)</code>执行后<code>testArr[4]</code>应该是<code>10</code>。
    testString: nextInLine(testArr, 10); assert(testArr[4] === 10);

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
