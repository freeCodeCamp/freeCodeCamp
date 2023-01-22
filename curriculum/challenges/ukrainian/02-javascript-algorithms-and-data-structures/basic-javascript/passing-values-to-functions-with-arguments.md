---
id: 56533eb9ac21ba0edf2244bd
title: Передача значень до функцій з аргументами
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Параметри</dfn> - це змінні, які діють як місця для заповнення тих значень, які вводяться у функцію під час її виклику. Коли функцію визначають, її зазвичай визначають разом з одним або декількома параметрами. Реальні значення, які введені (або <dfn>"передані"</dfn>) до функції під час її виклику, називаються <dfn>аргументами</dfn>.

Ось функція з двома параметрами, `param1` та `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Потім ми можемо викликати `testFun`, отак: `testFun("Hello", "World");`. Ми передали два рядкові аргументи: `Hello` and `World`. Всередині функції, `param1` дорівнюватиме рядку `Hello`, а `param2` дорівнюватиме рядку `World`. Зверніть увагу на те, що ви можете викликати `testFun` знову, використовуючи різні аргументи та параметри, які візьмуть значення нових аргументів.

# --instructions--

<ol><li>Створіть функцію з назвою <code>functionWithArgs</code>, яка приймає 2 аргументи і виводить їхню суму в dev-консоль.</li><li>Викличте функцію з двома числами так, як аргументи.</li></ol>

# --hints--

`functionWithArgs` має бути функцією.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` має вивести `3`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` має вивести `16`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

Вам слід викликати `functionWithArgs` з двома числами після того як визначите його.

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
