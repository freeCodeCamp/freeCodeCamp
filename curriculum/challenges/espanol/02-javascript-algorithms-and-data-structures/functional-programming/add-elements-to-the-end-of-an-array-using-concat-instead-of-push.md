---
id: 587d7da9367417b2b2512b67
title: Agrega elementos al final de un arreglo utilizando concat en lugar de push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

La programación funcional consiste en crear y utilizar funciones no mutantes.

El último desafío introdujo el método `concat` como una forma de combinar arreglos en uno nuevo sin mutar los arreglos originales. Compara `concat` con el método `push`. `push` añade un elemento al final del arreglo desde el que se llama, lo cual muta ese arreglo. Aquí hay un ejemplo:

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
```

`arr` tendría un valor modificado de `[1, 2, 3, [4, 5, 6]]`, que no encaja con el paradigma de la programación funcional.

`concat` ofrece una forma de añadir nuevos elementos al final de un arreglo, sin provocar ningún efecto de mutación.

# --instructions--

Cambia la función `nonMutatingPush` para que use `concat` para añadir `newItem` al final de `original` en lugar de `push`. La función debe devolver un arreglo.

# --hints--

El código debe utilizar el método `concat`.

```js
assert(code.match(/\.concat/g));
```

El código no debe utilizar el método `push`.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

El arreglo `first` no debe modificarse.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

El arreglo `second` no debe modificarse.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` debe devolver `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```
