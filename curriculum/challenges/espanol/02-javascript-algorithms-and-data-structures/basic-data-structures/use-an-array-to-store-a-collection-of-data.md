---
id: 587d7b7e367417b2b2512b20
title: Utiliza un arreglo para almacenar una colección de datos
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

Lo siguiente es un ejemplo de la implementación más simple de una estructura de datos de un arreglo. Esto se conoce como un <dfn>arreglo unidimensional</dfn>, lo que significa que sólo tiene un nivel, o que no tiene otros arreglos anidados dentro de él. Observa que contiene <dfn>booleanos</dfn>, <dfn>cadenas</dfn> y <dfn>números</dfn>, entre otros tipos de datos válidos de JavaScript:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

La llamada `console.log` muestra `7`.

Todos los arreglos tienen una propiedad de longitud, que como se muestra arriba, se puede acceder muy fácilmente con la sintaxis `Array.length`. A continuación se puede ver una implementación más compleja de un arreglo. Esto se conoce como un <dfn>arreglo multidimensional</dfn>, o un arreglo que contiene otros arreglos. Observa que este arreglo también contiene <dfn>objetos</dfn> JavaScript, que examinaremos muy de cerca en la siguiente sección, pero por ahora, todo lo que necesitas saber es que los arreglos también son capaces de almacenar objetos complejos.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

Hemos definido una variable llamada `yourArray`. Completa la sentencia asignando un arreglo de al menos 5 elementos de longitud a la variable `yourArray`. Tu arreglo debe contener al menos una <dfn>cadena</dfn> (string), un <dfn>número</dfn> (number) y un <dfn>booleano</dfn> (boolean).

# --hints--

`yourArray` debe ser un arreglo.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` debe tener al menos 5 elementos de largo.

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` debe contener al menos un `boolean`.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` debe contener al menos un `number`.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` debe contener al menos un `string`.

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
