---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
localeTitle: Definir una función de constructor
challengeType: 1
---

## Description
<section id='description'> 
<code>Constructors</code> son funciones que crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piense en ellos como un plano para la creación de nuevos objetos. 
Aquí hay un ejemplo de un <code>constructor</code> : 
<blockquote>function Bird() {<br>&nbsp;&nbsp;this.name = "Albert";<br>&nbsp;&nbsp;this.color = "blue";<br>&nbsp;&nbsp;this.numLegs = 2;<br>}</blockquote> 
Este <code>constructor</code> define un objeto <code>Bird</code> con el <code>name</code> , el <code>color</code> y las <code>numLegs</code> establecidas en Albert, azul y 2, respectivamente. 
<code>Constructors</code> siguen algunas convenciones: 
<ul><li> <code>Constructors</code> se definen con un nombre en mayúsculas para distinguirlos de otras funciones que no son <code>constructors</code> . </li><li> <code>Constructors</code> usan la palabra clave <code>this</code> para establecer las propiedades del objeto que crearán. Dentro del <code>constructor</code> , <code>this</code> refiere al nuevo objeto que creará. </li><li> <code>Constructors</code> definen propiedades y comportamientos en lugar de devolver un valor como otras funciones podrían. </li></ul> 
</section>

## Instructions
<section id='instructions'> 
Cree un <code>constructor</code> , <code>Dog</code> , con las propiedades <code>name</code> , <code>color</code> y <code>numLegs</code> que se establecen en una cadena, una cadena y un número, respectivamente. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> debe tener una propiedad de <code>name</code> establecida en una cadena.
    testString: 'assert(typeof (new Dog()).name === "string", "<code>Dog</code> should have a <code>name</code> property set to a string.");'
  - text: <code>Dog</code> debe tener una propiedad de <code>color</code> establecida en una cadena.
    testString: 'assert(typeof (new Dog()).color === "string", "<code>Dog</code> should have a <code>color</code> property set to a string.");'
  - text: <code>Dog</code> debe tener una propiedad <code>numLegs</code> establecida en un número.
    testString: 'assert(typeof (new Dog()).numLegs === "number", "<code>Dog</code> should have a <code>numLegs</code> property set to a number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>


```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```

</section>
