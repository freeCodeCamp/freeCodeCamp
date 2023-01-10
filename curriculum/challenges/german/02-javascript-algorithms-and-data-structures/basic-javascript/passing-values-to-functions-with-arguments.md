---
id: 56533eb9ac21ba0edf2244bd
title: Übergabe von Werten an Funktionen mit Argumenten
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Parameter</dfn> sind Variablen, die als Platzhalter für die Werte dienen, die an eine Funktion übergeben werden sollen, wenn sie aufgerufen wird. Wenn eine Funktion definiert wird, wird sie typischerweise zusammen mit einem oder mehreren Parametern definiert. Die tatsächlichen Werte, die in eine Funktion eingegeben (oder an sie <dfn>"übergeben"</dfn> werden), wenn sie aufgerufen wird, nennt man <dfn>Argumente</dfn>.

Hier ist eine Funktion mit zwei Parametern, `param1` und `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Dann können wir `testFun` wie folgt aufrufen: `testFun("Hello", "World");`. Wir haben zwei String-Argumente übergeben, `Hello` und `World`. Innerhalb der Funktion wird `param1` gleich dem String `Hello` und `param2` wird gleich dem String `World`. Beachte, dass du `testFun` erneut mit anderen Argumenten aufrufen könntest und die Parameter den Wert der neuen Argumente annehmen würden.

# --instructions--

<ol><li>Erstelle eine Funktion namens <code>functionWithArgs</code>, die zwei Argumente akzeptiert und deren Summe auf der Konsole ausgibt.</li><li>Rufe die Funktion mit zwei Zahlen als Argumente auf.</li></ol>

# --hints--

`functionWithArgs` sollte eine Funktion sein.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` sollte `3` ausgeben.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` sollte `16` ausgeben.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

Du solltest die `functionWithArgs` mit zwei Zahlen aufrufen, nachdem du sie definiert hast.

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
