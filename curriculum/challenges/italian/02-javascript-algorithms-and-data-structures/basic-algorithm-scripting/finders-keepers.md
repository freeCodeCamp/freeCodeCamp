---
id: a6e40f1041b06c996f7b2406
title: Chi trova tiene
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

Crea una funzione che scorre un array `arr` e restituisce il primo elemento che passa un 'test di verità'. Ciò significa che, dato un elemento `x`, il 'test di verità' viene superato se `func(x)` è `true`. Se nessun elemento supera il test, restituisce `undefined`.

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` dovrebbe restituire `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` dovrebbe restituire `undefined`.

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
