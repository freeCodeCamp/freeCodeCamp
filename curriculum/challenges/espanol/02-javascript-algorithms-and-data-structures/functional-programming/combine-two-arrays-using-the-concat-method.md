---
id: 587d7da9367417b2b2512b66
title: Combina dos arreglos utilizando el método "concat"
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concatenation</dfn> significa unir elementos de extremo a extremo. JavaScript ofrece el método `concat` para cadenas y arreglos, que funciona de la misma manera. Para arreglos, el método es llamado desde un arreglo, un segundo arrelgo es proporcionado como argumento de `concat`, este se añadirá al final del primer arreglo. Devuelve un nuevo arreglo, sin mutar ninguno de los arreglos originales. Aquí hay un ejemplo:

```js
[1, 2, 3].concat([4, 5, 6]);
```

El arreglo devuelto sería `[1, 2, 3, 4, 5, 6]`.

# --instructions--

Usa el método `concat` en la función `nonMutatingConcat` para concatenar `attach` al final de `original`. La función deber devolver el arreglo concatenado.

# --hints--

Tu código debe usar el método `concat`.

```js
assert(code.match(/\.concat/g));
```

El arreglo `first` no debe cambiar.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

El arreglo `second` no debe cambiar.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` debe devolver `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
```
