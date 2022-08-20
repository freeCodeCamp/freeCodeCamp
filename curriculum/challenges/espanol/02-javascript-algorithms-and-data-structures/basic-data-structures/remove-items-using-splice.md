---
id: 587d78b2367417b2b2512b10
title: Elimina elementos usando splice()
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

Bien, ya hemos aprendido a eliminar elementos al principio y al final de los arreglos utilizando `shift()` y `pop()`, pero ¿qué pasa si queremos eliminar un elemento de alguna parte del medio? ¿O eliminar más de un elemento a la vez? Pues bien, ahí es donde entra `splice()`. `splice()` nos permite hacer precisamente eso: **eliminar cualquier número de elementos consecutivos** de cualquier parte de un arreglo.

`splice()` puede tomar hasta 3 parámetros, pero por ahora, nos centraremos sólo en los 2 primeros. Los primeros dos parámetros de `splice()` son enteros que representan índices, o posiciones, de elementos en el arreglo a la que `splice()` está siendo llamado. Y recuerda que los arreglos están *indexados en cero*, por lo que para indicar el primer elemento de un arreglo, usaríamos `0`. El primer parámetro de `splice()` representa el índice del arreglo a partir del cual se empiezan a eliminar los elementos, mientras que el segundo parámetro indica el número de elementos a eliminar. Por ejemplo:

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

Aquí eliminamos 2 elementos, comenzando con el tercer elemento (en el índice 2). `array` tendrá el valor `['today', 'was', 'great']`.

`splice()` no sólo modifica el arreglo que llama, sino que también devuelve un nuevo arreglo que contiene el valor de los elementos eliminados:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` tiene el valor `['really', 'happy']`.

# --instructions--

Hemos inicializado un arreglo `arr`. Usa `splice()` para eliminar elementos de `arr`, de forma que sólo contenga elementos que sumen el valor de `10`.

# --hints--

No debes cambiar la línea original de `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` sólo debe contener elementos que sumen `10`.

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

Tu código debe utilizar el método `splice()` en `arr`.

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

La división (splice) sólo debe eliminar elementos de `arr` y no agregar ningún elemento adicional a `arr`.

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
