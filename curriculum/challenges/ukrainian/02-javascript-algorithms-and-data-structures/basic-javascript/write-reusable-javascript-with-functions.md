---
id: 56bbb991ad1ed5201cd392cf
title: Написання багаторазового JavaScript із функціями
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

У JavaScript можна розділити код на багаторазові частини, які називаються <dfn>функціями</dfn>.

Приклад функції:

```js
function functionName() {
  console.log("Hello World");
}
```

Ви можете викликати або <dfn>активувати</dfn> цю функцію, використавши дужки для написання її назви, ось так: `functionName();`. При кожному виклику функції на консоль буде виводитись повідомлення `Hello World`. При кожному виклику функції буде виконуватись код у фігурних дужках.

# --instructions--

<ol>
  <li>
    Створіть функцію під назвою <code>reusableFunction</code>, яка друкує рядок <code>Hi World</code> на консоль.
  </li>
  <li>
    Викличте функцію.
  </li>
</ol>

# --hints--

`reusableFunction` має бути функцією.

```js
assert(typeof reusableFunction === 'function');
```

Якщо `reusableFunction` буде викликано, то вона повинна виводити рядок `Hi World` на консоль.

```js
assert(testConsole());
```

Ви повинні викликати `reusableFunction` після її визначення.

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
