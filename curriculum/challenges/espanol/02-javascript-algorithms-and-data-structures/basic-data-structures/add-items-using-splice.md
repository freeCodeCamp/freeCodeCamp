---
id: 587d78b3367417b2b2512b11
title: Agrega elementos usando splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

¿Recuerdas que en el último desafío mencionamos que `splice()` puede tomar hasta tres parámetros? Pues bien, puedes usar el tercer parámetro, compuesto por uno o varios elementos, para agregarlo al arreglo. Esto puede ser increíblemente útil para cambiar rápidamente un elemento, o un conjunto de elementos, por otro.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

La segunda ocurrencia de `12` es removida, y agregamos `13` y `14` en el mismo índice. El arreglo `numbers` ahora será `[ 10, 11, 12, 13, 14, 15 ]`.

Aquí, comenzamos con un arreglo de números. A continuación, pasamos lo siguiente a `splice()`: El índice en el que empezar a borrar elementos (3), el número de elementos a borrar (1), y el resto de argumentos (13, 14) se insertarán a partir de ese mismo índice. Ten en cuenta que puede haber cualquier número de elementos (separados por comas) después de `amountToDelete`, cada uno de los cuales es insertado.

# --instructions--

Hemos definido una función, `htmlColorNames`, que toma un arreglo de colores HTML como argumento. Modifica la función usando `splice()` para eliminar los dos primeros elementos del arreglo y agrega `'DarkSalmon'` y `'BlanchedAlmond'` en sus respectivos lugares.

# --hints--

`htmlColorNames` debe devolver `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

La función `htmlColorNames` debe utilizar el método `splice()`

```js
assert(/.splice/.test(code));
```

No debes usar `shift()` o `unshift()`.

```js
assert(!/shift|unshift/.test(code));
```

No debes usar notación de corchetes.

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
