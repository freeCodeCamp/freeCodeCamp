---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: ''
localeTitle: Encuentra la longitud de una cuerda
---

## Description
<section id="description"> Puede encontrar la longitud de un valor de <code>String</code> escribiendo <code>.length</code> después de la variable de cadena o el literal de cadena. <code>&quot;Alan Peter&quot;.length; // 10</code> Por ejemplo, si creamos una variable <code>var firstName = &quot;Charles&quot;</code> , podríamos averiguar cuánto tiempo dura la cadena <code>&quot;Charles&quot;</code> utilizando la propiedad <code>firstName.length</code> . </section>

## Instructions
<section id="instructions"> Utilice la propiedad <code>.length</code> para contar el número de caracteres en la variable <code>lastName</code> y asignarla a <code>lastNameLength</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastNameLength</code> debe ser igual a ocho.
    testString: 'assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), "<code>lastNameLength</code> should be equal to eight.");'
  - text: 'Que debería estar recibiendo la longitud de <code>lastName</code> utilizando <code>.length</code> así: <code>lastName.length</code> .'
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
