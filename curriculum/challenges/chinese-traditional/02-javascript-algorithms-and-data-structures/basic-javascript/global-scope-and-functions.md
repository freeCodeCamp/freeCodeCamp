---
id: 56533eb9ac21ba0edf2244be
title: 全局作用域和函數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

在 JavaScript 中，<dfn>作用域</dfn>涉及到變量的作用範圍。 在函數外定義的變量具有 <dfn>全局</dfn> 作用域。 這意味着，具有全局作用域的變量可以在代碼的任何地方被調用。

未使用 `let` 或 `const` 關鍵字聲明的變量會在 `global` 範圍內自動創建。 當在代碼其他地方無意間定義了一個變量，剛好變量名與全局變量相同，這時會產生意想不到的後果。 你應該總是用 `let` 或 `const` 聲明你的變量。

# --instructions--

使用 `let` 或 `const`，在任何函數之外聲明一個名爲 `myGlobal` 的全局變量。 並給它一個初始值 `10`。

在函數 `fun1`中，賦值 `5` 給 `oopsGlobal`，***不使用*** `var`、`let` 或 `const` 關鍵字。

# --hints--

應定義 `myGlobal`。

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` 的值應爲 `10`。

```js
assert(myGlobal === 10);
```

`myGlobal` 應該使用 `let` 或 `const` 關鍵字聲明

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` 應爲全局變量，值爲 `5`。

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
const myGlobal = 10;

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
