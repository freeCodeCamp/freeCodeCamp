---
id: 5a23c84252665b21eecc7e1e
title: Prodotto scalare
challengeType: 1
forumTopicId: 302251
dashedName: dot-product
---

# --description--

Crea una funzione per calcolare il **prodotto scalare** di due vettori.

# --hints--

`dotProduct` dovrebbe essere una funzione.

```js
assert(typeof dotProduct == 'function');
```

`dotProduct([1, 3, -5], [4, -2, -1])` dovrebbe restituire un numero.

```js
assert(typeof dotProduct([1, 3, -5], [4, -2, -1]) == 'number');
```

`dotProduct([1, 3, -5], [4, -2, -1])` dovrebbe restituire `3`.

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])` dovrebbe restituire `130`.

```js
assert.equal(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 130);
```

`dotProduct([5, 4, 3, 2], [7, 8, 9, 6])` dovrebbe restituire `106`.

```js
assert.equal(dotProduct([5, 4, 3, 2], [7, 8, 9, 6]), 106);
```

`dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6])` dovrebbe restituire `-36`.

```js
assert.equal(dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6]), -36);
```

`dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])` dovrebbe restituire `10392`.

```js
assert.equal(dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110]), 10392);
```

# --seed--

## --seed-contents--

```js
function dotProduct(ary1, ary2) {

}
```

# --solutions--

```js
function dotProduct(ary1, ary2) {
  var dotprod = 0;
  for (var i = 0; i < ary1.length; i++) dotprod += ary1[i] * ary2[i];
  return dotprod;
}
```
