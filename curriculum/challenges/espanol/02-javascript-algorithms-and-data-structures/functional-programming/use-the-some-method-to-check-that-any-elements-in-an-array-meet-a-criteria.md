---
id: 587d7dab367417b2b2512b6f
title: Usa el método "some" para comprobar si algún elemento en un arreglo cumple un criterio
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

El método `some` funciona con arreglos para comprobar si *algún* elemento pasa una prueba en particular. Devuelve un valor booleano `true` si alguno de los valores cumple el criterio, `false` si no.

Por ejemplo, el siguiente código comprobará si algún elemento en el arreglo `numbers` es menor que 10:

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

El método `some` devolverá `true`.

# --instructions--

Utiliza el método `some` dentro de la función `checkPositive` para comprobar si algún elemento en `arr` es positivo. La función debe devolver un valor booleano.

# --hints--

Tu código debe usar el método `some`.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` debe devolver `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` debe devolver `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` debe devolver `false`.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
