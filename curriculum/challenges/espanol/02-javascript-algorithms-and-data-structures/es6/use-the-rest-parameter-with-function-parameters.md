---
id: 587d7b88367417b2b2512b47
title: Utiliza el parámetro rest con parámetros de función
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

Para ayudarnos a crear funciones más flexibles, ES6 introduce el <dfn>parámetro rest</dfn> para los parámetros de función. Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos. Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.

Echa un vistazo a este código:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

La consola mostrará las cadenas `You have passed 3 arguments.` y `You have passed 4 arguments.`.

The rest parameter eliminates the need to use the `arguments` object and allows us to use array methods on the array of parameters passed to the function `howMany`.

# --instructions--

Modifica la función `sum` usando el parámetro rest de tal manera que la función `sum` sea capaz de recibir cualquier número de argumentos y devolver su suma.

# --hints--

El resultado de `sum(0,1,2)` debe ser 3

```js
assert(sum(0, 1, 2) === 3);
```

El resultado de `sum(1,2,3,4)` debe ser 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

El resultado de `sum(5)` debe ser 5

```js
assert(sum(5) === 5);
```

El resultado de `sum()` debe ser 0

```js
assert(sum() === 0);
```

`sum` debe ser una función flecha que utilice la sintaxis de parámetro rest (`...`) en el parámetro `args`.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```

# --solutions--

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```
