---
id: 587d7b8a367417b2b2512b4c
title: >-
  Desestructuración vía elementos rest
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

Las variables `a` y `b` toman el primer y segundo valor del arreglo. Luego de esto, debido a la presencia de sintaxis rest `arr` obtiene el rest de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. Es decir, no se puede utilizar la sintaxis rest para capturar un sub arreglo que deje fuera el último elemento del arreglo original.

# --instructions--

Utiliza una asignación de desestructuración con la sintaxis rest para emular el comportamiento de `Array.prototype.slice()`. `removeFirstTwo()` debe devolver un sub arreglo del arreglo original `list` con los dos primeros elementos omitidos.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` debe devolver `[3, 4, 5]`

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

`removeFirstTwo()` no debe modificar `list`

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

`Array.slice()` no debe ser usado.

```js
assert(!__helpers.removeJSComments(code).match(/\.\s*slice\s*\(/));
```

Debes utilizar el rest sintaxis.

```js
assert.match(code, /\.\.\./);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  // comment with 'slice' to check comments are removed in tests
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
