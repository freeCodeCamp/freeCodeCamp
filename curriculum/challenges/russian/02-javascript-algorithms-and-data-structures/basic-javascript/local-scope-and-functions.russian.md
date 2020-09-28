---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: https://scrimba.com/c/cd62NhM
forumTopicId: 18227
localeTitle: Локальная область и функции
---

## Description
<section id='description'>
Переменные, объявленные внутри функции, а также параметры функции имеют <dfn>локальную</dfn> область. Это означает, что они видны только внутри этой функции. Вот функция <code>myTest</code> с локальной переменной <code>loc</code> . <blockquote> function myTest () { <br> var loc = &quot;foo&quot;; <br> console.log (LOC); <br> } <br> MyTest (); // logs &quot;foo&quot; <br> console.log (LOC); // loc не определен </blockquote> <code>loc</code> не определяется вне функции.
</section>

## Instructions
<section id='instructions'>
Объявите локальную переменную <code>myVar</code> внутри <code>myLocalScope</code> . Запустите тесты, а затем следуйте инструкциям, прокомментированным в редакторе. <strong>намек</strong> <br> Обновление страницы может помочь, если вы застряли.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No global <code>myVar</code> variable
    testString: assert(typeof myVar === 'undefined');
  - text: Add a local <code>myVar</code> variable
    testString: assert(/function\s+myLocalScope\s*\(\s*\)\s*\{\s[\s\S]+\s*var\s*myVar\s*(\s*|=[\s\S]+)\s*;[\s\S]+}/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

```

</div>

### Before Tests
<div id='js-setup'>

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

```

</div>

### After Tests
<div id='js-teardown'>

```js
typeof myLocalScope === 'function' && (capture(), myLocalScope(), uncapture());
(function() { return logOutput || "console.log never called"; })();

```

</div>

</section>

## Solution
<section id='solution'>

```js
function myLocalScope() {
  'use strict';

  var myVar;
  console.log(myVar);
}
myLocalScope();
```

</section>
