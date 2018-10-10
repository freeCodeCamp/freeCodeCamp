---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: ''
localeTitle: Almacene múltiples valores en una variable utilizando matrices de JavaScript
---

## Description
<section id="description"> Con las variables de <code>array</code> JavaScript, podemos almacenar varios datos en un solo lugar. Inicia una declaración de matriz con un corchete de apertura, finalícela con un corchete de cierre y ponga una coma entre cada entrada, como esto: <code>var sandwich = [&quot;peanut butter&quot;, &quot;jelly&quot;, &quot;bread&quot;]</code> . </section>

## Instructions
<section id="instructions"> Modifique la nueva matriz <code>myArray</code> para que contenga tanto una <code>string</code> como un <code>number</code> (en ese orden). <strong>Insinuación</strong> <br> Consulte el código de ejemplo en el editor de texto si se atasca. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> debería ser una <code>array</code> .
    testString: 'assert(typeof myArray == "object", "<code>myArray</code> should be an <code>array</code>.");'
  - text: El primer elemento en <code>myArray</code> debe ser una <code>string</code> .
    testString: 'assert(typeof myArray[0] !== "undefined" && typeof myArray[0] == "string", "The first item in <code>myArray</code> should be a <code>string</code>.");'
  - text: El segundo elemento en <code>myArray</code> debe ser un <code>number</code> .
    testString: 'assert(typeof myArray[1] !== "undefined" && typeof myArray[1] == "number", "The second item in <code>myArray</code> should be a <code>number</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];

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
