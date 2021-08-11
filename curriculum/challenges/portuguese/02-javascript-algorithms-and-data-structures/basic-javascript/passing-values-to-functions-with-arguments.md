---
id: 56533eb9ac21ba0edf2244bd
title: Passar valores para funções com argumentos
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Parâmetros</dfn> são variáveis que atuam como espaços reservados para os valores que são passados para uma função, quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros. Os valores reais que são entradas de (ou <dfn>"passadas"</dfn> para) uma função quando ela é chamada são conhecidos como <dfn>argumentos</dfn>.

Aqui está uma função com dois parâmetros, `param1` e `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Então podemos chamar o `testFun` dessa forma: `testFun("Hello", "World");`. Passamos dois argumentos do tipo string, `Hello` e `World`. Dentro da função, `param1` será igual à string `Hello` e `param2` será igual à string `World`. Note que você poderia chamar o `testFun` novamente com diferentes argumentos e os parâmetros assumiriam o valor dos novos argumentos.

# --instructions--

<ol><li>Crie uma função chamada <code>functionWithArgs</code> que aceita dois argumentos e exibe seus valores no console de desenvolvimento.</li><li>Chame a função com dois números como argumentos.</li></ol>

# --hints--

`functionWithArgs` deve ser uma função.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` deve exibir no console `3`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` deve exibir no console `16`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

Você deve chamar a função `functionWithArgs` com dois números depois de defini-la.

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
