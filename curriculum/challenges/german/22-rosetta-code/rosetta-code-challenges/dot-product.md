---
id: 5a23c84252665b21eecc7e1e
title: Punktprodukt
challengeType: 1
forumTopicId: 302251
dashedName: dot-product
---

# --description--

Create a function, to compute the **dot product**, also known as the **scalar product** of two vectors.

# --hints--

`dotProduct` sollte eine Funktion zurückgeben.

```js
assert(typeof dotProduct == 'function');
```

`dotProduct([1, 3, -5], [4, -2, -1])` sollte eine Zahl zurückgeben.

```js
assert(typeof dotProduct([1, 3, -5], [4, -2, -1]) == 'number');
```

`dotProduct([1, 3, -5], [4, -2, -1])` sollte `3` zurückgeben.

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])` sollte `130` zurückgeben.

```js
assert.equal(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 130);
```

`dotProduct([5, 4, 3, 2], [7, 8, 9, 6])` sollte `106` zurückgeben.

```js
assert.equal(dotProduct([5, 4, 3, 2], [7, 8, 9, 6]), 106);
```

`dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6])` sollte `-36` zurückgeben.

```js
assert.equal(dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6]), -36);
```

`dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])` sollte `10392` zurückgeben.

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
