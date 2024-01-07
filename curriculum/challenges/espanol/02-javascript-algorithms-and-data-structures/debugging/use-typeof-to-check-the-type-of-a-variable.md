---
id: 587d7b84367417b2b2512b34
title: Utiliza typeof para comprobar el tipo de una variable
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--

Puedes utilizar `typeof` para comprobar la estructura de datos, o tipo, de una variable. Esto es útil en la depuración cuando se trabaja con múltiples tipos de datos. Si crees que estás sumando dos números, pero uno es en realidad una cadena, los resultados pueden ser inesperados. Los errores de tipo pueden estar al acecho en los cálculos o en las llamadas a funciones. Ten cuidado especialmente cuando accedas y trabajes con datos externos en forma de objeto de JavaScript Object Notation (JSON).

Aquí hay algunos ejemplos que utilizan `typeof`:

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

En orden, la consola mostrará las cadenas `string`, `number`, `object`, y `object`.

JavaScript reconoce siete tipos de datos primitivos (inmutables): `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` (nuevo con ES6), y `BigInt` (nuevo con ES2020), y un tipo para elementos mutables: `Object`. Ten en cuenta que en JavaScript, los arreglos son técnicamente un tipo de objeto.

# --instructions--

Agrega dos sentencias `console.log()` para comprobar el `typeof` de cada una de las dos variables `seven` y `three` en el código.

# --hints--

Tu código debe utilizar `typeof` en dos sentencias `console.log()` para comprobar el tipo de las variables.

```js
assert(code.match(/console\.log\s*\(typeof[\( ].*\)?\)/g).length == 2);
```

Tu código debe utilizar `typeof` para comprobar el tipo de la variable `seven`.

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

Tu código debe utilizar `typeof` para comprobar el tipo de la variable `three`.

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```
