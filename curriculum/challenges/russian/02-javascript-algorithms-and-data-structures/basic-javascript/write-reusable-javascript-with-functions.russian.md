---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
videoUrl: ''
localeTitle: Запись многоразового JavaScript с функциями
---

## Description
<section id="description"> В JavaScript мы можем разделить наш код на многократно используемые <dfn>функции,</dfn> называемые <dfn>функциями</dfn> . Вот пример функции: <blockquote> function functionName () { <br> console.log («Hello World»); <br> } </blockquote> Вы можете вызвать или <dfn>вызвать</dfn> эту функцию, используя ее имя, за которым следуют скобки, например: <code>functionName();</code> Каждый раз, когда функция вызывается, она выводит сообщение <code>&quot;Hello World&quot;</code> на консоль dev. Весь код между фигурными фигурными скобками будет выполняться каждый раз, когда вызывается функция. </section>

## Instructions
<section id="instructions"><ol><li> Создайте функцию, называемую <code>reusableFunction</code> которая печатает <code>&quot;Hi World&quot;</code> в dev-консоли. </li><li> Вызовите функцию. </li></ol></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Функция <code>reusableFunction</code> должна быть функцией
    testString: 'assert(typeof reusableFunction === "function", "<code>reusableFunction</code> should be a function");'
  - text: <code>reusableFunction</code> должен выводить «Hi World» на консоль dev
    testString: 'assert("Hi World" === logOutput, "<code>reusableFunction</code> should output "Hi World" to the dev console");'
  - text: Вызовите <code>reusableFunction</code> после ее определения.
    testString: 'assert(/^\s*reusableFunction\(\)\s*;/m.test(code), "Call <code>reusableFunction</code> after you define it");'

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

### Before Test
<div id='js-setup'>

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
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
  console.log = originalConsole.log;
}

capture();

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
