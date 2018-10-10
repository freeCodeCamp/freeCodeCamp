---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: Restablecer una propiedad de constructor heredada
---

## Description
<section id="description"> Cuando un objeto hereda su <code>prototype</code> de otro objeto, sino que también hereda el <code>supertype</code> propiedad constructor &#39;s. Aquí hay un ejemplo: <blockquote> función Bird () {} <br> Bird.prototype = Object.create (Animal.prototype); <br> dejar pato = nuevo pájaro (); <br> duck.constructor // function Animal () {...} </blockquote> Pero el <code>duck</code> y todos los casos de <code>Bird</code> deberían mostrar que fueron construidos por <code>Bird</code> y no por <code>Animal</code> . Para hacerlo, puedes establecer manualmente <code>Bird&#39;s</code> propiedad <code>Bird&#39;s</code> constructor de <code>Bird</code> objeto <code>Bird</code> : <blockquote> Bird.prototype.constructor = Bird; <br> duck.constructor // function Bird () {...} </blockquote></section>

## Instructions
<section id="instructions"> <code>duck.constructor</code> el código para que <code>duck.constructor</code> y <code>beagle.constructor</code> devuelvan sus respectivos constructores. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Bird.prototype</code> debe ser una instancia de <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Bird.prototype), "<code>Bird.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: <code>duck.constructor</code> debe devolver <code>Bird</code> .
    testString: 'assert(duck.constructor === Bird, "<code>duck.constructor</code> should return <code>Bird</code>.");'
  - text: <code>Dog.prototype</code> debe ser una instancia de <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: <code>beagle.constructor</code> debe devolver el <code>Dog</code> .
    testString: 'assert(beagle.constructor === Dog, "<code>beagle.constructor</code> should return <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line



let duck = new Bird();
let beagle = new Dog();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
