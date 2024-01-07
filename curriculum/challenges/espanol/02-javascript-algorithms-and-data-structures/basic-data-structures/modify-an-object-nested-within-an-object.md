---
id: 587d7b7c367417b2b2512b19
title: Modifica un objeto anidado dentro de un objeto
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

Veamos ahora un objeto un poco más complejo. Las propiedades de los objetos pueden anidarse a una profundidad arbitraria, y sus valores pueden ser cualquier tipo de datos soportados por JavaScript, incluyendo arreglos e incluso otros objetos. Considera lo siguiente:

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` tiene tres propiedades: `id` (el valor es un número), `date` (el valor es una cadena), y `data` (el valor es un objeto con su estructura anidada). Aunque las estructuras pueden volverse rápidamente complejas, podemos seguir utilizando las mismas notaciones para acceder a la información que necesitamos. Para asignar el valor `10` a la propiedad `busy` del objeto anidado `onlineStatus`, utilizamos la notación de puntos para referenciar la propiedad:

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

Aquí hemos definido un objeto `userActivity`, que incluye otro objeto anidado dentro de él. Establece el valor de la clave `online` en `45`.

# --hints--

`userActivity` debe tener las propiedades `id`, `date` y `data`.

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` debe tener una clave `data` establecida en un objeto con las claves `totalUsers` y `online`.

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

La propiedad `online` anidada en la clave `data` de `userActivity` debe establecerse en `45`

```js
assert(userActivity.data.online === 45);
```

La propiedad `online` debe establecerse utilizando la notación de puntos o corchetes.

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
