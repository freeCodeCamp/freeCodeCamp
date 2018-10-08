---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
localeTitle: Ámbito global y funciones
challengeType: 1
---

## Description
<section id='description'> 
En JavaScript, el <dfn>alcance se</dfn> refiere a la visibilidad de las variables. Las variables que se definen fuera de un bloque de función tienen alcance <dfn>global</dfn> . Esto significa que pueden verse en todas partes en su código JavaScript. 
Las variables que se utilizan sin la palabra clave <code>var</code> se crean automáticamente en el ámbito <code>global</code> . Esto puede crear consecuencias no deseadas en otra parte de su código o al ejecutar una función nuevamente. Siempre debes declarar tus variables con <code>var</code> . 
</section>

## Instructions
<section id='instructions'> 
Usando <code>var</code> , declare una variable <code>global</code> <code>myGlobal</code> fuera de cualquier función. Inicialízalo con un valor de <code>10</code> . 
Dentro de la función <code>fun1</code> , asigne <code>5</code> a <code>oopsGlobal</code> <strong><em>sin</em></strong> usar la palabra clave <code>var</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myGlobal</code> debe ser definido
    testString: 'assert(typeof myGlobal != "undefined", "<code>myGlobal</code> should be defined");'
  - text: <code>myGlobal</code> debe tener un valor de <code>10</code>
    testString: 'assert(myGlobal === 10, "<code>myGlobal</code> should have a value of <code>10</code>");'
  - text: <code>myGlobal</code> debe declararse usando la palabra clave <code>var</code>
    testString: 'assert(/var\s+myGlobal/.test(code), "<code>myGlobal</code> should be declared using the <code>var</code> keyword");'
  - text: <code>oopsGlobal</code> debe ser una variable global y tener un valor de <code>5</code>
    testString: 'assert(typeof oopsGlobal != "undefined" && oopsGlobal === 5, "<code>oopsGlobal</code> should be a global variable and have a value of <code>5</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
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
var oopsGlobal;
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
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

</section>
