---
id: a789b3483989747d63b0e427
title: Retornar os maiores números em arrays
challengeType: 1
forumTopicId: 16042
dashedName: return-largest-numbers-in-arrays
---

# --description--

Retorna um array que consiste no maior número de cada sub-array fornecido. Por simplicidade, o array fornecido conterá exatamente 4 sub-arrays.

Lembre-se: você pode iterar através de um array com um loop simples, e acesse cada membro com a sintaxe de array `arr[i]`.

# --hints--

`largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])` deve retornar um array.

```js
assert(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]).constructor === Array
);
```

`largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])` deve retornar `[27, 5, 39, 1001]`.

```js
assert.deepEqual(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]),
  [27, 5, 39, 1001]
);
```

`largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])` deve retornar `[9, 35, 97, 1000000]`.

```js
assert.deepEqual(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ]),
  [9, 35, 97, 1000000]
);
```

`largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])` deve retornar `[25, 48, 21, -3]`.

```js
assert.deepEqual(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ]),
  [25, 48, 21, -3]
);
```

# --seed--

## --seed-contents--

```js
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

# --solutions--

```js
function largestOfFour(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
