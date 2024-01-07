---
id: bd7993c9c69feddfaeb8bdef
title: Almacena múltiples valores en una variable utilizando los arreglos de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

Con las variables de arreglos (`array`) de JavaScript, podemos almacenar varios datos en un solo lugar.

Inicias una declaración de arreglo con un corchete de apertura, lo terminas con un corchete de cierre, y pones una coma entre cada entrada, de esta forma:

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

Modifica el nuevo arreglo `myArray` para que contenga tanto una cadena como un número (en ese orden).

# --hints--

`myArray` debe ser un arreglo.

```js
assert(typeof myArray == 'object');
```

El primer elemento en `myArray` debe ser una cadena.

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

El segundo elemento en `myArray` debe ser un número.

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
