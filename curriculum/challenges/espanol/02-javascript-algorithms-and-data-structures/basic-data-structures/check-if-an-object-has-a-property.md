---
id: 587d7b7d367417b2b2512b1c
title: Evalúa si un objeto tiene una propiedad
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

Ahora podemos agregar, modificar y eliminar claves de los objetos. Pero, ¿y si sólo queremos saber si un objeto tiene una propiedad específica? JavaScript nos proporciona dos maneras diferentes de hacerlo. Uno utiliza el método `hasOwnProperty()` y el otro utiliza la palabra clave `in`. Si tenemos un objeto `users` con una propiedad de `Alan`, podríamos comprobar su presencia de cualquiera de las siguientes maneras:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
// both return true
```

# --instructions--

Hemos creado un objeto, `users`, con algunos usuarios en él y una función `isEveryoneHere`, a la que pasamos el objeto `users` como argumento. Termina de escribir esta función para que devuelva `true` sólo si el objeto `users` contiene los cuatro nombres, `Alan`, `Jeff`, `Sarah` y `Ryan`, como claves, y `false` en caso contrario.

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

La función `isEveryoneHere` debe devolver `true` si `Alan`, `Jeff`, `Sarah`, y `Ryan` son propiedades en el objeto `users`

```js
assert(isEveryoneHere(users) === true);
```

La función `isEveryoneHere` debe devolver `false` si `Alan` no es una propiedad en el objeto `users`

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

La función `isEveryoneHere` debe devolver `false` si `Jeff` no es una propiedad en el objeto `users`

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

La función `isEveryoneHere` debe devolver `false` si `Sarah` no es una propiedad en el objeto `users`

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

La función `isEveryoneHere` debe devolver `false` si `Ryan` no es una propiedad en el objeto `users`

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

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
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

# --solutions--

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
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(i => obj.hasOwnProperty(i));
}

console.log(isEveryoneHere(users));
```
