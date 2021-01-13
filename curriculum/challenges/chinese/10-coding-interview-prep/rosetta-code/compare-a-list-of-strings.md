---
id: 596e457071c35c882915b3e4
title: 比较字符串列表
challengeType: 5
videoUrl: ''
dashedName: compare-a-list-of-strings
---

# --description--

<p>给定一个任意多个字符串的<a href='https://en.wikipedia.org/wiki/List_(abstract_data_type)' title='wp：List_（abstract_data_type）'>列表</a> ，为以下每个条件实现一个函数： </p>测试它们是否都是词法上相等的测试，如果每个字符串在词法上小于它之后的字符串（即列表是否按严格的升序排列）

# --hints--

`allEqual`是一个函数。

```js
assert(typeof allEqual === 'function');
```

`azSorted`是一个函数。

```js
assert(typeof azSorted === 'function');
```

`allEqual(["AA", "AA", "AA", "AA"])`返回true。

```js
assert(allEqual(testCases[0]));
```

`azSorted(["AA", "AA", "AA", "AA"])`返回false。

```js
assert(!azSorted(testCases[0]));
```

`allEqual(["AA", "ACB", "BB", "CC"])`返回false。

```js
assert(!allEqual(testCases[1]));
```

`azSorted(["AA", "ACB", "BB", "CC"])`返回true。

```js
assert(azSorted(testCases[1]));
```

`allEqual([])`返回true。

```js
assert(allEqual(testCases[2]));
```

`azSorted([])`返回true。

```js
assert(azSorted(testCases[2]));
```

`allEqual(["AA"])`返回true。

```js
assert(allEqual(testCases[3]));
```

`azSorted(["AA"])`返回true。

```js
assert(azSorted(testCases[3]));
```

`allEqual(["BB", "AA"])`返回false。

```js
assert(!allEqual(testCases[4]));
```

`azSorted(["BB", "AA"])`返回false。

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
