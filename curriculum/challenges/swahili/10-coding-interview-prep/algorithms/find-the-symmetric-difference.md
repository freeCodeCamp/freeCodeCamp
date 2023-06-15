---
id: a3f503de51cf954ede28891d
title: Find the Symmetric Difference
challengeType: 1
forumTopicId: 301611
dashedName: find-the-symmetric-difference
---

# --description--

The mathematical term <dfn>symmetric difference</dfn> (`△` or `⊕`) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets `A = {1, 2, 3}` and `B = {2, 3, 4}`, `A △ B = {1, 4}`.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among *three* elements (`A △ B △ C`), you must complete one operation at a time. Thus, for sets `A` and `B` above, and `C = {2, 3}`, `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}`.

# --instructions--

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (*no duplicates*).

# --hints--

`sym([1, 2, 3], [5, 2, 1, 4])` should return `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4])` should contain only three elements.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` should return `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]);
```

`sym([1, 2, 3, 3], [5, 2, 1, 4])` should contain only three elements.

```js
assert.equal(sym([1, 2, 3, 3], [5, 2, 1, 4]).length, 3);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` should return `[3, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]);
```

`sym([1, 2, 3], [5, 2, 1, 4, 5])` should contain only three elements.

```js
assert.equal(sym([1, 2, 3], [5, 2, 1, 4, 5]).length, 3);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` should return `[1, 4, 5]`.

```js
assert.sameMembers(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]);
```

`sym([1, 2, 5], [2, 3, 5], [3, 4, 5])` should contain only three elements.

```js
assert.equal(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length, 3);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` should return `[1, 4, 5]`.

```js
assert.sameMembers(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
```

`sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])` should contain only three elements.

```js
assert.equal(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length, 3);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` should return `[2, 3, 4, 6, 7]`.

```js
assert.sameMembers(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]),
  [2, 3, 4, 6, 7]
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])` should contain only five elements.

```js
assert.equal(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length,
  5
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` should return `[1, 2, 4, 5, 6, 7, 8, 9]`.

```js
assert.sameMembers(
  sym(
    [3, 3, 3, 2, 5],
    [2, 1, 5, 7],
    [3, 4, 6, 6],
    [1, 2, 3],
    [5, 3, 9, 8],
    [1]
  ),
  [1, 2, 4, 5, 6, 7, 8, 9]
);
```

`sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])` should contain only eight elements.

```js
assert.equal(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])
    .length,
  8
);
```

# --seed--

## --seed-contents--

```js
function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
```

# --solutions--

```js
function sym() {
  var arrays = [].slice.call(arguments);
  return arrays.reduce(function (symDiff, arr) {
    return symDiff.concat(arr).filter(function (val, idx, theArr) {
      return theArr.indexOf(val) === idx
        && (symDiff.indexOf(val) === -1 || arr.indexOf(val) === -1);
    });
  });
}
sym([1, 2, 3], [5, 2, 1, 4]);
```
