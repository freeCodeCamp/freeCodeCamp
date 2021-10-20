---
id: 587d7b8a367417b2b2512b4c
title: >-
  Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

En algunas situaciones que implican la desestructuración de arreglos, tal vez queramos recolectar el resto de elementos en un arreglo separado.

El resultado es similar a `Array.prototype.slice()`, como se muestra a continuación:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

La consola mostrará los valores `1, 2` y `[3, 4, 5, 7]`.

Las variables `a` y `b` toman el primer y segundo valor del arreglo. Después de eso, debido a la presencia del parámetro rest, `arr` obtiene el resto de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. Por ejemplo, no puedes usar el parámetro rest para capturar un sub-arreglo que deje fuera el último elemento del arreglo original.

# --instructions--

Utiliza la sintaxis de desestructuración con el parámetro rest para realizar un `Array.prototype.slice()` eficaz, de tal manera que `arr` sea un sub-arreglo del arreglo original `source` con los dos primeros elementos omitidos.

# --hints--

`arr` debe ser `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` debe ser `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
```

`Array.slice()` no debe ser usado.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Se debe utilizar desestructuración en `list`.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
