---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
videoUrl: ''
localeTitle: Escribir JavaScript reutilizable con funciones
---

## Description
<section id="description"> En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas <dfn>funciones</dfn> . Aquí hay un ejemplo de una función: <blockquote> función functionName () { <br> console.log (&quot;Hello World&quot;); <br> } </blockquote> Puede llamar o <dfn>invocar</dfn> esta función utilizando su nombre seguido de paréntesis, como este: <code>functionName();</code> Cada vez que se llame a la función, se imprimirá el mensaje <code>&quot;Hello World&quot;</code> en la consola dev. Todo el código entre las llaves se ejecutará cada vez que se llame a la función. </section>

## Instructions
<section id="instructions"><ol><li> Crea una función llamada <code>reusableFunction</code> que imprime <code>&quot;Hi World&quot;</code> en la consola dev. </li><li> Llama a la función. </li></ol></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reusableFunction</code> debería ser una función
    testString: 'assert(typeof reusableFunction === "function", "<code>reusableFunction</code> should be a function");'
  - text: <code>reusableFunction</code> debería dar salida a &quot;Hi World&quot; a la consola dev
    testString: 'assert("Hi World" === logOutput, "<code>reusableFunction</code> should output "Hi World" to the dev console");'
  - text: Llame a <code>reusableFunction</code> después de definirlo
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
