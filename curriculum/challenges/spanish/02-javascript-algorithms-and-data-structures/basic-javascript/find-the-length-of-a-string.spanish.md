---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
localeTitle: Encuentra la longitud de una cuerda
challengeType: 1
---

## Description
<section id='description'> 
Puede encontrar la longitud de un valor de <code>String</code> escribiendo <code>.length</code> después de la variable de cadena o el literal de cadena. 
<code>&quot;Alan Peter&quot;.length; // 10</code> 
Por ejemplo, si creamos una variable <code>var firstName = &quot;Charles&quot;</code> , podríamos averiguar cuánto tiempo dura la cadena <code>&quot;Charles&quot;</code> utilizando la propiedad <code>firstName.length</code> . 
</section>

## Instructions
<section id='instructions'> 
Use la propiedad <code>.length</code> para contar el número de caracteres en la variable <code>lastName</code> y asignarla a <code>lastNameLength</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>lastNameLength</code> debe ser igual a ocho.
    testString: 'assert((function(){if(typeof lastNameLength !== "undefined" && typeof lastNameLength === "number" && lastNameLength === 8){return true;}else{return false;}})(), "<code>lastNameLength</code> should be equal to eight.");'
  - text: &#39;Deberías obtener la longitud del <code>lastName</code> al usar <code>.length</code> esta manera: <code>lastName.length</code> &#39;.
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
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```

</section>
