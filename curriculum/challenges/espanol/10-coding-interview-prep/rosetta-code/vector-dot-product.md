---
id: 594810f028c0303b75339ad3
title: Producto punto de vectores
challengeType: 1
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

Un vector puede tener uno o más valores representados por una colección ordenada. Por ejemplo (x), (x, y), o (x, y, z).

# --instructions--

Escribe una función que tome dos vectores (representados como arreglos unidimensionales) como entrada y calcule su producto punto. Tu función debe devolver `null` en entradas inválidas como vectores de diferentes longitud o ingresando cualquier cosa aparte de dos vectores.

# --hints--

`dotProduct` debe ser una función.

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` debe devolver `null`.

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` debe devolver `1`.

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` debe devolver `null`.

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` debe devolver `3`.

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` debe devolver `null`.

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` debe devolver `360`.

```js
assert.equal(dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ]), 360);
```

# --seed--

## --seed-contents--

```js
function dotProduct(...vectors) {

}
```

# --solutions--

```js
function dotProduct(...vectors) {
  if (!vectors || !vectors.length || vectors.length > 2 || vectors[0].length !== vectors[1].length) {
    return null;
  }
  const vectorLen = vectors[0].length;

  let prod = 0;
  let sum = 0;
  let j = vectorLen;
  let i = 2;
  // Sum terms
  while (j--) {
    i = 2;
    prod = 1;

    while (i--) {
      prod *= vectors[i][j];
    }
    sum += prod;
  }
  return sum;
}
```
