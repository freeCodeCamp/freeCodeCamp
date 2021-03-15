---
id: 56bbb991ad1ed5201cd392cf
title: Escribe JavaScript reutilizable utilizando funciones
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas <dfn>funciones</dfn>.

Este es un ejemplo de una función:

```js
function functionName() {
  console.log("Hello World");
}
```

Puedes llamar o <dfn>invocar</dfn> esta función usando su nombre seguido por paréntesis, así: `functionName();` Cada vez que se llame la función se imprimirá el mensaje `Hello World` en la consola de desarrollo. Todo el código entre las llaves se ejecutará cada vez que se llame la función.

# --instructions--

<ol><li>Crea una función llamada <code>reusableFunction</code> que imprima <code>"Hi World"</code> en la consola de desarrollo.</li><li>Llama a la función.</li></ol>

# --hints--

`reusableFunction` debe ser una función.

```js
assert(typeof reusableFunction === 'function');
```

`reusableFunction` debe mostrar la cadena `Hi World` en la consola.

```js
assert(hiWorldWasLogged);
```

Debes llamar `reusableFunction` después de definirla.

```js
assert(/^\s*reusableFunction\(\)\s*/m.test(code));
```

# --seed--

## --before-user-code--

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

## --after-user-code--

```js
uncapture();

if (typeof reusableFunction !== "function") { 
  (function() { return "reusableFunction is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
```

## --seed-contents--

```js

```

# --solutions--

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```
