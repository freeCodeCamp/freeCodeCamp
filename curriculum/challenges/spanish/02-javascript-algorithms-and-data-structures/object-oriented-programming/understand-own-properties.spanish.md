---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
videoUrl: ''
localeTitle: Entender propiedades propias
---

## Description
<section id="description"> En el siguiente ejemplo, el constructor de <code>Bird</code> define dos propiedades: <code>name</code> y <code>numLegs</code> : <blockquote> función Bird (nombre) { <br> this.name = nombre; <br> this.numLegs = 2; <br> } <br><br> dejar pato = nuevo pájaro (&quot;Donald&quot;); <br> vamos canary = new Bird (&quot;Tweety&quot;); </blockquote> <code>name</code> y <code>numLegs</code> se denominan propiedades <code>own</code> , porque se definen directamente en el objeto de instancia. Eso significa que el <code>duck</code> y el <code>canary</code> tienen su propia copia separada de estas propiedades. De hecho, cada instancia de <code>Bird</code> tendrá su propia copia de estas propiedades. El siguiente código agrega todas las propiedades <code>own</code> de <code>duck</code> a la matriz <code>ownProps</code> : <blockquote> dejemos ownProps = []; <br><br> para (dejar propiedad en pato) { <br> if (duck.hasOwnProperty (propiedad)) { <br> ownProps.push (propiedad); <br> } <br> } <br><br> console.log (ownProps); // imprime [&quot;nombre&quot;, &quot;numLegs&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Agregue las propiedades <code>own</code> de <code>canary</code> a la matriz <code>ownProps</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ownProps</code> debe incluir los valores <code>&quot;numLegs&quot;</code> y <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1 && ownProps.indexOf("numLegs") !== -1, "<code>ownProps</code> should include the values <code>"numLegs"</code> and <code>"name"</code>.");'
  - text: Resuelva este desafío sin usar el método <code>Object.keys()</code> .
    testString: 'assert(!/\Object.keys/.test(code), "Solve this challenge without using the built in method <code>Object.keys()</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
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
