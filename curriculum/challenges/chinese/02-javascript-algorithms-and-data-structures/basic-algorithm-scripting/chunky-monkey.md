---
id: a9bd25c716030ec90084d8a1
title: 分割数组
challengeType: 5
forumTopicId: 16005
---

# --description--

请编写一个函数，该函数将一个数组（第一个参数）拆分成若干长度为 `size`（第二个参数）的子数组，并将它们作为二维数组返回。

# --hints--

`chunkArrayInGroups(["a", "b", "c", "d"], 2)` 应返回 `[["a", "b"], ["c", "d"]]`。

```js
assert.deepEqual(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2), [
  ['a', 'b'],
  ['c', 'd']
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)` 应返回 `[[0, 1, 2], [3, 4, 5]]`。

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [
  [0, 1, 2],
  [3, 4, 5]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)` 应返回 `[[0, 1], [2, 3], [4, 5]]`。

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [
  [0, 1],
  [2, 3],
  [4, 5]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)` 应返回 `[[0, 1, 2, 3], [4, 5]]`。

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [
  [0, 1, 2, 3],
  [4, 5]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)` 应返回 `[[0, 1, 2], [3, 4, 5], [6]]`。

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [
  [0, 1, 2],
  [3, 4, 5],
  [6]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)` 应返回 `[[0, 1, 2, 3], [4, 5, 6, 7], [8]]`。

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8]
]);
```

`chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)` 应返回 `[[0, 1], [2, 3], [4, 5], [6, 7], [8]]`。

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8]
]);
```

# --solutions--

