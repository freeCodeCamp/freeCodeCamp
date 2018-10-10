---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
videoUrl: ''
localeTitle: Verifique el constructor de un objeto con instanceof
---

## Description
<section id="description"> Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una <code>instance</code> de su constructor. JavaScript ofrece una forma conveniente de verificar esto con el operador <code>instanceof</code> . <code>instanceof</code> permite comparar un objeto con un constructor, devolviendo <code>true</code> o <code>false</code> según si ese objeto fue creado con el constructor o no. Aquí hay un ejemplo: <blockquote> deja a Bird = función (nombre, color) { <br> this.name = nombre; <br> this.color = color; <br> this.numLegs = 2; <br> } <br><br> dejar cuervo = nuevo pájaro (&quot;Alexis&quot;, &quot;negro&quot;); <br><br> Cuervo de pájaro; // =&gt; verdadero </blockquote> Si se crea un objeto sin usar un constructor, <code>instanceof</code> verificará que no es una instancia de ese constructor: <blockquote> dejar canario = { <br> nombre: &quot;Mildred&quot;, <br> color amarillo&quot;, <br> NumLegs: 2 <br> }; <br><br> ejemplar canario de ave; // =&gt; falso </blockquote></section>

## Instructions
<section id="instructions"> Cree una nueva instancia del constructor de <code>House</code> , llamándola <code>myHouse</code> y pasando varias habitaciones. Luego, use <code>instanceof</code> para verificar que es una instancia de <code>House</code> . </section>

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
// solution required
```
</section>
