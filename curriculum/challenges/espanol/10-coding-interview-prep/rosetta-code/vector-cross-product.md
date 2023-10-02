---
id: 594810f028c0303b75339ad2
title: Producto Cruz de Vectores
challengeType: 1
forumTopicId: 302342
dashedName: vector-cross-product
---

# --description--

Un vector se dice de tres dimensiones cuando es representado por una colección ordenada de tres números: (X, Y, Z).

# --instructions--

Escriba una función que tome dos vectores (arreglos) como entrada y calcule su producto cruz. Tu función debe devolver `null` en entradas inválidas como vectores de diferentes longitud.

# --hints--

`crossProduct` debe ser una función.

```js
assert.equal(typeof crossProduct, 'function');
```

`crossProduct()` debe retornar null.

```js
assert.equal(crossProduct(), null);
```

`crossProduct([1, 2, 3], [4, 5, 6])` debe retornar `[-3, 6, -3]`.

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
