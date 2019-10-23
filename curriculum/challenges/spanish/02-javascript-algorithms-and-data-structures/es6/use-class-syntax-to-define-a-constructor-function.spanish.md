---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: Use la clase Sintaxis para definir una función constructora
---

## Description
<section id="description"> ES6 proporciona una nueva sintaxis para ayudar a crear objetos, utilizando la <dfn>clase de</dfn> palabra clave. Cabe señalar que la sintaxis de <code>class</code> es solo una sintaxis, y no una implementación de paradigmas orientados a objetos basada completamente en clases, a diferencia de lenguajes como Java, Python o Ruby, etc. En ES5, generalmente definimos un constructor función, y utilizar la <code>new</code> palabra clave para crear una instancia de un objeto. <blockquote> var SpaceShuttle = function (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> var zeus = nuevo SpaceShuttle (&#39;Jupiter&#39;); </blockquote> La sintaxis de clase simplemente reemplaza la creación de la función de constructor: <blockquote> clase SpaceShuttle { <br> constructor (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> } <br> const zeus = nuevo SpaceShuttle (&#39;Jupiter&#39;); </blockquote> Observe que la <code>class</code> de palabras clave declara una nueva función, y se añadió un constructor, que se invoca cuando <code>new</code> se llama - para crear un nuevo objeto. </section>

## Instructions
<section id="instructions"> Use <code>class</code> palabra clave de <code>class</code> y escriba un constructor adecuado para crear la clase <code>Vegetable</code> . La <code>Vegetable</code> permite crear un objeto vegetal, con un <code>name</code> propiedad, para pasarlo al constructor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Vegetable</code> debe ser una <code>class</code> con un método <code>constructor</code> definido.
    testString: 'assert(typeof Vegetable === "function" && typeof Vegetable.constructor === "function", "<code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: Se usó la palabra clave de <code>class</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Vegetable</code> puede ser instanciado.
    testString: 'assert(() => {const a = new Vegetable("apple"); return typeof a === "object";},"<code>Vegetable</code> can be instantiated.");'
  - text: <code>carrot.name</code> debe devolver la <code>carrot</code> .
    testString: 'assert(carrot.name=="carrot","<code>carrot.name</code> should return <code>carrot</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
