---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
videoUrl: ''
localeTitle: Usar la notación de puntos para acceder a las propiedades de un objeto
---

## Description
<section id="description"> El último desafío creó un <code>object</code> con varias <code>properties</code> , ahora verá cómo acceder a los valores de esas <code>properties</code> . Aquí hay un ejemplo: <blockquote> dejar pato = { <br> nombre: &quot;Aflac&quot;, <br> NumLegs: 2 <br> }; <br> console.log (duck.name); <br> // Esto imprime &quot;Aflac&quot; a la consola. </blockquote> La notación de puntos se utiliza en el nombre del <code>object</code> , <code>duck</code> , seguido del nombre de la <code>property</code> , <code>name</code> , para acceder al valor de &quot;Aflac&quot;. </section>

## Instructions
<section id="instructions"> Imprime las dos <code>properties</code> del objeto <code>dog</code> debajo de tu consola. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debería usar <code>console.log</code> para imprimir el valor de la propiedad <code>name</code> del objeto <code>dog</code> .
    testString: 'assert(/console.log\(.*dog\.name.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>name</code> property of the <code>dog</code> object.");'
  - text: Debería usar <code>console.log</code> para imprimir el valor de la propiedad <code>numLegs</code> del objeto <code>dog</code> .
    testString: 'assert(/console.log\(.*dog\.numLegs.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>numLegs</code> property of the <code>dog</code> object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
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
