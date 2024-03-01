---
id: 594810f028c0303b75339ad3
title: Produto de ponto de vetor
challengeType: 1
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

Um vetor pode ter um ou mais valores representados por uma coleção ordenada. Exemplos podem ser (x), (x, y), ou (x, y, z).

# --instructions--

Escreva uma função que receba dois vetores (representados como arrays unidimensionais) como entrada e calcule seu produto cruzado. A função deve retornar `null` para entradas inválidas como vetores de tamanhos diferentes ou que passem qualquer coisa que não seja dois vetores.

# --hints--

`dotProduct` deve ser uma função.

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` deve retornar `null`.

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` deve retornar `1`.

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` deve retornar `null`.

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` deve retornar `3`.

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` deve retornar `null`.

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` deve retornar `360`.

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
