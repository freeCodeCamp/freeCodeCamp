---
id: 5a23c84252665b21eecc802a
title: Stream Merge
challengeType: 1
forumTopicId: 302326
dashedName: stream-merge
---

# --description--

Write a function that takes multiple sorted arrays of items, and returns one array of sorted items.

# --hints--

`mergeLists` should be a function.

```js
assert(typeof mergeLists == 'function');
```

`mergeLists([[1, 3, 5, 9, 10], [2, 4, 6, 7, 8]])` should return an array.

```js
assert(
  Array.isArray(
    mergeLists([
      [1, 3, 5, 9, 10],
      [2, 4, 6, 7, 8]
    ])
  )
);
```

`mergeLists([[1, 3, 5, 9, 10], [2, 4, 6, 7, 8]])` should return `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

```js
assert.deepEqual(
  mergeLists([
    [1, 3, 5, 9, 10],
    [2, 4, 6, 7, 8]
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);
```

`mergeLists([[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9, 12]])` should return `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]`.

```js
assert.deepEqual(
  mergeLists([
    [1, 4, 7, 10],
    [2, 5, 8, 11],
    [3, 6, 9, 12]
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
);
```

`mergeLists([[1, 3, 9, 14, 15, 17, 28], [7, 8, 14, 14, 23, 26, 28, 29, 30], [9, 23, 25, 29]])` should return `[1, 3, 7, 8, 9, 9, 14, 14, 14, 15, 17, 23, 23, 25, 26, 28, 28, 29, 29, 30]`.

```js
assert.deepEqual(
  mergeLists([
    [1, 3, 9, 14, 15, 17, 28],
    [7, 8, 14, 14, 23, 26, 28, 29, 30],
    [9, 23, 25, 29]
  ]),
  [1, 3, 7, 8, 9, 9, 14, 14, 14, 15, 17, 23, 23, 25, 26, 28, 28, 29, 29, 30]
);
```

`mergeLists([[3, 14, 15], [2, 17, 18], [], [2, 3, 5, 7]])` should return `[2, 2, 3, 3, 5, 7, 14, 15, 17, 18]`.

```js
assert.deepEqual(mergeLists([[3, 14, 15], [2, 17, 18], [], [2, 3, 5, 7]]), [
  2,
  2,
  3,
  3,
  5,
  7,
  14,
  15,
  17,
  18
]);
```

`mergeLists([[1, 19, 1999], [17, 33, 2999, 3000], [8, 500, 3999]])` should return `[1, 8, 17, 19, 33, 500, 1999, 2999, 3000, 3999]`.

```js
assert.deepEqual(
  mergeLists([
    [1, 19, 1999],
    [17, 33, 2999, 3000],
    [8, 500, 3999]
  ]),
  [1, 8, 17, 19, 33, 500, 1999, 2999, 3000, 3999]
);
```

# --seed--

## --seed-contents--

```js
function mergeLists(lists) {

}
```

# --solutions--

```js
function mergeLists(lists) {
  function merge(l1, l2) {
    var result = [],
      i = 0,
      j = 0;
    while (l1.length && l2.length) {
      if (l1[i] <= l2[j]) {
        result.push(l1.shift());
      } else {
        result.push(l2.shift());
      }
    }

    result.push.apply(result, l1);
    result.push.apply(result, l2);
    return result;
  }

  var result = lists[0];
  for (var i = 1; i < lists.length; i++) {
    result = merge(result, lists[i]);
  }

  return result;
}
```
