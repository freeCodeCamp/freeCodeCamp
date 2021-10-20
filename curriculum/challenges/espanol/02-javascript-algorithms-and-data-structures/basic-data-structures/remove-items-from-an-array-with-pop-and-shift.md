---
id: 587d78b2367417b2b2512b0f
title: Elimina elementos de un arreglo con pop() y shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

Tanto `push()` como `unshift()` tienen métodos correspondientes que son casi opuestos funcionales: `pop()` y `shift()`. Como ya habrás adivinado, en lugar de agregar, `pop()` *elimina* un elemento al final de un arreglo, mientras que `shift()` elimina un elemento al principio. La diferencia clave entre `pop()` y `shift()` y sus primos `push()` y `unshift()`, es que ninguno de los dos métodos toma parámetros, y cada uno sólo permite modificar un arreglo por un solo elemento a la vez.

Echemos un vistazo:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` tendrá el valor `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` tendrá el valor `['hello']`.

También podemos devolver el valor del elemento eliminado con cualquiera de los dos métodos así:

```js
let popped = greetings.pop();
```

`greetings` tendrá el valor `[]` y `popped` tendría el valor `hello`.

# --instructions--

Hemos definido una función, `popShift`, el cual toma un arreglo como argumento y devuelve un nuevo arreglo. Modifica la función, usando `pop()` y `shift()`, para eliminar el primer y el último elemento del arreglo, y asignar los elementos eliminados a sus correspondientes variables, de modo que el arreglo que se devuelva contenga sus valores.

# --hints--

`popShift(["challenge", "is", "not", "complete"])` debe devolver `["challenge", "complete"]`

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

La función `popShift` debe utilizar el método `pop()`

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

La función `popShift` debe utilizar el método `shift()`

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```
