---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
videoUrl: ''
localeTitle: Establecer el prototipo del niño en una instancia del padre
---

## Description
<section id="description"> En el desafío anterior, vio el primer paso para heredar el comportamiento del <code>supertype</code> (o padre) <code>Animal</code> : crear una nueva instancia de <code>Animal</code> . Este desafío cubre el siguiente paso: configurar el <code>prototype</code> del <code>subtype</code> (o niño), en este caso, <code>Bird</code> , para que sea una instancia de <code>Animal</code> . <blockquote> Bird.prototype = Object.create (Animal.prototype); </blockquote> Recuerde que el <code>prototype</code> es como la &quot;receta&quot; para crear un objeto. En cierto modo, la receta para <code>Bird</code> ahora incluye todos los &quot;ingredientes&quot; clave de <code>Animal</code> . <blockquote> dejar pato = nuevo pájaro (&quot;Donald&quot;); <br> duck.eat (); // imprime &quot;nom nom nom&quot; </blockquote> <code>duck</code> hereda todas las propiedades de los <code>Animal</code> , incluido el método de <code>eat</code> . </section>

## Instructions
<section id="instructions"> Modifica el código para que las instancias de <code>Dog</code> hereden de <code>Animal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> debe ser una instancia de <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line


let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
