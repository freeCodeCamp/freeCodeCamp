---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: Escopo Local e Funções
---

## Description
<section id="description"> Variáveis ​​que são declaradas dentro de uma função, assim como os parâmetros da função, possuem escopo <dfn>local</dfn> . Isso significa que eles só são visíveis dentro dessa função. Aqui está uma função <code>myTest</code> com uma variável local chamada <code>loc</code> . <blockquote> function myTest () { <br> var loc = &quot;foo&quot;; <br> console.log (loc); <br> } <br> meu teste(); // registra &quot;foo&quot; <br> console.log (loc); // loc não está definido </blockquote> <code>loc</code> não está definido fora da função. </section>

## Instructions
<section id="instructions"> Declare uma variável local <code>myVar</code> dentro de <code>myLocalScope</code> . Execute os testes e siga as instruções comentadas no editor. <strong>Sugestão</strong> <br> Atualizando a página pode ajudar se você ficar preso. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nenhuma variável <code>myVar</code> global
    testString: 'assert(typeof myVar === "undefined", "No global <code>myVar</code> variable");'
  - text: Adicione uma variável <code>myVar</code> local
    testString: 'assert(/var\s+myVar/.test(code), "Add a local <code>myVar</code> variable");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

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
