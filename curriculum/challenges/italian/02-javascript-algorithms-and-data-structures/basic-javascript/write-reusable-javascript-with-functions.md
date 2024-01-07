---
id: 56bbb991ad1ed5201cd392cf
title: Scrivere JavaScript riutilizzabile con le funzioni
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

In JavaScript, possiamo dividere il nostro codice in parti riutilizzabili chiamate <dfn>funzioni</dfn>.

Ecco un esempio di funzione:

```js
function functionName() {
  console.log("Hello World");
}
```

Puoi chiamare o <dfn>invocare</dfn> questa funzione usando il suo nome seguito da parentesi, in questo modo: `functionName();` Ogni volta che la funzione viene chiamata stamperà il messaggio `Hello World` sulla dev console. Tutto il codice tra le parentesi graffe verrà eseguito ogni volta che viene chiamata la funzione.

# --instructions--

<ol>
  <li>
    Crea una funzione chiamata <code>reusableFunction</code> che stampi la stringa <code>Hi World</code> nella dev console.
  </li>
  <li>
    Chiama la funzione.
  </li>
</ol>

# --hints--

`reusableFunction` dovrebbe essere una funzione.

```js
assert(typeof reusableFunction === 'function');
```

Se `reusableFunction` è chiamata, dovrebbe scrivere la stringa `Hi World` nella console.

```js
assert(testConsole());
```

Dovresti chiamare `reusableFunction` dopo averla definita.

```js
const functionStr = reusableFunction && __helpers.removeWhiteSpace(reusableFunction.toString());
const codeWithoutFunction = __helpers.removeWhiteSpace(code).replace(/reusableFunction\(\)\{/g, '');
assert(/reusableFunction\(\)/.test(codeWithoutFunction));
```

# --seed--

## --after-user-code--

```js

function testConsole() {
  var logOutput = "";
  var originalConsole = console;
  var nativeLog = console.log;
  var hiWorldWasLogged = false;
  console.log = function (message) {
    if(message === 'Hi World')  {
      console.warn(message)
      hiWorldWasLogged = true;
    }
    if(message && message.trim) logOutput = message.trim();
    if(nativeLog.apply) {
      nativeLog.apply(originalConsole, arguments);
    } else {
      var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
      nativeLog(nativeMsg);
    }
  };
  reusableFunction();
  console.log = nativeLog;
  return hiWorldWasLogged;
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
