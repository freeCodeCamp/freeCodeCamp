---
id: 596e457071c35c882915b3e4
title: 文字列リストの比較
challengeType: 1
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

A list is an ordered set of values that may contain duplicates. Here is an example:

```js
const list = [['AA',  'BB', 'CC'], ['AA', 'ACB', 'AA'], [], ['AA']];
```

Given a list of arbitrarily many strings, implement a function for each of the following conditions:

<ul>
  <li>それらがすべて語彙として等しいかどうかをテストします</li>
  <li>すべての文字列がその後の文字列よりも語彙として短いかどうかをテストします (例えば、リストが厳密な昇順であるかどうか)</li>
</ul>

# --hints--

`allEqual` should be a function.

```js
assert(typeof allEqual === 'function');
```

`azSorted` should be a function.

```js
assert(typeof azSorted === 'function');
```

`allEqual(["AA", "AA", "AA", "AA"])` should return true.

```js
assert(allEqual(testCases[0]));
```

`azSorted(["AA", "AA", "AA", "AA"])` should return false.

```js
assert(!azSorted(testCases[0]));
```

`allEqual(["AA", "ACB", "BB", "CC"])` should return false.

```js
assert(!allEqual(testCases[1]));
```

`azSorted(["AA", "ACB", "BB", "CC"])` should return true.

```js
assert(azSorted(testCases[1]));
```

`allEqual([])` should return true.

```js
assert(allEqual(testCases[2]));
```

`azSorted([])` should return true.

```js
assert(azSorted(testCases[2]));
```

`allEqual(["AA"])` should return true.

```js
assert(allEqual(testCases[3]));
```

`azSorted(["AA"])` should return true.

```js
assert(azSorted(testCases[3]));
```

`allEqual(["BB", "AA"])` should return false.

```js
assert(!allEqual(testCases[4]));
```

`azSorted(["BB", "AA"])` should return false.

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
