---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
localeTitle: Pasando valores a funciones con argumentos
challengeType: 1
---

## Description
<section id='description'>
<dfn>parámetros</dfn> son variables que actúan como marcadores de posición para los valores que deben ingresarse en una función cuando se llama. Cuando se define una función, normalmente se define junto con uno o más parámetros. Los valores reales que se ingresan (o <dfn>&quot;pasan&quot;</dfn> ) en una función cuando se llama se conocen como <dfn>argumentos</dfn> .
Aquí hay una función con dos parámetros, <code>param1</code> y <code>param2</code> :
<blockquote>function testFun(param1, param2) {<br>&nbsp;&nbsp;console.log(param1, param2);<br>}</blockquote>
Entonces podemos llamar a <code>testFun</code> :
<code>testFun(&quot;Hello&quot;, &quot;World&quot;);</code>
Hemos pasado dos argumentos, <code>&quot;Hello&quot;</code> y <code>&quot;World&quot;</code> . Dentro de la función, <code>param1</code> será igual a &quot;Hello&quot; y <code>param2</code> será igual a &quot;World&quot;. Tenga en cuenta que podría <code>testFun</code> llamar a <code>testFun</code> con diferentes argumentos y los parámetros tomarían el valor de los nuevos argumentos.
</section>

## Instructions
<section id='instructions'>
<ol> <li> Cree una función llamada <code>functionWithArgs</code> que acepte dos argumentos y envíe su suma a la consola dev. </li><li> Llame a la función con dos números como argumentos. </li></ol>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>functionWithArgs</code> debería ser una función
    testString: 'assert(typeof functionWithArgs === "function", "<code>functionWithArgs</code> should be a function");'
  - text: ' <code>functionWithArgs(1,2)</code> debe generar <code>3</code> '
    testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(1,2); uncapture(); } assert(logOutput == 3, "<code>functionWithArgs(1,2)</code> should output <code>3</code>");'
  - text: ' <code>functionWithArgs(7,9)</code> debe generar <code>16</code> '
    testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(7,9); uncapture(); } assert(logOutput == 16, "<code>functionWithArgs(7,9)</code> should output <code>16</code>");'
  - text: Llame a <code>functionWithArgs</code> con dos números después de definirlo.
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
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```

</section>
