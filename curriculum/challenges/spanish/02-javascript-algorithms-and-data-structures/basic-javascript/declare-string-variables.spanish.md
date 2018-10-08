---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
localeTitle: Declarar variables de cadena
challengeType: 1
---

## Description
<section id='description'> 
Anteriormente hemos utilizado el código 
<code>var myName = &quot;your name&quot;;</code> 
<code>&quot;your name&quot;</code> se llama una <dfn>cadena</dfn> <dfn>literal</dfn> . Es una cadena porque es una serie de cero o más caracteres entre comillas simples o dobles. 
</section>

## Instructions
<section id='instructions'> 
Crea dos nuevas variables de <code>string</code> : <code>myFirstName</code> y <code>myLastName</code> y asigna los valores de tu nombre y apellido, respectivamente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myFirstName</code> debe ser una cadena con al menos un carácter.
    testString: 'assert((function(){if(typeof myFirstName !== "undefined" && typeof myFirstName === "string" && myFirstName.length > 0){return true;}else{return false;}})(), "<code>myFirstName</code> should be a string with at least one character in it.");'
  - text: <code>myLastName</code> debe ser una cadena con al menos un carácter.
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
var myFirstName = "Alan";
var myLastName = "Turing";
```

</section>
