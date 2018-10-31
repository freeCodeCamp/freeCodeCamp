---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
videoUrl: ''
localeTitle: Utilice la palabra clave delete para eliminar las propiedades del objeto
---

## Description
<section id="description"> Ahora sabes qué son los objetos y sus características y ventajas básicas. En resumen, son tiendas de valor clave que proporcionan una forma flexible e intuitiva de estructurar los datos <strong><em>y</em></strong> proporcionan un tiempo de búsqueda muy rápido. A lo largo del resto de estos desafíos, describiremos varias operaciones comunes que puede realizar en objetos para que pueda sentirse cómodo aplicando estas estructuras de datos útiles en sus programas. En desafíos anteriores, hemos agregado y modificado los pares clave-valor de un objeto. Aquí veremos cómo podemos <em>eliminar</em> un par clave-valor de un objeto. Repasemos nuestro ejemplo de objeto de <code>foods</code> una última vez. Si quisiéramos eliminar la clave de las <code>apples</code> , podemos eliminarla utilizando la palabra clave <code>delete</code> siguiente manera: <blockquote> eliminar foods.apples; </blockquote></section>

## Instructions
<section id="instructions"> Use la palabra clave delete para eliminar las teclas de <code>oranges</code> , <code>plums</code> y <code>strawberries</code> del objeto de <code>foods</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El objeto de <code>foods</code> solo tiene tres claves: <code>apples</code> , <code>grapes</code> y <code>bananas</code>'
    testString: 'assert(!foods.hasOwnProperty("oranges") && !foods.hasOwnProperty("plums") && !foods.hasOwnProperty("strawberries") && Object.keys(foods).length === 3, "The <code>foods</code> object only has three keys: <code>apples</code>, <code>grapes</code>, and <code>bananas</code>");'
  - text: 'Las claves de <code>oranges</code> , <code>plums</code> y <code>strawberries</code> se eliminan usando <code>delete</code>'
    testString: 'assert(code.search(/oranges:/) !== -1 && code.search(/plums:/) !== -1 && code.search(/strawberries:/) !== -1, "The <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys are removed using <code>delete</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
