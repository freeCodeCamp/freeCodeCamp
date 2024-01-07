---
id: 587d7b7d367417b2b2512b1f
title: Modifica un arreglo almacenado en un objeto
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

Ahora ya has visto todas las operaciones básicas de los objetos de JavaScript. Puedes agregar, modificar y eliminar pares clave-valor, comprobar si las claves existen e iterar sobre todas las claves de un objeto. A medida que sigas aprendiendo JavaScript verás aplicaciones aún más versátiles de los objetos. Además, las lecciones de Estructuras de Datos ubicadas en la sección Coding Interview Prep del plan de estudios también cubren los objetos <dfn>Map</dfn> y <dfn>Set</dfn> de ES6, los cuales son similares a los objetos ordinarios, pero proporcionan algunas características adicionales. Ahora que has aprendido los fundamentos de los arreglos y los objetos, ¡estás totalmente preparado para empezar a abordar problemas más complejos con JavaScript!

# --instructions--

Echa un vistazo al objeto que hemos proporcionado en el editor de código. El objeto `user` contiene tres claves. La clave `data` contiene cinco claves, una de las cuales contiene un arreglo de `friends`. A partir de esto, puedes ver lo flexibles que son los objetos como estructuras de datos. Hemos empezado a escribir una función `addFriend`. Termina de escribirla para que tome un objeto `user` y agregue el nombre del argumento `friend` al arreglo almacenado en `user.data.friends` y devuelva ese arreglo.

# --hints--

El objeto `user` debe tener las claves `name`, `age` y `data`.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

La función `addFriend` debe aceptar un objeto `user` y una cadena `friend` como argumentos y agregar el amigo (friend) al arreglo de `friends` del objeto `user`.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` debe devoler `["Sam", "Kira", "Tomo", "Pete"]`.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

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
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

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
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
