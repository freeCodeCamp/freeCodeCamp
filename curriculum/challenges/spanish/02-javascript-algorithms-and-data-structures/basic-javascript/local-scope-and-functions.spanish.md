---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: Ámbito local y funciones
---

## Description
<section id="description"> Las variables que se declaran dentro de una función, así como los parámetros de la función tienen alcance <dfn>local</dfn> . Eso significa que, sólo son visibles dentro de esa función. Aquí hay una función <code>myTest</code> con una variable local llamada <code>loc</code> . <blockquote> función myTest () { <br> var loc = &quot;foo&quot;; <br> console.log (loc); <br> } <br> mi prueba(); // logs &quot;foo&quot; <br> console.log (loc); // loc no esta definido </blockquote> <code>loc</code> no está definido fuera de la función. </section>

## Instructions
<section id="instructions"> Declarar una variable local <code>myVar</code> dentro de <code>myLocalScope</code> . Ejecute las pruebas y luego siga las instrucciones comentadas en el editor. <strong>Insinuación</strong> <br> Actualizar la página puede ayudar si te quedas atascado. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ninguna variable global <code>myVar</code>
    testString: 'assert(typeof myVar === "undefined", "No global <code>myVar</code> variable");'
  - text: Agrega una variable <code>myVar</code> local
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
