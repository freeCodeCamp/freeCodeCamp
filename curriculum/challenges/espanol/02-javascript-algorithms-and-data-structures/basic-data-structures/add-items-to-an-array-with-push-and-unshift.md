---
id: 587d78b2367417b2b2512b0e
title: Agrega elementos a un arreglo con push() y unshift()
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

La longitud de un arreglo, así como los tipos de datos que puede contener, no es fija. Los arreglos pueden ser definidos con la cantidad de elementos que se desee, y dichos elementos pueden ser agregados o removidos con el tiempo; en otras palabras, los arreglos son <dfn>mutables</dfn>. En este desafío, veremos dos métodos con los que podemos modificar un arreglo: `Array.push()` y `Array.unshift()`.

Ambos métodos toman uno o más elementos como parámetros y los agregan al arreglo que hizo la llamada; el método `push()` agrega los elementos al final del arreglo, mientras que `unshift()` los agrega al inicio. Considera lo siguiente:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` tendrá el valor `['XIX', 'XX', 'XXI', 'XXII']`.

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` tendrá el valor `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. Ten en cuenta que también podemos pasar variables, que nos permiten una mayor flexibilidad en la modificación dinámica de los datos de nuestro arreglo.

# --instructions--

Hemos definido una función, `mixedNumbers`, a la cual le estamos pasando un arreglo como argumento. Modifica la función utilizando `push()` y `unshift()` para agregar `'I', 2, 'three'` al principio del arreglo y `7, 'VIII', 9` al final, de tal modo que el arreglo devuelto contenga las representaciones de los números del 1 al 9 en orden.

# --hints--

`mixedNumbers(["IV", 5, "six"])` ahora debe devolver `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]`

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

La función `mixedNumbers` debe utilizar el método `push()`

```js
assert(mixedNumbers.toString().match(/\.push/));
```

La función `mixedNumbers` debe utilizar el método `unshift()`

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

# --solutions--

```js
function mixedNumbers(arr) {
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  return arr;
}
```
