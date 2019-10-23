---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
videoUrl: ''
localeTitle: Passando Valores para Funções com Argumentos
---

## Description
<section id="description"> <dfn>Parâmetros</dfn> são variáveis ​​que atuam como espaços reservados para os valores que devem ser inseridos em uma função quando ela é chamada. Quando uma função é definida, ela é tipicamente definida junto com um ou mais parâmetros. Os valores reais que são inseridos (ou <dfn>&quot;passados&quot;</dfn> ) em uma função quando são chamados são conhecidos como <dfn>argumentos</dfn> . Aqui está uma função com dois parâmetros, <code>param1</code> e <code>param2</code> : <blockquote> function testFun (param1, param2) { <br> console.log (param1, param2); <br> } </blockquote> Então podemos chamar <code>testFun</code> : <code>testFun(&quot;Hello&quot;, &quot;World&quot;);</code> Nós passamos dois argumentos, <code>&quot;Hello&quot;</code> e <code>&quot;World&quot;</code> . Dentro da função, <code>param1</code> será igual a &quot;Hello&quot; e <code>param2</code> será igual a &quot;World&quot;. Note que você poderia chamar <code>testFun</code> novamente com diferentes argumentos e os parâmetros assumiriam o valor dos novos argumentos. </section>

## Instructions
<section id="instructions"><ol><li> Crie uma função chamada <code>functionWithArgs</code> que aceita dois argumentos e produz sua soma no console dev. </li><li> Chame a função com dois números como argumentos. </li></ol></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>functionWithArgs</code> deve ser uma função
    testString: 'assert(typeof functionWithArgs === "function", "<code>functionWithArgs</code> should be a function");'
  - text: '<code>functionWithArgs(1,2)</code> deve produzir <code>3</code>'
    testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(1,2); uncapture(); } assert(logOutput == 3, "<code>functionWithArgs(1,2)</code> should output <code>3</code>");'
  - text: '<code>functionWithArgs(7,9)</code> deve produzir <code>16</code>'
    testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(7,9); uncapture(); } assert(logOutput == 16, "<code>functionWithArgs(7,9)</code> should output <code>16</code>");'
  - text: Chame <code>functionWithArgs</code> com dois números depois de defini-lo.
    testString: 'assert(/^\s*functionWithArgs\s*\(\s*\d+\s*,\s*\d+\s*\)\s*;/m.test(code), "Call <code>functionWithArgs</code> with two numbers after you define it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

```

</div>

### Before Test
<div id='js-setup'>

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

</div>

### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
