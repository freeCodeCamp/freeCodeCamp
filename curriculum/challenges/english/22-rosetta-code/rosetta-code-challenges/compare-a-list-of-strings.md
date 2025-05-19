---
id: 596e457071c35c882915b3e4
title: Compare a list of strings
challengeType: 1
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

A list is an ordered set of values that may contain duplicates. Here is an example:

```js
const list = [['AA',  'BB', 'CC'], ['AA', 'ACB', 'AA'], [], ['AA']];
````

Given a list of arbitrarily many strings, implement a function for each of the following conditions:

<ul>
  <li>test if they are all lexically equal</li>
  <li>test if every string is lexically less than the one after it  (i.e. whether the list is in strict ascending order)</li>
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
assert(allEqual(['AA', 'AA', 'AA', 'AA']));
```

`azSorted(["AA", "AA", "AA", "AA"])` should return false.

```js
assert(!azSorted(["AA", "AA", "AA", "AA"]));
```

`allEqual(["AA", "ACB", "BB", "CC"])` should return false.

```js
assert(!allEqual(["AA", "ACB", "BB", "CC"]));
```

`azSorted(["AA", "ACB", "BB", "CC"])` should return true.

```js
assert(azSorted(["AA", "ACB", "BB", "CC"]));
```

`allEqual([])` should return true.

```js
assert(allEqual([]));
```

`azSorted([])` should return true.

```js
assert(azSorted([]));
```

`allEqual(["AA"])` should return true.

```js
assert(allEqual(["AA"]));
```

`azSorted(["AA"])` should return true.

```js
assert(azSorted(["AA"]));
```

`allEqual(["BB", "AA"])` should return false.

```js
assert(!allEqual(["BB", "AA"]));
```

`azSorted(["BB", "AA"])` should return false.

```js
assert(!azSorted(["BB", "AA"]));
```

# --seed--

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
