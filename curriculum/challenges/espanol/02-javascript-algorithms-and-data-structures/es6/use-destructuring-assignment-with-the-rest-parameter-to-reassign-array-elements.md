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

Utiliza una asignación de desestructuración con el parámetro rest para emular el comportamiento de `Array.prototype.slice()`. `removeFirstTwo()` debe devolver un sub-arreglo del arreglo original `list` sin los dos primeros elementos.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` debe devolver `[3, 4, 5]`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` no debe modificar `list`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
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
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
