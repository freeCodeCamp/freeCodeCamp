---
id: 56533eb9ac21ba0edf2244b9
title: Constructing Strings with Variables
localeTitle: Construyendo cuerdas con variables
challengeType: 1
---

## Description
<section id='description'> 
A veces necesitarás construir una cadena, al estilo de <a href="https://en.wikipedia.org/wiki/Mad_Libs" target="_blank">Mad Libs</a> . Al utilizar el operador de concatenación ( <code>+</code> ), puede insertar una o más variables en una cadena que está creando. 
</section>

## Instructions
<section id='instructions'> 
Establezca <code>myName</code> en una cadena igual a su nombre y compile <code>myStr</code> con <code>myName</code> entre las cadenas <code>&quot;My name is &quot;</code> y <code>&quot; and I am well!&quot;</code> 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myName</code> debe establecerse en una cadena de al menos 3 caracteres
    testString: 'assert(typeof myName !== "undefined" && myName.length > 2, "<code>myName</code> should be set to a string at least 3 characters long");'
  - text: Usa dos operadores <code>+</code> para construir <code>myStr</code> con <code>myName</code> dentro de él
    testString: 'assert(code.match(/[""]\s*\+\s*myName\s*\+\s*[""]/g).length > 0, "Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName;
var myStr;


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
var myName = "Bob";
var myStr = "My name is " + myName + " and I am well!";
```

</section>
