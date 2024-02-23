---
id: 587d7b7b367417b2b2512b14
title: Comprueba la presencia de un elemento con indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

Ya que los arreglos pueden modificarse, o *mutarse*, en cualquier momento, no se puede garantizar dónde estará un dato concreto en un arreglo determinado, o si ese elemento sigue existiendo. Afortunadamente, JavaScript nos proporciona otro método incorporado, `indexOf()`, que nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo. `indexOf()` toma un elemento como parámetro, y cuando lo llama, devuelve la posición, o índice, de ese elemento, o `-1` si el elemento no existe en el arreglo.

Por ejemplo:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` devuelve `-1`, `indexOf('oranges')` devuelve `2`, e `indexOf('pears')` devuelve `1` (el primer índice en el que existe cada elemento).

# --instructions--

`indexOf()` puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, `quickCheck`, que toma un arreglo y un elemento como argumentos. Modifica la función usando `indexOf()` para que devuelva `true` si el elemento pasado existe en el arreglo, y `false` si no existe.

# --hints--

La función `quickCheck` debe devolver un valor booleano (`true` o `false`), no una cadena (`"true"` o `"false"`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` debe devolver `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` debe devolver `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` debe devolver `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` debe devolver `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

La función `quickCheck` debe utilizar el método `indexOf()`

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
