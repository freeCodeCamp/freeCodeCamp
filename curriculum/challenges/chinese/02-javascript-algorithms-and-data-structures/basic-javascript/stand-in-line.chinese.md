---
id: 56533eb9ac21ba0edf2244c6
title: Stand in Line
challengeType: 1
videoUrl: ''
localeTitle: 站在队中
---

## Description
<section id="description">在计算机科学中， <dfn>队列</dfn>是一个抽象的<dfn>数据结构</dfn> ，其中项目按顺序保存。可以在<code>queue</code>的后面添加新项目，并从<code>queue</code>的前面取出旧项目。编写一个函数<code>nextInLine</code> ，它接受一个数组（ <code>arr</code> ）和一个数字（ <code>item</code> ）作为参数。将数字添加到数组的末尾，然后删除数组的第一个元素。然后， <code>nextInLine</code>函数应返回已删除的元素。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>nextInLine([], 5)</code>应返回一个数字。'
    testString: assert.isNumber(nextInLine([],5));
  - text: '<code>nextInLine([], 1)</code>应该返回<code>1</code>'
    testString: assert(nextInLine([],1) === 1);
  - text: '<code>nextInLine([2], 1)</code>应返回<code>2</code>'
    testString: assert(nextInLine([2],1) === 2);
  - text: '<code>nextInLine([5,6,7,8,9], 1)</code>应该返回<code>5</code>'
    testString: assert(nextInLine([5,6,7,8,9],1) === 5);
  - text: '在<code>nextInLine(testArr, 10)</code> ， <code>testArr[4]</code>应为<code>10</code>'
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
