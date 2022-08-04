---
id: 596e457071c35c882915b3e4
title: Comparar uma lista de strings
challengeType: 1
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

Uma lista é um conjunto ordenado de valores que pode conter duplicatas. Exemplo:

```js
const list = [['AA',  'BB', 'CC'], ['AA', 'ACB', 'AA'], [], ['AA']];
```

Dada uma lista de várias strings arbitrárias, implemente uma função para cada uma das seguintes condições:

<ul>
  <li>testar se todas são lexicalmente iguais</li>
  <li>testar se cada string é lexicalmente menor do que a string imediatamente posterior (ou seja, se a lista está em ordem ascendente estrita)</li>
</ul>

# --hints--

`allEqual` deve ser uma função.

```js
assert(typeof allEqual === 'function');
```

`azSorted` deve ser uma função.

```js
assert(typeof azSorted === 'function');
```

`allEqual(["AA", "AA", "AA", "AA"])` deve retornar true.

```js
assert(allEqual(testCases[0]));
```

`azSorted(["AA", "AA", "AA", "AA"])` deve retornar false.

```js
assert(!azSorted(testCases[0]));
```

`allEqual(["AA", "ACB", "BB", "CC"])` deve retornar false.

```js
assert(!allEqual(testCases[1]));
```

`azSorted(["AA", "ACB", "BB", "CC"])` deve retornar true.

```js
assert(azSorted(testCases[1]));
```

`allEqual([])` deve retornar true.

```js
assert(allEqual(testCases[2]));
```

`azSorted([])` deve retornar true.

```js
assert(azSorted(testCases[2]));
```

`allEqual(["AA"])` deve retornar true.

```js
assert(allEqual(testCases[3]));
```

`azSorted(["AA"])` deve retornar true.

```js
assert(azSorted(testCases[3]));
```

`allEqual(["BB", "AA"])` deve retornar false.

```js
assert(!allEqual(testCases[4]));
```

`azSorted(["BB", "AA"])` deve retornar false.

```js
assert(!azSorted(testCases[4]));
```

# --seed--

## --after-user-code--

```js
const testCases = [['AA', 'AA', 'AA', 'AA'], ['AA', 'ACB', 'BB', 'CC'], [], ['AA'], ['BB', 'AA']];
```

## --seed-contents--

```js
function allEqual(arr) {

  return true;
}

function azSorted(arr) {

  return true;
}
```

# --solutions--

```js
function allEqual(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] === a[i]);
  } return out;
}

function azSorted(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] < a[i]);
  } return out;
}
```
