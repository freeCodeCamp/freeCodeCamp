---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: ''
localeTitle: Anexando variáveis ​​a seqüências de caracteres
---

## Description
<section id="description"> Assim como podemos construir uma string sobre várias linhas a partir de <dfn>literais</dfn> de string, também podemos anexar variáveis ​​a uma string usando o operador mais igual ( <code>+=</code> ). </section>

## Instructions
<section id="instructions"> Defina <code>someAdjective</code> e anexe-o ao <code>myStr</code> usando o operador <code>+=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code> deve ser definido para uma string com pelo menos 3 caracteres
    testString: 'assert(typeof someAdjective !== "undefined" && someAdjective.length > 2, "<code>someAdjective</code> should be set to a string at least 3 characters long");'
  - text: Anexar <code>someAdjective</code> ao <code>myStr</code> usando o operador <code>+=</code>
    testString: 'assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0, "Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective;
var myStr = "Learning to code is ";

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
