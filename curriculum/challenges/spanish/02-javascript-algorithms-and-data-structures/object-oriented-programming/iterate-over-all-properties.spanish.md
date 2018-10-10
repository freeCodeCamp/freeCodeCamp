---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
videoUrl: ''
localeTitle: Iterar sobre todas las propiedades
---

## Description
<section id="description"> Ahora ha visto dos tipos de propiedades: propiedades <code>own</code> y propiedades <code>prototype</code> . <code>Own</code> propiedades <code>Own</code> se definen directamente en la instancia del objeto en sí. Y las propiedades del <code>prototype</code> se definen en el <code>prototype</code> . <blockquote> función Bird (nombre) { <br> this.name = nombre; //propia propiedad <br> } <br><br> Bird.prototype.numLegs = 2; // propiedad prototipo <br><br> dejar pato = nuevo pájaro (&quot;Donald&quot;); </blockquote> Aquí es cómo se agregan las propiedades <code>own</code> <code>duck</code> a la matriz <code>ownProps</code> y las propiedades de <code>prototype</code> a la matriz <code>prototypeProps</code> : <blockquote> dejemos ownProps = []; <br> vamos prototypeProps = []; <br><br> para (dejar propiedad en pato) { <br> if (duck.hasOwnProperty (propiedad)) { <br> ownProps.push (propiedad); <br> } else { <br> prototypeProps.push (propiedad); <br> } <br> } <br><br> console.log (ownProps); // imprime [&quot;nombre&quot;] <br> console.log (prototypeProps); // imprime [&quot;numLegs&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Agregue todas las propiedades <code>own</code> de <code>beagle</code> a la matriz <code>ownProps</code> . Agregue todas las propiedades <code>prototype</code> de <code>Dog</code> a la matriz <code>prototypeProps</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La matriz <code>ownProps</code> debe incluir <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1, "The <code>ownProps</code> array should include <code>"name"</code>.");'
  - text: La matriz <code>prototypeProps</code> debe incluir <code>&quot;numLegs&quot;</code> .
    testString: 'assert(prototypeProps.indexOf("numLegs") !== -1, "The <code>prototypeProps</code> array should include <code>"numLegs"</code>.");'
  - text: Resuelva este desafío sin usar el método <code>Object.keys()</code> .
    testString: 'assert(!/\Object.keys/.test(code), "Solve this challenge without using the built in method <code>Object.keys()</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

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
