---
id: 5a23c84252665b21eecc8001
title: 排序算法/珠子排序
challengeType: 1
forumTopicId: 302310
dashedName: sorting-algorithmsbead-sort
---

# --description--

A *bead sort* starts by creating a matrix of zeroes whose length is equal to the value of the largest element in the input array. The matrix is transformed by adding one to all elements between the zeroth index and the index indicated by the current element. This process is repeated, until you have filled the matrix.

遍歷該矩陣，將大於零的元素個數相加，然後將每個元素的值減一，最終得到排序後的數組。

**注意：**輸入數組中的每個元素都是唯一的。

使用珠子排序算法對一組正整數進行排序。

# --hints--

`beadSort` 應該是一個函數。

```js
assert(typeof beadSort == 'function');
```

`beadSort([25, 32, 12, 7, 20])` 應該返回一個數組。

```js
assert(Array.isArray(beadSort([25, 32, 12, 7, 20])));
```

`beadSort([25, 32, 12, 7, 20])` 應該返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(beadSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`beadSort([38, 45, 35, 8, 13])` 應該返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(beadSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`beadSort([43, 36, 20, 34, 24])` 應該返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(beadSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`beadSort([12, 33, 26, 18, 1, 16, 38])` 應該返回 `[1, 12, 16, 18, 26, 33, 38]`。

```js
assert.deepEqual(beadSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`beadSort([3, 39, 48, 16, 1, 4, 29])` 應該返回 `[1, 3, 4, 16, 29, 39, 48]`。

```js
assert.deepEqual(beadSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function beadSort(arr) {

}
```

# --solutions--

```js
function beadSort(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  const grid = new Array(arr.length);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(max);
  }
  const levelcount = new Array(max);
  levelcount.fill(0);
  for (let i = 0; i < max; i++) {
    levelcount[i] = 0;
    for (let j = 0; j < arr.length; j++) grid[j][i] = '_';
  }
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = 0; num > 0; j++) {
      grid[levelcount[j]++][j] = '*';
      num--;
    }
  }
  const sorted = new Array(arr.length);
  sorted.fill(0);
  for (let i = 0; i < arr.length; i++) {
    let putt = 0;
    for (
      let j = 0;
      j < max &&
      (function(c) {
        return c.charCodeAt == null ? c : c.charCodeAt(0);
      })(grid[arr.length - 1 - i][j]) == '*'.charCodeAt(0);
      j++
    )
      putt++;
    sorted[i] = putt;
  }
  return sorted;
}
```
