---
id: 56bbb991ad1ed5201cd392cf
title: Schreibe wiederverwendbares JavaScript mit Funktionen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

In JavaScript können wir unseren Code in wiederverwendbare Teile aufteilen, die <dfn>Funktionen</dfn> genannt werden.

Hier ist ein Beispiel für eine Funktion:

```js
function functionName() {
  console.log("Hello World");
}
```

Du kannst diese Funktion aufrufen (call) oder <dfn>aufrufen (invoke)</dfn>, indem du ihren Namen gefolgt von Klammern benutzt, wie hier: `functionName();` Jedes Mal, wenn die Funktion aufgerufen wird, wird sie die Nachricht `Hello World` auf der Konsole ausgeben. Der gesamte Code zwischen den geschweiften Klammern wird jedes Mal ausgeführt, wenn die Funktion aufgerufen wird.

# --instructions--

<ol>
  <li>
    Erstelle eine Funktion namens <code>reusableFunction</code>, die den String <code>Hi World</code> auf der Konsole ausgibt.
  </li>
  <li>
    Rufe die Funktion auf.
  </li>
</ol>

# --hints--

`reusableFunction` sollte eine Funktion sein.

```js
assert(typeof reusableFunction === 'function');
```

Wenn `reusableFunction` aufgerufen wird, sollte sie den String `Hi World` auf der Konsole ausgeben.

```js
assert(testConsole());
```

Du solltest `reusableFunction` aufrufen, sobald sie definiert ist.

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
