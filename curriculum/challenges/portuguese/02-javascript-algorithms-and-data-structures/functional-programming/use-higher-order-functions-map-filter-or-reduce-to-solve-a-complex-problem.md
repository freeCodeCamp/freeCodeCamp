---
id: 587d7b88367417b2b2512b45
title: 'Usar as funções de ordem superior map, filter ou reduce para solucionar um problema complexo'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Agora que você já realizou alguns desafios usando funções de ordem superior como `map()`, `filter()` e `reduce()`, você pode usá-las para resolver um desafio mais complexo.

# --instructions--

Complete o código para a função `squareList` usando qualquer combinação de `map()`, `filter()` e `reduce()`. A função deve retornar uma nova matriz contendo *apenas* os inteiros positivos (números decimais não são inteiros) elevados ao quadrado quando uma matriz de números reais é passada para ela. Um exemplo de array de números reais é `[-3, 4.8, 5, 3, -3.2]`.

**Observação:** você não deve usar os loops `for` ou `while` ou a função `forEach()` na sua função.

# --hints--

`squareList` deve ser uma <dfn>função</dfn>.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

Loops `for`, `while`e a função `forEach` não devem ser usados.

```js
assert(!code.match(/for|while|forEach/g));
```

`map`, `filter` ou `reduce` deve ser usado.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

A função deve retornar um `array`.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` deve retornar `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` deve retornar `[9, 100, 49]`.

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
