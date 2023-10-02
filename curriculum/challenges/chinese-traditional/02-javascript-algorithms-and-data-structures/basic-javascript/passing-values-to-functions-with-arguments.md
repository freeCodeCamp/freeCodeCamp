---
id: 56533eb9ac21ba0edf2244bd
title: 將值傳遞給帶有參數的函數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

函數的參數 （<dfn>parameters</dfn>）在函數調用中充當傳入函數的輸入佔位符（也叫形參）。 函數調用時，參數可以爲一個或多個。 調用函數時輸入（或傳遞 <dfn>"passed"</dfn>）的實際值被稱爲參數（<dfn>arguments</dfn>）。

這是帶有兩個參數的函數，`param1` 和 `param2`：

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

然後我們可以調用 `testFun`，就像這樣： `testFun("Hello", "World");`。 我們傳入了兩個字符串參數， `Hello` 和 `World`。 在函數中，`param1` 等於字符串 `Hello` 以及 `param2` 等於字符串 `World`。 請注意，`testFun` 函數可以多次調用，每次調用時傳遞的參數會決定參數的實際值。

# --instructions--

<ol><li>創建一個名爲 <code>functionWithArgs</code> 的函數，它可以接收兩個參數，計算參數的和，將結果輸出到控制檯。</li><li>自己指定兩個數字作爲參數，運行函數 functionWithArgs。</li></ol>

# --hints--

`functionWithArgs` 應該是一個函數。

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` 應該輸出 `3`。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` 應該輸出 `16`。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

在定義 `functionWithArgs` 之後記得傳入兩個數字調用它。

```js
assert(
  /functionWithArgs\([-+]?\d*\.?\d*,[-+]?\d*\.?\d*\)/.test(
    code.replace(/\s/g, '')
  )
);
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        if(message) logOutput = JSON.stringify(message).trim();
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

if (typeof functionWithArgs !== "function") { 
  (function() { return "functionWithArgs is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
```

## --seed-contents--

```js

```

# --solutions--

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```
