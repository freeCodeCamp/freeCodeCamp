---
id: 56533eb9ac21ba0edf2244c6
title: 排队
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8Q8tP'
forumTopicId: 18307
dashedName: stand-in-line
---

# --description--

在计算机科学中队列（<dfn>queue</dfn>）是一个抽象的数据结构（<dfn>Data Structure</dfn>），队列中的条目都是有秩序的。 新的条目会被加到队列的末尾，旧的条目会从队列的头部被移出。

# --instructions--

写一个函数 `nextInLine`，用一个数组（`arr`）和一个数字（`item`）作为参数。

把数字添加到数组的结尾，然后移出数组的第一个元素。

最后 `nextInLine` 函数应该返回被删除的元素。

# --hints--

`nextInLine([], 5)` 应该返回一个数字。

```js
assert.isNumber(nextInLine([], 5));
```

`nextInLine([], 1)` 应该返回 `1`

```js
assert(nextInLine([], 1) === 1);
```

`nextInLine([2], 1)` 应该返回 `2`

```js
assert(nextInLine([2], 1) === 2);
```

`nextInLine([5,6,7,8,9], 1)` 应该返回 `5`

```js
assert(nextInLine([5, 6, 7, 8, 9], 1) === 5);
```

在 `nextInLine(testArr, 10)` 执行后 `testArr[4]` 应该是 `10`

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
