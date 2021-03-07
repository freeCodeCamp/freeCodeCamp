---
id: 56533eb9ac21ba0edf2244bd
title: Pasa valores a las funciones utilizando argumentos
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Los parámetros</dfn> son variables que actúan como marcadores de posición para los valores que deben ser introducidos en una función cuando se llama. Cuando se define una función, se define típicamente junto con uno o más parámetros. Los valores reales que son introducidos (o <dfn>"pasados"</dfn>) a una función cuando se llama son conocidos como <dfn>argumentos</dfn>.

Esta es una función con dos parámetros, `param1` y `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Entonces podemos llamar a `testFun` así: `testFun("Hello", "World");`. Hemos pasado dos argumentos de cadena, `Hello` y `World`. Dentro de la función, `param1` será igual a la cadena `Hello` y `param2` será igual a la cadena `World`. Ten en cuenta que podrías llamar a `testFun` otra vez con diferentes argumentos y los parámetros tomarían el valor de los nuevos argumentos.

# --instructions--

<ol><li>Crea una función llamada <code>functionWithArgs</code> que acepte dos argumentos y muestre la suma de ellos en la consola de desarrollador.</li><li>Llama a la función con dos números como argumentos.</li></ol>

# --hints--

`functionWithArgs` debe ser una función.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` debe mostrar `3`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` debe mostrar `16`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

Debes llamar `functionWithArgs` con dos números después de definirla.

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
