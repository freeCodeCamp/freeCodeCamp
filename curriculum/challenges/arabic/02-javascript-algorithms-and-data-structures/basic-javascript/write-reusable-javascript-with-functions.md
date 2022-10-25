---
id: 56bbb991ad1ed5201cd392cf
title: كتابة JavaScript قابل لإعادة الاستخدام مع الوظائف (Write Reusable JavaScript with Functions)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

في JavaScript، يمكننا تقسيم الكود إلى أجزاء قابلة لإعادة الاستخدام تسمى <dfn>وظائف</dfn>.

إليك مثال لوظيفة:

```js
function functionName() {
  console.log("Hello World");
}
```

يمكنك استدعاء أو <dfn>تفعيل</dfn> هذه الوظيفة باستخدام اسمه متبوعا بقوسين، هكذا: `functionName();` في كل مرة يستدعي الوظيفة، ستطبع الرسالة `Hello World` في وحدة التحكم. سيتم تنفيذ الكود بين الأقواس المتعرجة في كل مرة يستدعي الوظيفة.

# --instructions--

<ol>
  <li>
    أنشئ وظيفة تسمى <code>reusableFunction</code> الذي يطبع مقطع <code>Hi World</code> إلى وحدة التحكم.
  </li>
  <li>
    أستدعي الوظيفة.
  </li>
</ol>

# --hints--

يجب أن تكون `reusableFunction` وظيفة.

```js
assert(typeof reusableFunction === 'function');
```

إذا تم استدعاء `reusableFunction`، فيجب طباعة مقطع `Hi World` علي وحدة التحكم.

```js
assert(testConsole());
```

يجب عليك استدعاء `reusableFunction` بمجرد تعريفها.

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
