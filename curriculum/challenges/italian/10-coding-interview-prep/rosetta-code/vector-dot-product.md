---
id: 594810f028c0303b75339ad3
title: Prodotto scalare
challengeType: 1
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

Un vettore può avere uno o più valori rappresentati da una collezione ordinata. Esempi potrebbero essere (x), (x, y), o (x, y, z).

# --instructions--

Scrivi una funzione che prende due vettori (rappresentati come matrici unidimensionali) come input e calcola il loro prodotto scalare. La tua funzione dovrebbe restituire `null` per input non validi come vettori di diverse lunghezze, o per qualsiasi cosa che non sia due vettori.

# --hints--

`dotProduct` dovrebbe essere una funzione.

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` dovrebbe restituire `null`.

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` dovrebbe restituire `1`.

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` dovrebbe restituire `null`.

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` dovrebbe restituire `3`.

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` dovrebbe restituire `null`.

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` dovrebbe restituire `360`.

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
