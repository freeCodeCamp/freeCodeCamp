---
id: 56bbb991ad1ed5201cd392cf
title: Escrever JavaScript reutilizável com funções
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

Em JavaScript, nós podemos dividir nosso código em partes reutilizáveis chamadas de <dfn>funções</dfn>.

Aqui está um exemplo de uma função:

```js
function functionName() {
  console.log("Hello World");
}
```

Você pode chamar ou <dfn>invocar</dfn> essa função ao usar seu nome seguido de parênteses, da seguinte forma: `functionName();` Cada vez que a função é chamada, imprimirá no console a mensagem `Hello World`. Todo o código entre as chaves será executado toda vez que uma função for chamada.

# --instructions--

<ol>
  <li>
    Crie uma função chamada <code>reusableFunction</code> que imprime a string <code>Hi World</code> no console.
  </li>
  <li>
    Chame a função.
  </li>
</ol>

# --hints--

`reusableFunction` deve ser uma função.

```js
assert(typeof reusableFunction === 'function');
```

Se `reusableFunction` é chamada, deve exibir no console a string `Hi World`.

```js
assert(testConsole());
```

Você deve chamar `reusableFunction` uma vez que for definida.

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
