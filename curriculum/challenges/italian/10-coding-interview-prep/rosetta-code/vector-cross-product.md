---
id: 594810f028c0303b75339ad2
title: Prodotto vettoriale
challengeType: 1
forumTopicId: 302342
dashedName: vector-cross-product
---

# --description--

Un vettore è definito come avente tre dimensioni e può essere rappresentato da una raccolta ordinata di tre numeri: (X, Y, Z).

# --instructions--

Scrivi una funzione che prende due vettori (arrays) come input e calcola il loro prodotto vettoriale. La tua funzione dovrebbe restituire `null` su input non validi, come vettori di diverse lunghezze.

# --hints--

`crossProduct` dovrebbe essere una funzione.

```js
assert.equal(typeof crossProduct, 'function');
```

`crossProduct()` dovrebbe restituire null.

```js
assert.equal(crossProduct(), null);
```

`crossProduct([1, 2, 3], [4, 5, 6])` dovrebbe restituire `[-3, 6, -3]`.

```js
assert.deepEqual(res12, exp12);
```

# --seed--

## --after-user-code--

```js
const tv1 = [1, 2, 3];
const tv2 = [4, 5, 6];
const res12 = crossProduct(tv1, tv2);
const exp12 = [-3, 6, -3];
```

## --seed-contents--

```js
function crossProduct(a, b) {

}
```

# --solutions--

```js
function crossProduct(a, b) {
  if (!a || !b) {
    return null;
  }

  // Check lengths
  if (a.length !== 3 || b.length !== 3) {
    return null;
  }

  return [
    (a[1] * b[2]) - (a[2] * b[1]),
    (a[2] * b[0]) - (a[0] * b[2]),
    (a[0] * b[1]) - (a[1] * b[0])
  ];
}
```
