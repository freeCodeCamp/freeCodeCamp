---
id: a3f503de51cf954ede28891d
title: Encontrar a diferença simétrica
challengeType: 1
forumTopicId: 301611
dashedName: find-the-symmetric-difference
---

# --description--

O termo matemático <dfn>diferença simétrica</dfn> (`△` ou `⊕`) de dois conjuntos é o conjunto de elementos que estão em um dos dois conjuntos, mas não em ambos. Por exemplo, para os conjuntos `A = {1, 2, 3}` e `B = {2, 3, 4}`, `A △ B = {1, 4}`.

A diferença simétrica é uma operação binária, o que significa que opera em apenas dois elementos. Assim, para avaliar uma expressão que envolva diferenças simétricas entre *três* elementos (`A △ B △ C`), você deve completar uma operação por vez. Portanto, para os conjuntos `A` e `B` acima, e `C = {2, 3}`, `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}`.

# --instructions--

Crie uma função que receba dois ou mais arrays e retorne um array de sua diferença simétrica. O array retornado deve conter apenas valores únicos (*sem duplicatas*).

# --hints--

`sym([1, 2, 3], [5, 2, 1, 4])` deve retornar `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4])` deve conter apenas três elementos.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` deve retornar `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` deve conter apenas três elementos.

```js
assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` deve retornar `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` deve conter apenas três elementos.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` deve retornar `[1, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` deve conter apenas três elementos.

```js
assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` deve retornar `[1, 4, 5]`.

```js
assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` deve conter apenas três elementos.

```js
assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` deve retornar `[2, 3, 4, 6, 7]`.

```js
assert.sameMembers(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
  [2, 3, 4, 6, 7]
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` deve conter apenas cinco elementos.

```js
assert.equal(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length,
  5
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` deve retornar `[1, 2, 4, 5, 6, 7, 8, 9]`.

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

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` deve conter apenas oito elementos.

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
