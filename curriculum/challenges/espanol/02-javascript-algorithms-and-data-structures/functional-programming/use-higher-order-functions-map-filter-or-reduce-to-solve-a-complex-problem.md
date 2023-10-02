---
id: 587d7b88367417b2b2512b45
title: 'Utiliza las funciones de orden superior "map", "filter" o "reduce" para resolver un problema complejo'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Ahora que has superado algunos desafíos usando funciones de orden superior como `map()`, `filter()`, y `reduce()`, ahora puedes aplicarlos para resolver un desafío más complejo.

# --instructions--

Completa el código para la función `squareList` usando cualquier combinación de `map()`, `filter()`, y `reduce()`. La función debe devolver un nuevo arreglo que contenga los cuadrados de *solamente* los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es `[-3, 4.8, 5, 3, -3.2]`.

**Nota:** Tu función no debe usar ningún tipo de bucle `for` o `while` o la función `forEach()`.

# --hints--

`squareList` debe ser una función (`function`).

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for`, `while`, y `forEach` no deben ser usados.

```js
assert(!code.match(/for|while|forEach/g));
```

`map`, `filter`, o `reduce` deben ser usados.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

La función debe devolver un arreglo (`array`).

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` debe devolver `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` debe devolver `[9, 100, 49]`.

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
