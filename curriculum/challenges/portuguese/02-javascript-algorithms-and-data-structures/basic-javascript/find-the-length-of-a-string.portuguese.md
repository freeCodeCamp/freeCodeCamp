---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: ''
localeTitle: Encontre o comprimento de uma string
---

## Description
<section id="description"> Você pode encontrar o comprimento de um valor de <code>String</code> escrevendo <code>.length</code> após a variável de string ou string literal. <code>&quot;Alan Peter&quot;.length; // 10</code> Por exemplo, se <code>var firstName = &quot;Charles&quot;</code> uma variável <code>var firstName = &quot;Charles&quot;</code> , poderemos descobrir quanto tempo a string <code>&quot;Charles&quot;</code> está usando a propriedade <code>firstName.length</code> . </section>

## Instructions
<section id="instructions"> Use a propriedade <code>.length</code> para contar o número de caracteres na variável <code>lastName</code> e atribuí-la a <code>lastNameLength</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastNameLength</code> deve ser igual a oito.
    testString: 'assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), "<code>lastNameLength</code> should be equal to eight.");'
  - text: 'Você deve obter o comprimento de <code>lastName</code> usando <code>.length</code> como este: <code>lastName.length</code> .'
    testString: 'assert((function(){if(code.match(/\.length/gi) && code.match(/\.length/gi).length >= 2 && code.match(/var lastNameLength \= 0;/gi) && code.match(/var lastNameLength \= 0;/gi).length >= 1){return true;}else{return false;}})(), "You should be getting the length of <code>lastName</code> by using <code>.length</code> like this: <code>lastName.length</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName;

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
