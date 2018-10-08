---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
localeTitle: Verifique el constructor de un objeto con instanceof
challengeType: 1
---

## Description
<section id='description'> 
Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una <code>instance</code> de su constructor. JavaScript ofrece una forma conveniente de verificar esto con el operador <code>instanceof</code> . <code>instanceof</code> permite comparar un objeto con un constructor, devolviendo <code>true</code> o <code>false</code> según si ese objeto fue creado con el constructor o no. Aquí hay un ejemplo: 
<blockquote>let Bird = function(name, color) {<br>&nbsp;&nbsp;this.name = name;<br>&nbsp;&nbsp;this.color = color;<br>&nbsp;&nbsp;this.numLegs = 2;<br>}<br><br>let crow = new Bird("Alexis", "black");<br><br>crow instanceof Bird; // => true</blockquote> 
Si un objeto se crea sin usar un constructor, <code>instanceof</code> verificará que no es una instancia de ese constructor: 
<blockquote>let canary = {<br>&nbsp;&nbsp;name: "Mildred",<br>&nbsp;&nbsp;color: "Yellow",<br>&nbsp;&nbsp;numLegs: 2<br>};<br><br>canary instanceof Bird; // => false</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Crear una nueva instancia del constructor de la <code>House</code> , llamándola <code>myHouse</code> y pasando varias habitaciones. Luego, use <code>instanceof</code> para verificar que es una instancia de <code>House</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myHouse</code> debería tener un atributo <code>numBedrooms</code> establecido en un número.
    testString: 'assert(typeof myHouse.numBedrooms === "number", "<code>myHouse</code> should have a <code>numBedrooms</code> attribute set to a number.");'
  - text: Asegúrese de verificar que <code>myHouse</code> es una instancia de <code>House</code> usa el operador <code>instanceof</code> .
    testString: 'assert(/myHouse\s*instanceof\s*House/.test(code), "Be sure to verify that <code>myHouse</code> is an instance of <code>House</code> using the <code>instanceof</code> operator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line



```

</div>



</section>

## Solution
<section id='solution'>


```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```

</section>
