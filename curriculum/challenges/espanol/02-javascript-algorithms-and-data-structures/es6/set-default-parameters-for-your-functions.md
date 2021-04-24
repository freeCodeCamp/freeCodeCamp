---
id: 587d7b88367417b2b2512b46
title: Establece parámetros por defecto para tus funciones
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

Para ayudarnos a crear funciones más flexibles, ES6 introduce <dfn>parametros por defecto</dfn> para funciones.

Echa un vistazo, al siguente código:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

La consola mostrará las cadenas `Hello John` y `Hello Anonymous`.

El parámetro por defecto entra en juego cuando el argumento no es especificado (es indefinido). Como puedes ver en el ejemplo anterior, el parámetro `name` recibirá su valor por defecto `Anonymous` cuando no proveas un valor para el parámetro. Puede agregar valores por defecto para tantos parámetros como desees.

# --instructions--

Modifica la función `increment` agregando parámetros por defecto para que sume 1 a `number` si `value` no se especifica.

# --hints--

El resultado de `increment(5, 2)` debe ser `7`.

```js
assert(increment(5, 2) === 7);
```

El resultado de `increment(5)` debe ser `6`.

```js
assert(increment(5) === 6);
```

Un valor de parámetro por defecto de `1` debe utilizarse para `value`.

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
