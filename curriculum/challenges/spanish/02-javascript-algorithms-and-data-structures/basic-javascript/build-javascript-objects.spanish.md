---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
localeTitle: Construir objetos de JavaScript
challengeType: 1
---

## Description
<section id='description'> 
Es posible que hayas escuchado el término <code>object</code> antes. 
objetos son similares a las <code>arrays</code> , excepto que en lugar de utilizar índices para acceder y modificar sus datos, puede acceder a los datos en objetos a través de lo que se denomina <code>properties</code> . 
objetos son útiles para almacenar datos de manera estructurada y pueden representar objetos del mundo real, como un gato. 
Aquí hay una muestra de un objeto de gato: 
<blockquote>var cat = {<br>&nbsp;&nbsp;"name": "Whiskers",<br>&nbsp;&nbsp;"legs": 4,<br>&nbsp;&nbsp;"tails": 1,<br>&nbsp;&nbsp;"enemies": ["Water", "Dogs"]<br>};</blockquote> 
En este ejemplo, todas las propiedades se almacenan como cadenas, como <code>&quot;name&quot;</code> , <code>&quot;legs&quot;</code> y <code>&quot;tails&quot;</code> . Sin embargo, también puede utilizar los números como propiedades. Incluso puede omitir las comillas para las propiedades de cadena de una sola palabra, de la siguiente manera: 
<blockquote>var anotherObject = {<br>&nbsp;&nbsp;make: "Ford",<br>&nbsp;&nbsp;5: "five",<br>&nbsp;&nbsp;"model": "focus"<br>};</blockquote> 
Sin embargo, si su objeto tiene propiedades que no son de cadena, JavaScript las encasillará automáticamente como cadenas. 
</section>

## Instructions
<section id='instructions'> 
Haz un objeto que represente un perro llamado <code>myDog</code> que contenga las propiedades <code>&quot;name&quot;</code> (una cadena), <code>&quot;legs&quot;</code> , <code>&quot;tails&quot;</code> y <code>&quot;friends&quot;</code> . 
Puede establecer estas propiedades de objeto en los valores que desee, siempre que <code>&quot;name&quot;</code> sea ​​una cadena, <code>&quot;legs&quot;</code> y <code>&quot;tails&quot;</code> sean números, y <code>&quot;friends&quot;</code> es una matriz. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDog</code> debe contener el <code>name</code> la propiedad y debe ser una <code>string</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("name") && z.name !== undefined && typeof z.name === "string"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>name</code> and it should be a <code>string</code>.");'
  - text: <code>myDog</code> debe contener las <code>legs</code> propiedad y debe ser un <code>number</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("legs") && z.legs !== undefined && typeof z.legs === "number"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>legs</code> and it should be a <code>number</code>.");'
  - text: <code>myDog</code> debe contener las <code>tails</code> propiedad y debe ser un <code>number</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("tails") && z.tails !== undefined && typeof z.tails === "number"){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>tails</code> and it should be a <code>number</code>.");'
  - text: <code>myDog</code> debe contener los <code>friends</code> la propiedad y debe ser una <code>array</code> .
    testString: 'assert((function(z){if(z.hasOwnProperty("friends") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog), "<code>myDog</code> should contain the property <code>friends</code> and it should be an <code>array</code>.");'
  - text: <code>myDog</code> solo debe contener todas las propiedades dadas.
    testString: 'assert((function(z){return Object.keys(z).length === 4;})(myDog), "<code>myDog</code> should only contain all the given properties.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {




};
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
var myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

</section>
