---
id: 56533eb9ac21ba0edf2244ed
title: Appending Variables to Strings
challengeType: 1
videoUrl: ''
localeTitle: Anexando Variables a las Cadenas
---

## Description
<section id="description"> Del mismo modo que podemos construir una cadena sobre varias líneas a partir de <dfn>literales</dfn> de cadena, también podemos agregar variables a una cadena utilizando el operador más es igual a ( <code>+=</code> ). </section>

## Instructions
<section id="instructions"> Configure <code>someAdjective</code> y <code>someAdjective</code> a <code>myStr</code> usando el operador <code>+=</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code> debe establecerse en una cadena de al menos 3 caracteres de largo
    testString: 'assert(typeof someAdjective !== "undefined" && someAdjective.length > 2, "<code>someAdjective</code> should be set to a string at least 3 characters long");'
  - text: <code>someAdjective</code> de <code>someAdjective</code> a <code>myStr</code> usando el operador <code>+=</code>
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
