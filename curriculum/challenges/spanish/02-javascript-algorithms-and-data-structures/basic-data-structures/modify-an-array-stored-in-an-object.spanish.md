---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
localeTitle: Modificar una matriz almacenada en un objeto
challengeType: 1
---

## Description
<section id='description'>
Ahora has visto todas las operaciones básicas para objetos JavaScript. Puede agregar, modificar y eliminar pares clave-valor, verificar si existen claves e iterar sobre todas las claves en un objeto. A medida que continúe aprendiendo JavaScript, verá aplicaciones de objetos aún más versátiles. Además, las lecciones opcionales de Estructuras de datos avanzadas más adelante en el plan de estudios también cubren los objetos <dfn>Map</dfn> y <dfn>Set de</dfn> ES6, los cuales son similares a los objetos comunes pero ofrecen algunas características adicionales. ¡Ahora que ha aprendido los conceptos básicos de matrices y objetos, está completamente preparado para comenzar a abordar problemas más complejos utilizando JavaScript!
</section>

## Instructions
<section id='instructions'>
Eche un vistazo al objeto que hemos proporcionado en el editor de código. El objeto de <code>user</code> contiene tres claves. La clave de <code>data</code> contiene cinco claves, una de las cuales contiene una gran variedad de <code>friends</code> . A partir de esto, puede ver cómo los objetos flexibles son como estructuras de datos. Hemos empezado a escribir una función <code>addFriend</code> . Termine de escribirlo para que tome un objeto de <code>user</code> y agregue el nombre del argumento de <code>friend</code> a la matriz almacenada en <code>user.data.friends</code> y devuelva esa matriz.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El objeto de <code>user</code> tiene <code>name</code> , <code>age</code> y claves de <code>data</code> '
    testString: 'assert("name" in user && "age" in user && "data" in user, "The <code>user</code> object has <code>name</code>, <code>age</code>, and <code>data</code> keys");'
  - text: La función <code>addFriend</code> acepta un objeto de <code>user</code> y una cadena de <code>friend</code> como argumentos y agrega el amigo a la matriz de <code>friends</code> en el objeto de <code>user</code>
    testString: 'assert((function() { let L1 = user.data.friends.length; addFriend(user, "Sean"); let L2 = user.data.friends.length; return (L2 === L1 + 1); })(), "The <code>addFriend</code> function accepts a <code>user</code> object and a <code>friend</code> string as arguments and adds the friend to the array of <code>friends</code> in the <code>user</code> object");'
  - text: ' <code>addFriend(user, &quot;Pete&quot;)</code> debe devolver <code>[&quot;Sam&quot;, &quot;Kira&quot;, &quot;Tomo&quot;, &quot;Pete&quot;]</code> '
    testString: 'assert.deepEqual((function() { delete user.data.friends; user.data.friends = ["Sam", "Kira", "Tomo"]; return addFriend(user, "Pete") })(), ["Sam", "Kira", "Tomo", "Pete"], "<code>addFriend(user, "Pete")</code> should return <code>["Sam", "Kira", "Tomo", "Pete"]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line

  // change code above this line
}

console.log(addFriend(user, 'Pete'));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
