---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
videoUrl: ''
localeTitle: Use las propiedades de prototipo para reducir el código duplicado
---

## Description
<section id="description"> Dado que <code>numLegs</code> probablemente tendrá el mismo valor para todas las instancias de <code>Bird</code> , esencialmente tiene una variable duplicada <code>numLegs</code> dentro de cada instancia de <code>Bird</code> . Esto puede no ser un problema cuando solo hay dos instancias, pero imagínese si hay millones de instancias. Eso sería un montón de variables duplicadas. Una mejor manera es usar <code>Bird&#39;s</code> <code>prototype</code> <code>Bird&#39;s</code> . El <code>prototype</code> es un objeto que se comparte entre TODAS las instancias de <code>Bird</code> . Aquí es cómo agregar <code>numLegs</code> al <code>Bird prototype</code> : <blockquote> Bird.prototype.numLegs = 2; </blockquote> Ahora todas las instancias de <code>Bird</code> tienen la propiedad <code>numLegs</code> . <blockquote> console.log (duck.numLegs); // imprime 2 <br> console.log (canary.numLegs); // imprime 2 </blockquote> Dado que todas las instancias tienen automáticamente las propiedades en el <code>prototype</code> , piense en un <code>prototype</code> como una &quot;receta&quot; para crear objetos. Tenga en cuenta que el <code>prototype</code> para <code>duck</code> y <code>canary</code> es parte del constructor de <code>Bird</code> como <code>Bird.prototype</code> . Casi todos los objetos en JavaScript tienen una propiedad de <code>prototype</code> que forma parte de la función constructora que la creó. </section>

## Instructions
<section id="instructions"> Agrega una propiedad <code>numLegs</code> al <code>prototype</code> de <code>Dog</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>beagle</code> debería tener una propiedad <code>numLegs</code> .
    testString: 'assert(beagle.numLegs !== undefined, "<code>beagle</code> should have a <code>numLegs</code> property.");'
  - text: <code>beagle.numLegs</code> debe ser un número.
    testString: 'assert(typeof(beagle.numLegs) === "number" , "<code>beagle.numLegs</code> should be a number.");'
  - text: <code>numLegs</code> debe ser una propiedad <code>prototype</code> y no una propiedad <code>own</code> .
    testString: 'assert(beagle.hasOwnProperty("numLegs") === false, "<code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}



// Add your code above this line
let beagle = new Dog("Snoopy");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
