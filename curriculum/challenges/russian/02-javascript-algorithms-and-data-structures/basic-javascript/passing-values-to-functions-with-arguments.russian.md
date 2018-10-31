---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
videoUrl: ''
localeTitle: Передача значений в функции с аргументами
---

## Description
<section id="description"> <dfn>Параметры</dfn> - это переменные, которые действуют как заполнители для значений, которые должны быть введены в функцию при ее вызове. Когда функция определена, она обычно определяется вместе с одним или несколькими параметрами. Фактические значения, которые вводятся (или <dfn>«переданы»</dfn> ) в функцию при ее вызове, называются <dfn>аргументами</dfn> . Вот функция с двумя параметрами <code>param1</code> и <code>param2</code> : <blockquote> function testFun (param1, param2) { <br> console.log (param1, param2); <br> } </blockquote> Затем мы можем вызвать <code>testFun</code> : <code>testFun(&quot;Hello&quot;, &quot;World&quot;);</code> Мы передали два аргумента: <code>&quot;Hello&quot;</code> и <code>&quot;World&quot;</code> . Внутри функции <code>param1</code> будет равен «Hello», а <code>param2</code> будет равен «World». Обратите внимание, что вы можете снова вызвать <code>testFun</code> с разными аргументами, и параметры будут принимать значение новых аргументов. </section>

## Instructions
<section id="instructions"><ol><li> Создайте функцию <code>functionWithArgs</code> которая принимает два аргумента и выводит их сумму в консоль dev. </li><li> Вызовите функцию с двумя числами в качестве аргументов. </li></ol></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>functionWithArgs</code> должна быть функцией
    testString: 'assert(typeof functionWithArgs === "function", "<code>functionWithArgs</code> should be a function");'
  - text: '<code>functionWithArgs(1,2)</code> должен выводить <code>3</code>'
    testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(1,2); uncapture(); } assert(logOutput == 3, "<code>functionWithArgs(1,2)</code> should output <code>3</code>");'
  - text: '<code>functionWithArgs(7,9)</code> должен выводить <code>16</code>'
    testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(7,9); uncapture(); } assert(logOutput == 16, "<code>functionWithArgs(7,9)</code> should output <code>16</code>");'
  - text: Вызовите <code>functionWithArgs</code> с двумя номерами после ее определения.
    testString: 'assert(/^\s*functionWithArgs\s*\(\s*\d+\s*,\s*\d+\s*\)\s*;/m.test(code), "Call <code>functionWithArgs</code> with two numbers after you define it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

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
