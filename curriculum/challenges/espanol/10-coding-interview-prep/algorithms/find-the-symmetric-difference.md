---
id: a3f503de51cf954ede28891d
title: Encuentra la diferencia simétrica
challengeType: 1
forumTopicId: 301611
dashedName: find-the-symmetric-difference
---

# --description--

El término matemático <dfn>diferencia simétrica</dfn> (`△` or `⊕`) de dos conjuntos es el conjunto de elementos que están en cualquiera de los dos conjuntos, pero no en ambos. Por ejemplo, para los conjuntos `A = {1, 2, 3}` y `B = {2, 3, 4}`, `A △ B = {1, 4}`.

Diferencia simétrica es una operación binaria, significa que opera en solo dos elementos. Entonces, para evaluar una expresión que involucra diferencias simétricas entre * tres * elementos (`A △ B △ C`), tienes que completar una operación a la vez. Asi, para los conjuntos `A` y `B` encima, y `C = {2, 3}`, `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}`.

# --instructions--

Cree una función que tome dos o más arrays y devuelva una array de sus diferencias. La array que se devuelve debe contener solo valores únicos (*no duplicados*).

# --hints--

`sym([1, 2, 3], [5, 2, 1, 4])` debería retornar `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4])`debería contener solo tres elementos.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` debería retornar `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` debería contener solo tres elementos.

```js
assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` debería retornar `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` debería contener solo tres elementos.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` debería retornar `[1, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` debería contener solo tres elementos.

```js
assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` debería retornar `[1, 4, 5]`.

```js
assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` debería contener solo tres elementos.

```js
assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` debería retornar `[2, 3, 4, 6, 7]`.

```js
assert.sameMembers(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
  [2, 3, 4, 6, 7]
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` debería contener solo cinco elementos.

```js
assert.equal(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length,
  5
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` debería retornar `[1, 2, 4, 5, 6, 7, 8, 9]`.

```js
assert.sameMembers(
  sym(
    [3, 3, 3, 2, 5],
    [2, 1, 5, 7],
    [3, 4, 6, 6],
    [1, 2, 3],
    [5, 3, 9, 8],
    [1]
  ),
  [1, 2, 4, 5, 6, 7, 8, 9]
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` debería contener solo ocho elementos.

```js
assert.equal(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
    .length,
  8
);
```

# --seed--

## --seed-contents--

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
```

# --solutions--

```js
function sym() {
  var arrays = [].slice.call(arguments);
  return arrays.reduce(function (symDiff, arr) {
    return symDiff.concat(arr).filter(function (val, idx, theArr) {
      return theArr.indexOf(val) === idx
        && (symDiff.indexOf(val) === -1 || arr.indexOf(val) === -1);
    });
  });
}
sym([1, 2, 3], [5, 2, 1, 4]);
```
