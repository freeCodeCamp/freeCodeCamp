---
id: 56bbb991ad1ed5201cd392d0
title: Construye objetos en JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

Es posible que hayas escuchado el término objeto (`object`) antes.

Los objetos son similares a los arreglos (`arrays`), excepto que en lugar de usar índices para acceder y modificar sus datos, accedes a los datos en objetos a través de propiedades (`properties`).

Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo real, como un gato.

Por ejemplo, aquí hay un objeto de gato:

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

En este ejemplo, todas las propiedades se almacenan como cadenas, como `name`, `legs` y `tails`. Sin embargo, también puedes utilizar números como propiedades. Incluso puedes omitir las comillas para las propiedades de cadenas de una sola palabra, de la siguiente manera:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

Sin embargo, si tu objeto tiene propiedades que no son cadenas, JavaScript las convertirá automáticamente en cadenas.

# --instructions--

Crea un objeto que represente a un perro llamado `myDog` que contenga las propiedades `name` (una cadena), `legs`, `tails` y `friends`.

Puedes establecer estas propiedades del objeto a los valores que quieras, siempre y cuando `name` sea una cadena, `legs` y `tails` sean números, y `friends` sea un arreglo.

# --hints--

`myDog` debe contener la propiedad `name` y debe ser una cadena (`string`).

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` debe contener la propiedad `legs` y debe ser un número (`number`).

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` debe contener la propiedad `tails` y debe ser un número (`number`).

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` debe contener la propiedad `friends` y debe ser un arreglo (`array`).

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` sólo debe contener todas las propiedades dadas.

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
