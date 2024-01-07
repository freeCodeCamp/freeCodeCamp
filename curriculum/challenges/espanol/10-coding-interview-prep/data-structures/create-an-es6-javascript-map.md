---
id: 587d825b367417b2b2512c8d
title: Crea un Mapa ES6 JavaScript
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

La nueva version de JavaScript os proporciona un objeto de Mapa integrado que proporciona muchas de las funcionalidades que escribimos a mano en el último desafío. Este objeto mapa, aunque similar a los objetos JavaScript regulares, provee algunas funcionalidades útiles que los objetos normales no tienen. Por ejemplo, un Mapa ES6 ratrea el orden de inserción de los elementos que se le añaden. Aquí hay un resumen más completo de sus métodos:

- `.has(key)` devuelve true o false basado en la presencia de una clave
- `.get(key)` devuelve el valor asociado a una clave
- `.set(key, value)` establece un nuevo par clave, valor
- `.delete(key)` elimina un par clave, valor
- `.clear()` elimina todos los pares clave, valor
- `.entries()` devuelve un arreglo de todas las claves en orden de inserción
- `.values()` devuelve un arreglo de todos los valores en orden de inserción

# --instructions--

Define un objeto Mapar JavaScript y asignalo a una variable llamada myMap. Agrega el par clave, valor `freeCodeCamp`, `Awesome!` a el.

# --hints--

El objeto `myMap` debe existir.

```js
assert(typeof myMap === 'object');
```

`myMap` debe contener el par clave valor `freeCodeCamp`, `Awesome!`.

```js
assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("freeCodeCamp", "Awesome!");
```
