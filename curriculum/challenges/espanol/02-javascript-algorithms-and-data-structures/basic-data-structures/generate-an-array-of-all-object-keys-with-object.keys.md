---
id: 587d7b7d367417b2b2512b1e
title: Genera un arreglo de todas las claves de los objetos con Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

También podemos generar un arreglo que contenga todas las claves almacenadas en un objeto utilizando el método `Object.keys()`. Este método toma un objeto como argumento y devuelve un arrelgo de cadenas que representan cada propiedad en el objeto. De nuevo, no habrá un orden específico para las entradas en el arreglo.

# --instructions--

Termina de escribir la función `getArrayOfUsers` para que devuelva un arreglo que contenga todas las propiedades del objeto que recibe como argumento.

# --hints--

El objeto `users` sólo debe contener las claves `Alan`, `Jeff`, `Sarah` y `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

La función `getArrayOfUsers` debe devolver un arreglo que contenga todas las claves del objeto `users`

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --seed--

## --seed-contents--

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
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```

# --solutions--

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
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```
