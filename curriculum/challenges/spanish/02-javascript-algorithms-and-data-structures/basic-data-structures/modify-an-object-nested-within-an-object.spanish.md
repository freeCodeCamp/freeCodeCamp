---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
videoUrl: ''
localeTitle: Modificar un objeto anidado dentro de un objeto
---

## Description
<section id="description"> Ahora echemos un vistazo a un objeto un poco más complejo. Las propiedades de los objetos se pueden anidar a una profundidad arbitraria, y sus valores pueden ser cualquier tipo de datos admitidos por JavaScript, incluidas las matrices e incluso otros objetos. Considera lo siguiente: <blockquote> deja nestedObject = { <br> Identificación: 28802695164, <br> fecha: &#39;31 de diciembre de 2016&#39;, <br> datos: { <br> totalUsuarios: 99, <br> en línea: 80, <br> Estado en línea: { <br> activo: 67, <br> lejos: 13 <br> } <br> } <br> }; </blockquote> <code>nestedObject</code> tiene tres claves únicas: <code>id</code> , cuyo valor es un número, la <code>date</code> cuyo valor es una cadena y los <code>data</code> , cuyo valor es un objeto que tiene otro objeto anidado dentro de él. Si bien las estructuras pueden volverse complejas rápidamente, aún podemos usar las mismas notaciones para acceder a la información que necesitamos. </section>

## Instructions
<section id="instructions"> Aquí hemos definido un objeto, <code>userActivity</code> , que incluye otro objeto anidado dentro de él. Puede modificar las propiedades de este objeto anidado de la misma manera que modificó las propiedades en el último desafío. Establezca el valor de la clave en <code>online</code> en <code>45</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>userActivity</code> tiene <code>id</code> , <code>date</code> y propiedades de <code>data</code>'
    testString: 'assert("id" in userActivity && "date" in userActivity && "data" in userActivity, "<code>userActivity</code> has <code>id</code>, <code>date</code> and <code>data</code> properties");'
  - text: <code>userActivity</code> tiene una clave de <code>data</code> configurada para un objeto con las teclas <code>totalUsers</code> y en <code>online</code>
    testString: 'assert("totalUsers" in userActivity.data && "online" in userActivity.data, "<code>userActivity</code> has a <code>data</code> key set to an object with keys <code>totalUsers</code> and <code>online</code>");'
  - text: La propiedad en <code>online</code> anidada en la clave de <code>data</code> de <code>userActivity</code> debe establecer en <code>45</code>
    testString: 'assert(userActivity.data.online === 45, "The <code>online</code> property nested in the <code>data</code> key of <code>userActivity</code> should be set to <code>45</code>");'
  - text: La propiedad en <code>online</code> se establece mediante notación de punto o corchete
    testString: 'assert.strictEqual(code.search(/online: 45/), -1, "The <code>online</code> property is set using dot or bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line

// change code above this line

console.log(userActivity);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
