---
id: a105e963526e7de52b219be9
title: Implement a Unique Sorted Union
challengeType: 26
dashedName: implement-a-unique-sorted-union
---

# --description--

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `uniteUnique`.
1. The `uniteUnique` function should accept two or more arrays as arguments.
1. The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like `[1, 2, 4], [2, 3, 5]` would have an output of `[1, 2, 4, 3, 5]`.

# --hints--

You should have a `uniteUnique` function.

```js
assert.isFunction(uniteUnique);
```

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` should return `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` should return `[1, 2, 3, 5]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` should return `[1, 2, 3, 5, 4, 6, 7, 8]`.

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

`uniteUnique([1, 3, 2], [5, 4], [5, 6])` should return `[1, 3, 2, 5, 4, 6]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 4], [5, 6]), [1, 3, 2, 5, 4, 6]);
```

`uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])` should return `[1, 3, 2, 5, 4]`.

```js
assert.deepEqual(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const uniteUnique = (...arrays) => {
  return arrays.reduce((a, b) => {
    return [
      ...a,
      ...b.filter((e, currentIndex) => b.indexOf(e) === currentIndex && a.indexOf(e) === -1)
    ];
  }, []);
};
```
