---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
videoUrl: https://scrimba.com/c/cL6dqfy
forumTopicId: 18378
localeTitle: Запись многоразового JavaScript с функциями
---

## Description
<section id='description'>
В JavaScript мы можем разделить наш код на многократно используемые <dfn>функции,</dfn> называемые <dfn>функциями</dfn> . Вот пример функции: <blockquote> function functionName () { <br> console.log («Hello World»); <br> } </blockquote> Вы можете вызвать или <dfn>вызвать</dfn> эту функцию, используя ее имя, за которым следуют скобки, например: <code>functionName();</code> Каждый раз, когда функция вызывается, она выводит сообщение <code>&quot;Hello World&quot;</code> на консоль dev. Весь код между фигурными фигурными скобками будет выполняться каждый раз, когда вызывается функция.
</section>

## Instructions
<section id='instructions'>
<ol><li> Создайте функцию, называемую <code>reusableFunction</code> которая печатает <code>&quot;Hi World&quot;</code> в dev-консоли. </li><li> Вызовите функцию. </li></ol>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reusableFunction</code> should be a function
    testString: assert(typeof reusableFunction === 'function');
  - text: <code>reusableFunction</code> should output "Hi World" to the dev console
    testString: assert(hiWorldWasLogged);
  - text: Call <code>reusableFunction</code> after you define it
    testString: assert(/^\s*reusableFunction\(\)\s*/m.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

```

</div>

### Before Tests
<div id='js-setup'>

```js
var logOutput = "";
var originalConsole = console;
var nativeLog = console.log;
var hiWorldWasLogged = false;
function capture() {
    console.log = function (message) {
        if(message === 'Hi World')  hiWorldWasLogged = true;
        if(message && message.trim) logOutput = message.trim();
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = nativeLog;
}

capture();

```

</div>

### After Tests
<div id='js-teardown'>

```js
uncapture();

if (typeof reusableFunction !== "function") { 
  (function() { return "reusableFunction is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```

</section>
