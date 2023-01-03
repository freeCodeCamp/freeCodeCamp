---
id: 56533eb9ac21ba0edf2244be
title: Conhecer o escopo global e funções
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

Em JavaScript, <dfn>escopo</dfn> refere-se à visibilidade de variáveis. Variáveis que são definidas fora de um bloco de função tem o escopo <dfn>Global</dfn>. Isso significa que elas podem ser vistas em qualquer lugar no seu código JavaScript.

Variáveis que são declaradas sem a palavra-chave `let` ou `const` são automaticamente criadas no escopo `global`. Isso pode criar consequências indesejadas em outro lugar no seu código ou quando executar uma função novamente. Você sempre deve declarar suas variáveis com `let` ou `const`.

# --instructions--

Usando `let` ou `const`, declare uma variável global chamada `myGlobal` fora de qualquer função. Inicialize-a com o valor de `10`.

Dentro da função `fun1`, atribua `5` para `oopsGlobal` ***sem*** usar as palavras-chave `var`, `let` ou `const`.

# --hints--

`myGlobal` deve estar definida

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` deve ter o valor de `10`

```js
assert(myGlobal === 10);
```

`myGlobal` deve ser declarada usando a palavra-chave `let` ou `const`

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` deve ser uma variável global e ter o valor de `5`

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
