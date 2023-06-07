---
id: 56533eb9ac21ba0edf2244bd
title: 将值传递给带有参数的函数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

函数的参数 （<dfn>parameters</dfn>）在函数调用中充当传入函数的输入占位符（也叫形参）。 函数调用时，参数可以为一个或多个。 调用函数时输入（或传递 <dfn>"passed"</dfn>）的实际值被称为参数（<dfn>arguments</dfn>）。

这是带有两个参数的函数，`param1` 和 `param2`：

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

然后我们可以调用 `testFun`，就像这样： `testFun("Hello", "World");`。 我们传入了两个字符串参数， `Hello` 和 `World`。 在函数中，`param1` 等于字符串 `Hello` 以及 `param2` 等于字符串 `World`。 请注意，`testFun` 函数可以多次调用，每次调用时传递的参数会决定参数的实际值。

# --instructions--

<ol><li>创建一个名为 <code>functionWithArgs</code> 的函数，它可以接收两个参数，计算参数的和，将结果输出到控制台。</li><li>自己指定两个数字作为参数，运行函数 functionWithArgs。</li></ol>

# --hints--

`functionWithArgs` 应该是一个函数。

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` 应该输出 `3`。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` 应该输出 `16`。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

在定义 `functionWithArgs` 之后记得传入两个数字调用它。

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
