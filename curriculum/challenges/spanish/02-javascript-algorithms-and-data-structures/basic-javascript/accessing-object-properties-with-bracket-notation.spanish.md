---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: Acceso a las propiedades del objeto con notación de corchete
---

## Description
<section id="description"> La segunda forma de acceder a las propiedades de un objeto es la notación de corchetes ( <code>[]</code> ). Si la propiedad del objeto al que intenta acceder tiene un espacio en su nombre, deberá utilizar la notación de corchetes. Sin embargo, aún puede usar la notación de corchete en las propiedades del objeto sin espacios. Aquí hay una muestra del uso de la notación de corchetes para leer la propiedad de un objeto: <blockquote> var myObj = { <br> &quot;Nombre del espacio&quot;: &quot;Kirk&quot;, <br> &quot;Más espacio&quot;: &quot;Spock&quot;, <br> &quot;NoSpace&quot;: &quot;USS Enterprise&quot; <br> }; <br> myObj [&quot;Nombre del espacio&quot;]; // Kirk <br> myObj [&#39;Más espacio&#39;]; // Spock <br> myObj [&quot;NoSpace&quot;]; // USS Enterprise </blockquote> Tenga en cuenta que los nombres de propiedades con espacios en ellos deben estar entre comillas (simple o doble). </section>

## Instructions
<section id="instructions"> Lea los valores de las propiedades <code>&quot;an entree&quot;</code> y <code>&quot;the drink&quot;</code> de <code>testObj</code> utilizando la notación de corchetes y asignarlos a <code>entreeValue</code> y <code>drinkValue</code> respectivamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>entreeValue</code> debe ser una cadena
    testString: 'assert(typeof entreeValue === "string" , "<code>entreeValue</code> should be a string");'
  - text: El valor de <code>entreeValue</code> debe ser <code>&quot;hamburger&quot;</code>
    testString: 'assert(entreeValue === "hamburger" , "The value of <code>entreeValue</code> should be <code>"hamburger"</code>");'
  - text: <code>drinkValue</code> debe ser una cadena
    testString: 'assert(typeof drinkValue === "string" , "<code>drinkValue</code> should be a string");'
  - text: El valor de <code>drinkValue</code> debe ser <code>&quot;water&quot;</code>
    testString: 'assert(drinkValue === "water" , "The value of <code>drinkValue</code> should be <code>"water"</code>");'
  - text: Usted debe usar la notación de soporte dos veces
    testString: 'assert(code.match(/testObj\s*?\[("|")[^""]+\1\]/g).length > 1, "You should use bracket notation twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line

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
