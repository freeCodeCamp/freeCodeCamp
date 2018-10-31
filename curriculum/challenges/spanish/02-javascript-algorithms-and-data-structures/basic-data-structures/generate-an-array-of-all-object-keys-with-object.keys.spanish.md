---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
videoUrl: ''
localeTitle: Generar una matriz de todas las claves de objeto con Object.keys ()
---

## Description
<section id="description"> También podemos generar una matriz que contenga todas las claves almacenadas en un objeto usando el método <code>Object.keys()</code> y pasando un objeto como argumento. Esto devolverá una matriz con cadenas que representan cada propiedad en el objeto. Nuevamente, no habrá un orden específico para las entradas en la matriz. </section>

## Instructions
<section id="instructions"> Termine de escribir la función <code>getArrayOfUsers</code> para que devuelva una matriz que contenga todas las propiedades en el objeto que recibe como argumento. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El objeto de los <code>users</code> solo contiene las claves <code>Alan</code> , <code>Jeff</code> , <code>Sarah</code> y <code>Ryan</code>'
    testString: 'assert("Alan" in users && "Jeff" in users && "Sarah" in users && "Ryan" in users && Object.keys(users).length === 4, "The <code>users</code> object only contains the keys <code>Alan</code>, <code>Jeff</code>, <code>Sarah</code>, and <code>Ryan</code>");'
  - text: La función <code>getArrayOfUsers</code> devuelve una matriz que contiene todas las claves en el objeto de los <code>users</code>
    testString: 'assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf("Alan") !== -1 && R.indexOf("Jeff") !== -1 && R.indexOf("Sarah") !== -1 && R.indexOf("Ryan") !== -1 && R.indexOf("Sam") !== -1 && R.indexOf("Lewis") !== -1); })() === true, "The <code>getArrayOfUsers</code> function returns an array which contains all the keys in the <code>users</code> object");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line

  // change code above this line
}

console.log(getArrayOfUsers(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
