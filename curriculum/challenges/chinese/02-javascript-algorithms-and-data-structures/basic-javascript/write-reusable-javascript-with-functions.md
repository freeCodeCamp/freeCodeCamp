---
id: 56bbb991ad1ed5201cd392cf
title: 用函数编写可重用代码
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

在 JavaScript 中，我们可以把代码的重复部分抽取出来，放到一个函数 （<dfn>functions</dfn>）中。

举个例子：

```js
function functionName() {
  console.log("Hello World");
}
```

你可以通过函数名加上后面的小括号来调用（<dfn>invoke</dfn>）这个函数，就像这样： `functionName();` 每次调用函数时，它都会在控制台上打印消息 `Hello World`。 每次调用函数时，大括号之间的所有代码都将被执行。

# --instructions--

<ol>
  <li>
    先创建一个名为 <code>reusableFunction</code> 的函数，这个函数打印 <code>Hi World</code> 到控制台上。
  </li>
  <li>
    然后调用这个函数。
  </li>
</ol>

# --hints--

`reusableFunction` 应该是一个函数。

```js
assert(typeof reusableFunction === 'function');
```

如果调用 `reusableFunction`，应该在控制台输出字符串 `Hi World`。

```js
assert(testConsole());
```

在定义 `reusableFunction` 之后，就应该调用它。

```js
const functionStr = reusableFunction && __helpers.removeWhiteSpace(reusableFunction.toString());
const codeWithoutFunction = __helpers.removeWhiteSpace(code).replace(/reusableFunction\(\)\{/g, '');
assert(/reusableFunction\(\)/.test(codeWithoutFunction));
```

# --seed--

## --after-user-code--

```js

function testConsole() {
  var logOutput = "";
  var originalConsole = console;
  var nativeLog = console.log;
  var hiWorldWasLogged = false;
  console.log = function (message) {
    if(message === 'Hi World')  {
      console.warn(message)
      hiWorldWasLogged = true;
    }
    if(message && message.trim) logOutput = message.trim();
    if(nativeLog.apply) {
      nativeLog.apply(originalConsole, arguments);
    } else {
      var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
      nativeLog(nativeMsg);
    }
  };
  reusableFunction();
  console.log = nativeLog;
  return hiWorldWasLogged;
}

```

## --seed-contents--

```js

```

# --solutions--

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```
