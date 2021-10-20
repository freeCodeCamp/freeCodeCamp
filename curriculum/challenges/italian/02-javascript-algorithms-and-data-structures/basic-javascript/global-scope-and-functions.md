---
id: 56533eb9ac21ba0edf2244be
title: Ambito di applicazione globale e funzioni
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

In JavaScript, lo <dfn>scope</dfn> (campo di applicazione o ambito di visibilità) si riferisce alla visibilità delle variabili. Le variabili che sono definite al di fuori del blocco di una funzione hanno un campo di applicazione <dfn>globale</dfn>. Questo significa che possono essere viste ovunque nel tuo codice JavaScript.

Le variabili che vengono dichiarate senza la parola chiave `var` vengono create automaticamente nell'ambito `global`. Questo può dare delle conseguenze indesiderate da un'altra parte nel tuo codice o quando si esegue nuovamente la funzione. Dovresti sempre dichiarare le tue variabili con `var`.

# --instructions--

Usando `var`, dichiara una variabile globale denominata `myGlobal` al di fuori di qualsiasi funzione. Inizializzala con un valore di `10`.

All'interno della funzione `fun1`, assegna `5` a `oopsGlobal` ***senza*** utilizzare la parola chiave `var`.

# --hints--

`myGlobal` dovrebbe essere definita

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` dovrebbe avere un valore di `10`

```js
assert(myGlobal === 10);
```

`myGlobal` dovrebbe essere dichiarata usando la parola chiave `var`

```js
assert(/var\s+myGlobal/.test(code));
```

`oopsGlobal` dovrebbe essere una variabile globale e avere un valore di `5`

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

# --solutions--

```js
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

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
