---
id: a6e40f1041b06c996f7b2406
title: Buscadores guardianes
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

Crea una función que recorra un arreglo `arr` y devuelva el primer elemento que pase un "detector de verdad". Esto significa que dado un elemento `x`, el "detector de verdad" es pasado si `func(x)` es `true`. Si ningún elemento pasa la prueba. la función debería devolver `undefined`.

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` debe devolver `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` debe devolver `undefined`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
