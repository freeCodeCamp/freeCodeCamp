---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: Локальная область и функции
---

## Description
<section id="description"> Переменные, объявленные внутри функции, а также параметры функции имеют <dfn>локальную</dfn> область. Это означает, что они видны только внутри этой функции. Вот функция <code>myTest</code> с локальной переменной <code>loc</code> . <blockquote> function myTest () { <br> var loc = &quot;foo&quot;; <br> console.log (LOC); <br> } <br> MyTest (); // logs &quot;foo&quot; <br> console.log (LOC); // loc не определен </blockquote> <code>loc</code> не определяется вне функции. </section>

## Instructions
<section id="instructions"> Объявите локальную переменную <code>myVar</code> внутри <code>myLocalScope</code> . Запустите тесты, а затем следуйте инструкциям, прокомментированным в редакторе. <strong>намек</strong> <br> Обновление страницы может помочь, если вы застряли. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Глобальная переменная <code>myVar</code>
    testString: 'assert(typeof myVar === "undefined", "No global <code>myVar</code> variable");'
  - text: Добавьте локальную переменную <code>myVar</code>
    testString: 'assert(/var\s+myVar/.test(code), "Add a local <code>myVar</code> variable");'

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

### Before Test
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

### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
