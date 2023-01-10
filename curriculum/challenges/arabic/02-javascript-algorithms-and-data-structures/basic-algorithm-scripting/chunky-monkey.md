---
id: a9bd25c716030ec90084d8a1
title: تقسيم المصفوفة إلي مجموعات
challengeType: 1
forumTopicId: 16005
dashedName: chunky-monkey
---

# --description--

كتابة وظيفة (function) تقسم القائمة (array) (الحَجَّة الأولى) إلى مجموعات لها طول `size` (الحَجَّة الثانية) وتنشئهما كقائمة (array) ثنائية الأبعاد.

# --hints--

`chunkArrayInGroups(["a", "b", "c", "d"], 2)` يجب أن ينتج `[["a", "b"], ["c", "d"]]`.

```js
assert.deepEqual(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2), [
  ['a', 'b'],
  ['c', 'd']
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)`> يجب أن ينتج `[[0, 1, 2], [3, 4, 5]]`.

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [
  [0, 1, 2],
  [3, 4, 5]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)` يجب أن ينتج `[[0, 1], [2, 3], [4, 5]]`.

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [
  [0, 1],
  [2, 3],
  [4, 5]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)` يجب أن ينتج `[[0, 1, 2, 3], [4, 5]]`.

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [
  [0, 1, 2, 3],
  [4, 5]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)` يجب أن ينتج `[[0, 1, 2], [3, 4, 5], [6]]`.

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [
  [0, 1, 2],
  [3, 4, 5],
  [6]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)` يجب أن ينتج `[[0, 1, 2, 3], [4, 5, 6, 7], [8]]`.

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)` يجب أن ينتج `[[0, 1], [2, 3], [4, 5], [6, 7], [8]]`.

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8]
]);
```

# --seed--

## --seed-contents--

```js
function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

# --solutions--

```js
function chunkArrayInGroups(arr, size) {
  let out = [];

  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }

  return out;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
