---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: ''
localeTitle: Escapando citações literais em cordas
---

## Description
<section id="description"> Quando você está definindo uma string, você deve começar e terminar com uma aspa simples ou dupla. O que acontece quando você precisa de uma citação literal: <code>&quot;</code> ou <code>&#39;</code> ? Interior de sua corda Em JavaScript, você pode <dfn>escapar de</dfn> uma citação de considerá-lo como um fim de citação corda, colocando uma <dfn>barra invertida</dfn> ( <code>\</code> ) em frente à cotação. <code>var sampleStr = &quot;Alan said, \&quot;Peter is learning JavaScript\&quot;.&quot;;</code> Isso sinaliza para o JavaScript que a seguinte citação não é o fim da string, mas deve aparecer dentro da string. Então, se você fosse imprimir isso no console, você teria: <code>Alan said, &quot;Peter is learning JavaScript&quot;.</code> </section>

## Instructions
<section id="instructions"> Use <dfn>barras invertidas</dfn> para atribuir uma string à variável <code>myStr</code> , de modo que, se você fosse imprimi-la no console, veria: <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve usar duas aspas duplas ( <code>&quot;</code> ) e quatro aspas duplas com escape ( <code>\&quot;</code> ).
    testString: 'assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2, "You should use two double quotes (<code>&quot;</code>) and four escaped double quotes (<code>&#92;&quot;</code>).");'
  - text: 'Variável myStr deve conter a string: <code>I am a &quot;double quoted&quot; string inside &quot;double quotes&quot;.</code>'
    testString: 'assert(myStr === "I am a \"double quoted\" string inside \"double quotes\".", "Variable myStr should contain the string: <code>I am a "double quoted" string inside "double quotes".</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr = ""; // Change this line

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
