---
id: 5cc0bd7a49b71cb96132e54c
title: Usa recursión para crear un rango de números
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

Continuando con el desafío anterior, te ofrecemos otra oportunidad de crear una función recursiva para resolver un problema.

# --instructions--

Hemos definido una función llamada `rangeOfNumbers` con dos parámetros. La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro `startNum` y termina con el número representado por el parámetro `endNum`. El número inicial será siempre menor o igual que el número final. Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. También debe funcionar en el caso que `startNum` y `endNum` sean iguales.

# --hints--

Tu función debe devolver un arreglo.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

Tu código no debe utilizar bucles (`for`, `while` o funciones de orden superior como `forEach`, `map`, `filter`, o `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` debe utilizar recursión (llamadas a sí mismo) para resolver este desafío.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` debe devolver `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` debe devolver `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` debe devolver `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

No se debe usar variables globales como almacenamiento temporal del array.

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
