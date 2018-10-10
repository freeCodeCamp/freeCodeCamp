---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
videoUrl: ''
localeTitle: Heredar los comportamientos de un supertipo
---

## Description
<section id="description"> En el desafío anterior, creaste un <code>supertype</code> llamado <code>Animal</code> que definía comportamientos compartidos por todos los animales: <blockquote> función animal () {} <br> Animal.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;); <br> }; </blockquote> Este y el próximo desafío abarcarán cómo reutilizar <code>Animal&#39;s</code> métodos <code>Animal&#39;s</code> dentro de <code>Bird</code> y <code>Dog</code> sin volver a definirlos. Utiliza una técnica llamada <code>inheritance</code> . Este desafío cubre el primer paso: crear una instancia del <code>supertype</code> (o padre). Ya conoces una forma de crear una instancia de <code>Animal</code> utilizando el <code>new</code> operador: <blockquote> dejar animal = nuevo Animal (); </blockquote> Existen algunas desventajas al usar esta sintaxis para la <code>inheritance</code> , que son demasiado complejas para el alcance de este desafío. En cambio, aquí hay un enfoque alternativo sin esas desventajas: <blockquote> dejar animal = Object.create (Animal.prototype); </blockquote> <code>Object.create(obj)</code> crea un nuevo objeto y establece <code>obj</code> como el <code>prototype</code> del nuevo objeto. Recuerde que el <code>prototype</code> es como la &quot;receta&quot; para crear un objeto. Al configurar el <code>prototype</code> de <code>animal</code> para que sea <code>Animal&#39;s</code> <code>prototype</code> <code>Animal&#39;s</code> , le está dando efectivamente a la instancia <code>animal</code> la misma &quot;receta&quot; que cualquier otra instancia de <code>Animal</code> . <blockquote> animal.eat (); // imprime &quot;nom nom nom&quot; <br> animal ejemplo de animal; // =&gt; verdadero </blockquote></section>

## Instructions
<section id="instructions"> Use <code>Object.create</code> para hacer dos instancias de <code>Animal</code> llamado <code>duck</code> y <code>beagle</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La variable <code>duck</code> debe estar definida.
    testString: 'assert(typeof duck !== "undefined", "The <code>duck</code> variable should be defined.");'
  - text: La variable <code>beagle</code> debe estar definida.
    testString: 'assert(typeof beagle !== "undefined", "The <code>beagle</code> variable should be defined.");'
  - text: <code>duck</code> debe tener un <code>prototype</code> de <code>Animal</code> .
    testString: 'assert(duck instanceof Animal, "<code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.");'
  - text: <code>beagle</code> debe tener un <code>prototype</code> de <code>Animal</code> .
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.");'

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

// Add your code below this line

let duck; // Change this line
let beagle; // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
