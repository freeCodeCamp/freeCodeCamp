---
id: a6e40f1041b06c996f7b2406
title: Achar não é roubar
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

Crie uma função que olhe através do array `arr` e retorne o primeiro elemento dentro do array que passe pelo 'teste de verdade' ('truth test'). Isso significa que, dado um elemento `x`, o 'teste de verdade' é verdadeiro se `func(x)` é `true`. Se nenhum elemento passa no test, retorna `undefined`.

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` deve retornar `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` deve retornar `undefined`.

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
