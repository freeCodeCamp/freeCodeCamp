---
id: 595671d4d2cdc305f0d5b36f
title: Hash de dois arrays
challengeType: 1
forumTopicId: 302283
dashedName: hash-from-two-arrays
---

# --description--

Dados dois arrays, crie um objeto hash onde os elementos de um array (as chaves) estejam ligados aos elementos do outro array (os valores).

Exemplo:

```js
const firstArr = [1, 2, 3];
const secondArr = ["a", "b", "c"];
const hashObj = arrToObj(firstArr, secondArr);
```

O objeto hash criado a partir dos arrays acima será `{1: "a", 2: "b", 3: "c"}`.

# --hints--

`arrToObj` deve ser uma função.

```js
assert(typeof arrToObj === 'function');
```

`arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d", "e"])` deve retornar `{ 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }`

```js
assert.deepEqual(arrToObj(...testCases[0]), res[0]);
```

`arrToObj([1, 2, 3, 4, 5], ["a", "b", "c", "d"])` deve retornar `{ 1: "a", 2: "b", 3: "c", 4: "d", 5: undefined }`

```js
assert.deepEqual(arrToObj(...testCases[1]), res[1]);
```

`arrToObj([1, 2, 3], ["a", "b", "c", "d", "e"])` deve retornar `{ 1: "a", 2: "b", 3: "c" }`

```js
assert.deepEqual(arrToObj(...testCases[2]), res[2]);
```

`arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])` deve retornar `{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": 5 }`

```js
assert.deepEqual(arrToObj(...testCases[3]), res[3]);
```

`arrToObj(["a", "b", "c", "d", "e"], [1, 2, 3, 4])` deve retornar `{ "a": 1, "b": 2, "c": 3 , "d": 4, "e": undefined }`

```js
assert.deepEqual(arrToObj(...testCases[4]), res[4]);
```

`arrToObj(["a", "b", "c"], [1, 2, 3, 4, 5])` deve retornar `{ "a": 1, "b": 2, "c": 3 }`

```js
assert.deepEqual(arrToObj(...testCases[5]), res[5]);
```

# --seed--

## --after-user-code--

```js
const testCases = [
  [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']],
  [[1, 2, 3, 4, 5], ['a', 'b', 'c', 'd']],
  [[1, 2, 3], ['a', 'b', 'c', 'd', 'e']],
  [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]],
  [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4]],
  [['a', 'b', 'c'], [1, 2, 3, 4, 5]]
];

const res = [
  { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' },
  { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: undefined },
  { 1: 'a', 2: 'b', 3: 'c' },
  { a: 1, b: 2, c: 3, d: 4, e: 5 },
  { a: 1, b: 2, c: 3, d: 4, e: undefined },
  { a: 1, b: 2, c: 3 }
];
```

## --seed-contents--

```js
function arrToObj (keys, vals) {

  return true;
}
```

# --solutions--

```js
function arrToObj (keys, vals) {
  return keys.reduce((map, key, index) => {
    map[key] = vals[index];
    return map;
  }, {});
}
```
