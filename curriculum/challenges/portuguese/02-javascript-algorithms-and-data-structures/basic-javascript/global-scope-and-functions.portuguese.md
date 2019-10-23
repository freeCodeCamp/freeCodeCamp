---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: Âmbito global e funções
---

## Description
<section id="description"> Em JavaScript, o <dfn>escopo</dfn> se refere à visibilidade das variáveis. Variáveis ​​definidas fora de um bloco de funções possuem escopo <dfn>Global</dfn> . Isso significa que eles podem ser vistos em qualquer lugar no seu código JavaScript. As variáveis ​​que são usadas sem a palavra-chave <code>var</code> são criadas automaticamente no escopo <code>global</code> . Isso pode criar consequências indesejadas em outro lugar no seu código ou ao executar uma função novamente. Você deve sempre declarar suas variáveis ​​com <code>var</code> . </section>

## Instructions
<section id="instructions"> Usando <code>var</code> , declare uma variável <code>global</code> <code>myGlobal</code> fora de qualquer função. Inicialize com um valor de <code>10</code> . Dentro da função <code>fun1</code> , atribua <code>5</code> a <code>oopsGlobal</code> <strong><em>sem</em></strong> usar a palavra-chave <code>var</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myGlobal</code> deve ser definido
    testString: 'assert(typeof myGlobal != "undefined", "<code>myGlobal</code> should be defined");'
  - text: <code>myGlobal</code> deve ter um valor de <code>10</code>
    testString: 'assert(myGlobal === 10, "<code>myGlobal</code> should have a value of <code>10</code>");'
  - text: <code>myGlobal</code> deve ser declarado usando a palavra-chave <code>var</code>
    testString: 'assert(/var\s+myGlobal/.test(code), "<code>myGlobal</code> should be declared using the <code>var</code> keyword");'
  - text: <code>oopsGlobal</code> deve ser uma variável global e ter um valor de <code>5</code>
    testString: 'assert(typeof oopsGlobal != "undefined" && oopsGlobal === 5, "<code>oopsGlobal</code> should be a global variable and have a value of <code>5</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declare your variable here


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
var oopsGlobal;
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
