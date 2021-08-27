---
id: 56533eb9ac21ba0edf2244bd
title: Passare i valori alle funzioni con gli argomenti
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

I <dfn>parametri</dfn> sono variabili che agiscono come segnaposto per i valori che devono essere inseriti in una funzione quando viene chiamata. Quando una funzione viene definita, essa è tipicamente definita insieme a uno o più parametri. I valori effettivi che vengono inseriti (o <dfn>"passati"</dfn>) in una funzione quando viene chiamata sono conosciuti come <dfn>argomenti</dfn>.

Ecco una funzione con due parametri, `param1` e `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Quindi possiamo chiamare `testFun` in questo modo: `testFun("Hello", "World");`. Abbiamo passato due argomenti stringa, `Hello` e `World`. All'interno della funzione, `param1` sarà uguale alla stringa `Hello` e `param2` sarà uguale alla stringa `World`. Nota che potresti chiamare `testFun` di nuovo con argomenti differenti e i parametri assumerebbero il valore dei nuovi argomenti.

# --instructions--

<ol><li>Crea una funzione chiamata <code>functionWithArgs</code> che accetta due argomenti e invia la loro somma alla dev console.</li><li>Chiama la funzione con due numeri come argomenti.</li></ol>

# --hints--

`functionWithArgs` dovrebbe essere una funzione.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` dovrebbe produrre `3`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` dovrebbe produrre `16`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

Dovresti chiamare `functionWithArgs` con due numeri dopo averla definita.

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
