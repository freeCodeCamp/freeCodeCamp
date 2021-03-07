---
id: 56533eb9ac21ba0edf2244be
title: 全局作用域和函数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

在 JavaScript 中，<dfn>作用域</dfn>涉及到变量的作用范围。 在函数外定义的变量具有 <dfn>全局</dfn> 作用域。 这意味着，具有全局作用域的变量可以在代码的任何地方被调用。

这些没有使用 `var` 关键字定义的变量，会被自动创建在 `global` 作用域中，形成全局变量。 当在代码其他地方无意间定义了一个变量，刚好变量名与全局变量相同，这时会产生意想不到的后果。 因此你应该总是使用 `var` 关键字来声明你的变量。

# --instructions--

使用 `var`，在函数外声明一个全局变量 `myGlobal`， 并给它一个初始值 `10`。

在函数 `fun1` 的内部，***不***使用 `var` 关键字，声明 `oopsGlobal`，并给它赋值为 `5`。

# --hints--

应定义 `myGlobal`。

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` 的值应为 `10`。

```js
assert(myGlobal === 10);
```

应使用 `var` 关键字定义 `myGlobal`。

```js
assert(/var\s+myGlobal/.test(code));
```

`oopsGlobal` 应为全局变量，值为 `5`。

```js
assert(typeof oopsGlobal != 'undefined' && oopsGlobal === 5);
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
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
var oopsGlobal;
capture();
```

## --after-user-code--

```js
fun1();
fun2();
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

# --solutions--

```js
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
