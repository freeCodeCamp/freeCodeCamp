---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: ''
localeTitle: Declarar Variáveis ​​de Cadeia
---

## Description
<section id="description"> Anteriormente, usamos o código <code>var myName = &quot;your name&quot;;</code> <code>&quot;your name&quot;</code> é chamado <dfn>literal de</dfn> <dfn>string</dfn> . É uma string porque é uma série de zero ou mais caracteres entre aspas simples ou duplas. </section>

## Instructions
<section id="instructions"> Crie duas novas variáveis ​​de <code>string</code> : <code>myFirstName</code> e <code>myLastName</code> e atribua a elas os valores de seu primeiro e último nome, respectivamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myFirstName</code> deve ser uma string com pelo menos um caractere.
    testString: 'assert((function(){if(typeof myFirstName !== "undefined" && typeof myFirstName === "string" && myFirstName.length > 0){return true;}else{return false;}})(), "<code>myFirstName</code> should be a string with at least one character in it.");'
  - text: <code>myLastName</code> deve ser uma string com pelo menos um caractere.
    testString: 'assert((function(){if(typeof myLastName !== "undefined" && typeof myLastName === "string" && myLastName.length > 0){return true;}else{return false;}})(), "<code>myLastName</code> should be a string with at least one character in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

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
