---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
localeTitle: Acceso a las propiedades del objeto con notación de puntos
challengeType: 1
---

## Description
<section id='description'> 
Hay dos formas de acceder a las propiedades de un objeto: notación de puntos ( <code>.</code> ) Y notación de corchetes ( <code>[]</code> ), similar a una matriz. 
notación de puntos es lo que usa cuando conoce el nombre de la propiedad a la que intenta acceder con anticipación. 
Aquí hay una muestra de cómo usar la notación de puntos ( <code>.</code> ) Para leer la propiedad de un objeto: 
<blockquote>var myObj = {<br>&nbsp;&nbsp;prop1: "val1",<br>&nbsp;&nbsp;prop2: "val2"<br>};<br>var prop1val = myObj.prop1; // val1<br>var prop2val = myObj.prop2; // val2</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Lea los valores de propiedad de <code>testObj</code> usando la notación de puntos. Establezca la variable <code>hatValue</code> igual al <code>hat</code> propiedad del objeto y establezca la variable <code>shirtValue</code> igual a la <code>shirt</code> propiedad del objeto. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hatValue</code> debe ser una cadena
    testString: 'assert(typeof hatValue === "string" , "<code>hatValue</code> should be a string");'
  - text: El valor de <code>hatValue</code> debe ser <code>&quot;ballcap&quot;</code>
    testString: 'assert(hatValue === "ballcap" , "The value of <code>hatValue</code> should be <code>"ballcap"</code>");'
  - text: <code>shirtValue</code> debe ser una cadena
    testString: 'assert(typeof shirtValue === "string" , "<code>shirtValue</code> should be a string");'
  - text: El valor de <code>shirtValue</code> debe ser <code>&quot;jersey&quot;</code>
    testString: 'assert(shirtValue === "jersey" , "The value of <code>shirtValue</code> should be <code>"jersey"</code>");'
  - text: Deberías usar la notación de puntos dos veces.
    testString: 'assert(code.match(/testObj\.\w+/g).length > 1, "You should use dot notation twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line
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
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

</section>
