---
id: 56533eb9ac21ba0edf2244bd
title: تمرير القيم إلى الوظائف باستخدام الوسيطات
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

إن <dfn>الوسائط (parameters)</dfn> متغيرات تعمل كعناصر ناقلة للقيم الذي يجب أن تكون مدخلة للوظيفة (function) عند تفعيلها. عندما يتم تعريف الوظيفة، فإنها تُعرَّف عادة مع واحد أو أكثر من وسيط. القيم الفعلية التي تدخل (أو <dfn>"تمرر"</dfn>) إلى وظيفة عند استدعائها هي معروفة باسم <dfn>الحجج (arguments)</dfn>.

إليك وظيفة ذات وسيطين، `param1` و `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

ثم يمكننا استدعاء `testFun` مثل: `testFun("Hello", "World");`. لقد تمريرنا حجج من نوع مقطع, `Hello` و `World`. داخل الحجة، `param1` سيتساوى مع المقطع `Hello` و `param2` سيتساوى مع المقطع `World`. لاحظ أنه يمكنك تنفيذ `testFun` مرة أخرى مع معطيات (arguments) مختلفة ووسائط (parameters) لتأخذ قيمة المعطيات الجديدة.

# --instructions--

<ol><li>أنشاء وظيفة تسمى <code>functionWithArgs</code> تقبل حجج وتخرج المجموع الخاص بهم إلى وحدة التحكم.</li><li>استدعي الوظيفة برقمين كحجتين.</li></ol>

# --hints--

يجب أن تكون `functionWithArgs` وظيفة.

```js
assert(typeof functionWithArgs === 'function');
```

يجب أن تنتج `functionWithArgs(1,2)` قيمة `3`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

يجب أن تنتج `functionWithArgs(7,9)` قيمة `16`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

يجب عليك استدعاء `functionWithArgs` برقمين بعد تعريفه.

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
