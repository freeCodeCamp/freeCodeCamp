---
id: 596e457071c35c882915b3e4
title: Порівняйте список рядків
challengeType: 5
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

Маючи список [list](https://en.wikipedia.org/wiki/List_(abstract_data_type) "wp: List\_(abstract_data_type)") з довільної кількості рядків, реалізуйте функцію для кожної з наступних умов:

<ul>
  <li>перевірте, чи всі вони лексично рівні</li>
  <li>перевірте, чи кожен рядок лексично менший за той, що після нього (тобто чи список у порядку зростання)</li>
</ul>

# --hints--

`allEqual` має бути функцією.

```js
assert(typeof allEqual === 'function');
```

`azSorted` має бути функцією.

```js
assert(typeof azSorted === 'function');
```

Функція `allEqual(["AA", "AA", "AA", "AA"])` має повернути true.

```js
assert(allEqual(testCases[0]));
```

Функція `azSorted(["AA", "AA", "AA", "AA"])` має повернути false.

```js
assert(!azSorted(testCases[0]));
```

Функція `allEqual(["AA", "ACB", "BB", "CC"])` має повернути false.

```js
assert(!allEqual(testCases[1]));
```

Функція `azSorted(["AA", "ACB", "BB", "CC"])` має повернути true.

```js
assert(azSorted(testCases[1]));
```

Функція `allEqual([])` має повернути true.

```js
assert(allEqual(testCases[2]));
```

Функція `azSorted([])` має повернути true.

```js
assert(azSorted(testCases[2]));
```

Функція `allEqual(["AA"])` має повернути true.

```js
assert(allEqual(testCases[3]));
```

Функція `azSorted(["AA"])` має повернути true.

```js
assert(azSorted(testCases[3]));
```

Функція `allEqual(["BB", "AA"])` має повернути false.

```js
assert(!allEqual(testCases[4]));
```

Функція `azSorted(["BB", "AA"])` має повернути false.

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
