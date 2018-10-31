---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
videoUrl: ''
localeTitle: Entender la cadena de prototipos
---

## Description
<section id="description"> Todos los objetos en JavaScript (con algunas excepciones) tienen un <code>prototype</code> . Además, el <code>prototype</code> un objeto en sí mismo es un objeto. <blockquote> función Bird (nombre) { <br> this.name = nombre; <br> } <br><br> typeof Bird.prototype; // =&gt; objeto </blockquote> Debido a que un <code>prototype</code> es un objeto, ¡un <code>prototype</code> puede tener su propio <code>prototype</code> ! En este caso, el <code>prototype</code> de <code>Bird.prototype</code> es <code>Object.prototype</code> : <blockquote> Object.prototype.isPrototypeOf (Bird.prototype); <br> // devuelve true </blockquote> ¿Cómo es esto útil? Puede recordar el método <code>hasOwnProperty</code> de un desafío anterior: <blockquote> dejar pato = nuevo pájaro (&quot;Donald&quot;); <br> duck.hasOwnProperty (&quot;nombre&quot;); // =&gt; verdadero </blockquote> El método <code>hasOwnProperty</code> se define en <code>Object.prototype</code> , al que se puede acceder mediante <code>Bird.prototype</code> , al que luego se puede acceder mediante <code>duck</code> . Este es un ejemplo de la cadena <code>prototype</code> . En esta cadena <code>prototype</code> , <code>Bird</code> es el <code>supertype</code> para el <code>duck</code> , mientras que el <code>duck</code> es el <code>subtype</code> . <code>Object</code> es un <code>supertype</code> tanto para <code>Bird</code> como para <code>duck</code> . <code>Object</code> es un <code>supertype</code> para todos los objetos en JavaScript. Por lo tanto, cualquier objeto puede usar el método <code>hasOwnProperty</code> . </section>

## Instructions
<section id="instructions"> Modificar el código para mostrar la cadena de prototipo correcta. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe mostrar que <code>Object.prototype</code> es el prototipo de <code>Dog.prototype</code> &quot;)
    testString: 'assert(/Object\.prototype\.isPrototypeOf/.test(code), "Your code should show that <code>Object.prototype</code> is the prototype of <code>Dog.prototype</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
