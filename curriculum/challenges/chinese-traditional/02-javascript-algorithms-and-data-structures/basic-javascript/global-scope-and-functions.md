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

這些沒有使用 `var` 關鍵字定義的變量，會被自動創建在 `global` 作用域中，形成全局變量。 當在代碼其他地方無意間定義了一個變量，剛好變量名與全局變量相同，這時會產生意想不到的後果。 因此你應該總是使用 `var` 關鍵字來聲明你的變量。

# --instructions--

使用 `var`，在函數外聲明一個全局變量 `myGlobal`， 並給它一個初始值 `10`。

在函數 `fun1` 的內部，***不***使用 `var` 關鍵字，聲明 `oopsGlobal`，並給它賦值爲 `5`。

# --hints--

應定義 `myGlobal`。

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` 的值應爲 `10`。

```js
assert(myGlobal === 10);
```

應使用 `var` 關鍵字定義 `myGlobal`。

```js
assert(/var\s+myGlobal/.test(code));
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
