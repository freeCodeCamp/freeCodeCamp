---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
videoUrl: ''
localeTitle: Compruebe si un objeto tiene una propiedad
---

## Description
<section id="description"> Ahora podemos agregar, modificar y eliminar claves de objetos. Pero, ¿y si solo quisiéramos saber si un objeto tiene una propiedad específica? JavaScript nos proporciona dos formas diferentes de hacer esto. Uno usa el método <code>hasOwnProperty()</code> y el otro usa la palabra clave <code>in</code> . Si tenemos un objeto <code>users</code> con una propiedad de <code>Alan</code> , podríamos verificar su presencia de una de las siguientes maneras: <blockquote> users.hasOwnProperty (&#39;Alan&#39;); <br> &#39;Alan&#39; en los usuarios; <br> // ambos devuelven verdadero </blockquote></section>

## Instructions
<section id="instructions"> Hemos creado un objeto, <code>users</code> , con algunos usuarios en él y una función <code>isEveryoneHere</code> , a la que pasamos el objeto de los <code>users</code> como un argumento. Termine de escribir esta función de modo que devuelva <code>true</code> solo si el objeto de los <code>users</code> contiene los cuatro nombres, <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> y <code>Ryan</code> , como claves, y en caso contrario, <code>false</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El objeto de los <code>users</code> solo contiene las claves <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> y <code>Ryan</code>'
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: 'La función <code>isEveryoneHere</code> devuelve <code>true</code> si <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> y <code>Ryan</code> son propiedades del objeto de los <code>users</code>'
    testString: 'assert(isEveryoneHere(users) === true, "The function <code>isEveryoneHere</code> returns <code>true</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are properties on the <code>users</code> object");'
  - text: 'La función <code>isEveryoneHere</code> devuelve <code>false</code> si <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> y <code>Ryan</code> no son propiedades en el objeto de los <code>users</code>'
    testString: 'assert((function() { delete users.Alan; delete users.Jeff; delete users.Sarah; delete users.Ryan; return isEveryoneHere(users) })() === false, "The function <code>isEveryoneHere</code> returns <code>false</code> if <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code> are not properties on the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line

  // change code above this line
}

console.log(isEveryoneHere(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
