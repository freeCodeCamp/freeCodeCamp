---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
videoUrl: ''
localeTitle: Usa la herencia para que no te repitas
---

## Description
<section id="description"> Hay un principio en la programación llamado <code>Don&#39;t Repeat Yourself (DRY)</code> . La razón por la cual el código repetido es un problema es porque cualquier cambio requiere un código de corrección en varios lugares. Esto generalmente significa más trabajo para los programadores y más espacio para errores. Observe en el siguiente ejemplo que <code>Bird</code> y <code>Dog</code> comparten el método de <code>describe</code> : <blockquote> Bird.prototype = { <br> constructor: pájaro, <br> describe: function () { <br> console.log (&quot;Mi nombre es&quot; + this.name); <br> } <br> }; <br><br> Dog.prototype = { <br> constructor: perro, <br> describe: function () { <br> console.log (&quot;Mi nombre es&quot; + this.name); <br> } <br> }; </blockquote> El método <code>describe</code> se repite en dos lugares. El código se puede editar para seguir el principio <code>DRY</code> creando un <code>supertype</code> (o padre) llamado <code>Animal</code> : <blockquote> función Animal () {}; <br><br> Animal.prototype = { <br> constructor: animal, <br> describe: function () { <br> console.log (&quot;Mi nombre es&quot; + this.name); <br> } <br> }; </blockquote> Ya que <code>Animal</code> incluye el método de <code>describe</code> , puedes eliminarlo de <code>Bird</code> and <code>Dog</code> : <blockquote> Bird.prototype = { <br> constructor: pájaro <br> }; <br><br> Dog.prototype = { <br> constructor: perro <br> }; </blockquote></section>

## Instructions
<section id="instructions"> El método de <code>eat</code> se repite tanto en el <code>Cat</code> como en el <code>Bear</code> . Edite el código en el espíritu de <code>DRY</code> moviendo el método de <code>eat</code> al <code>supertype</code> <code>Animal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Animal.prototype</code> debe tener la propiedad <code>eat</code> .
    testString: 'assert(Animal.prototype.hasOwnProperty("eat"), "<code>Animal.prototype</code> should have the <code>eat</code> property.");'
  - text: <code>Bear.prototype</code> no debe tener la propiedad <code>eat</code> .
    testString: 'assert(!(Bear.prototype.hasOwnProperty("eat")), "<code>Bear.prototype</code> should not have the <code>eat</code> property.");'
  - text: <code>Cat.prototype</code> no debe tener la propiedad <code>eat</code> .
    testString: 'assert(!(Cat.prototype.hasOwnProperty("eat")), "<code>Cat.prototype</code> should not have the <code>eat</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
