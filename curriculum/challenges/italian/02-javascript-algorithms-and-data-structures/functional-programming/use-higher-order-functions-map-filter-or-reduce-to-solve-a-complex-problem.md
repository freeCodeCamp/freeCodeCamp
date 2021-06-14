---
id: 587d7b88367417b2b2512b45
title: 'Usare le funzioni di ordine superiore map, filter o reduce per risolvere un problema complesso'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Ora che hai lavorato con alcune sfide usando funzioni di ordine superiore come `map()`, `filter()`e `reduce()`, puoi applicarle per risolvere una sfida più complessa.

# --instructions--

Completa il codice per la funzione `squareList` utilizzando qualsiasi combinazione di `map()`, `filter()`, e `reduce()`. La funzione dovrebbe restituire un nuovo array contenente i quadrati dei *soli* interi positivi (i numeri decimali non sono interi) quando viene passato un array di numeri reali. Un esempio di una serie di numeri reali è `[-3, 4.8, 5, 3, -3.2]`.

**Nota:** La tua funzione non dovrebbe utilizzare alcun tipo di ciclo `for` o `while` o la funzione `forEach()`.

# --hints--

`squareList` dovrebbe essere una `function`.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for`, `while`, e `forEach` non dovrebbero essere usati.

```js
assert(!code.match(/for|while|forEach/g));
```

Dovrebbero essere usati `map`, `filter` o `reduce`.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

La funzione dovrebbe restituire un `array`.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` dovrebbe restituire `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` dovrebbe restituire `[9, 100, 49]`.

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
