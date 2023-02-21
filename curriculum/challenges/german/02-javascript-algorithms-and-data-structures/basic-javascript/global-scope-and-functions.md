---
id: 56533eb9ac21ba0edf2244be
title: Globaler Gültigkeitsbereich (Scope) und Funktionen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

In JavaScript bezieht sich <dfn>scope</dfn> auf die Sichtbarkeit von Variablen. Variablen, die außerhalb eines Funktionsblocks definiert werden, haben einen <dfn>globalen</dfn> Gültigkeitsbereich. Das heißt, sie sind überall in deinem JavaScript-Code zu sehen.

Variablen, die ohne das Schlüsselwort `let` oder `const` deklariert werden, werden automatisch in dem Bereich `global` erstellt. Dies kann an anderer Stelle in deinem Code oder beim erneuten Ausführen einer Funktion unbeabsichtigte Folgen haben. Du solltest deine Variablen immer mit `let` oder `const` deklarieren.

# --instructions--

Benutze `let` oder `const`, um eine globale Variable namens `myGlobal` außerhalb jeglicher Funktion zu deklarieren. Initialisiere sie mit einem Wert von `10`.

Weise innerhalb der Funktion `fun1`, `oopsGlobal` den Wert `5` zu, ***ohne*** die Schlüsselwörter `var`, `let` oder `const` zu verwenden.

# --hints--

`myGlobal` sollte definiert werden

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` sollte einen Wert von `10` haben

```js
assert(myGlobal === 10);
```

`myGlobal` sollte mit dem Schlüsselwort `let` oder `const` deklariert werden

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` sollte eine globale Variable sein und einen Wert von `5` haben

```js
assert(typeof oopsGlobal != 'undefined' && oopsGlobal === 5);
```

# --seed--

## --before-user-code--

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

## --after-user-code--

```js
fun1();
fun2();
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal here

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

# --solutions--

```js
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
