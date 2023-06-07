---
id: 587d7da9367417b2b2512b67
title: Agrega elementos al final de un arreglo utilizando concat en lugar de push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

La programación funcional consiste en crear y utilizar funciones no mutantes.

En el reto anterior se introdujo el método `concat` como una forma de unir varios arreglos en uno nuevo sin alterar los arreglos originales. Compara `concat` con el método `push`. `push` añade elementos al final del propio arreglo sobre el que es invocado, alterando dicho arreglo. Aquí hay un ejemplo:

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` habría sido modificado a `[1, 2, 3, 4, 5, 6]`, hecho que no cumple con los principios de la programación funcional.

`concat` ofrece una manera de unir nuevos elementos al final del arreglo sin ningún efecto colateral.

# --instructions--

Cambia la función `nonMutatingPush` de manera que utilice `concat` para unir `newItem` al final de `original` sin alterar los arreglos `original` o `newItem`. La función debe devolver un arreglo.

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

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
