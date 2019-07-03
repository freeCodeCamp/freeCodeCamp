---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1

videoUrl: ''
localeTitle: Stand in Line
---

## Description
<section id='description'>
如果你还记得我们在这一节 <a href="javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">Storing Values with the Assignment Operator</a>,的讨论，赋值之前，先完成等号右边的操作。这意味着我们可把一个函数的返回值，赋值给一个变量。
假设我们预先定义的函数<code>sum</code>其功能就是将两个数字相加，那么：
<code>ourSum = sum(5, 12);</code>
将调用<code>sum</code>函数，返回<code>return</code>了一个数值<code>17</code>，然后把它赋值给了<code>ourSum</code>变量。
</section>

## Instructions
<section id='instructions'>
调用<code>processArg</code>函数并给参数一个值<code>7</code>，然后把返回的值赋值给变量<code>processed</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>nextInLine([], 5)</code>应该返回一个数字
    testString: assert.isNumber(nextInLine([],5), '<code>nextInLine([], 5)</code>应该返回一个数字');
  - text: <code>nextInLine([], 1)</code>应该返回<code>1</code>
    testString: assert(nextInLine([],1) === 1, '<code>nextInLine([], 1)</code>应该返回<code>1</code>');
  - text: <code>nextInLine([2], 1)</code>应该返回<code>2</code>
    testString: assert(nextInLine([2],1) === 2, '<code>nextInLine([2], 1)</code>应该返回<code>2</code>');
  - text: <code>nextInLine([5,6,7,8,9], 1)</code>应该返回<code>5</code>
    testString: assert(nextInLine([5,6,7,8,9],1) === 5, '<code>nextInLine([5,6,7,8,9], 1)</code>应该返回<code>5</code>');
  - text: 在<code>nextInLine(testArr, 10)</code>执行后<code>testArr[4]</code>应该是<code>10</code>
    testString: nextInLine(testArr, 10); assert(testArr[4] === 10, '在<code>nextInLine(testArr, 10)</code>执行后<code>testArr[4]</code>应该是<code>10</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>











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
              