---
id: 587d7b7c367417b2b2512b1b
title: Usa la palabra clave "delete" para eliminar las propiedades de los objetos
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

Ahora ya sabes qué son los objetos y sus características y ventajas básicas. En resumen, son almacenes clave-valor que proporcionan una forma flexible e intuitiva de estructurar los datos, ***y***, proporcionan un tiempo de búsqueda muy rápido. A lo largo del resto de estos desafíos, describiremos varias operaciones comúnes que puedes realizar sobre los objetos para que te sientas cómodo aplicando estas útiles estructuras de datos en tus programas.

En desafíos anteriores, hemos agregado y modificado los pares clave-valor de un objeto. Aquí veremos cómo podemos *eliminar* un par clave-valor de un objeto.

Volvamos a nuestro ejemplo del objeto `foods` una última vez. Si quisiéramos eliminar la clave `apples`, podemos eliminarla utilizando la palabra clave `delete` de esta manera:

```js
delete foods.apples;
```

# --instructions--

Usa la palabra clave delete para eliminar las claves `oranges`, `plums` y `strawberries` del objeto `foods`.

# --hints--

El objeto `foods` sólo debe tener tres claves: `apples`, `grapes` y `bananas`.

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

Las claves `oranges`, `plums` y `strawberries` deben ser eliminadas usando `delete`.

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
