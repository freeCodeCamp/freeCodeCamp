---
id: 56533eb9ac21ba0edf2244be
title: Ámbito global y funciones
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

En JavaScript, el <dfn>ámbito</dfn> se refiere a la visibilidad de las variables. Las variables definidas fuera de un bloque de función tienen un ámbito <dfn>Global</dfn>. Esto significa que pueden ser observadas desde cualquier lugar en tu código JavaScript.

Las variables que se declaran sin las palabras clave `let` o `const` se crean automáticamente en el ámbito `global`. Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una función. Siempre debes declarar tus variables con `let` o `const`.

# --instructions--

Usando `let` o `const`, declara una variable global llamada `myGlobal` fuera de cualquier función. Inicialízala con un valor de `10`.

Dentro de la función `fun1`, asigna `5` a `oopsGlobal` ***sin usar*** las palabras clave `var`, `let` o `const`.

# --hints--

`myGlobal` debe ser definida

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` debe tener un valor de `10`

```js
assert(myGlobal === 10);
```

`myGlobal` debe declararse usando las palabras clave `let` o `const`

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` debe ser una variable global y tener un valor de `5`

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
