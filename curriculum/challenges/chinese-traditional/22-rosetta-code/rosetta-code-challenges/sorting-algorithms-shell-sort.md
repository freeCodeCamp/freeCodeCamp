---
id: 5a23c84252665b21eecc8010
title: 排序算法/Shell 排序
challengeType: 1
forumTopicId: 302317
dashedName: sorting-algorithmsshell-sort
---

# --description--

Write a function to sort an array of elements using the Shell sort algorithm, a diminishing increment sort. The function should return the sorted array.

Shell 排序（也稱爲 Shellsort 或 Shell 方法）以其發明者 Donald Shell 的名字命名，他於 1959 年發佈了該算法。

Shell 排序是基於增量序列的交錯插入排序序列。 每次通過後增量大小都會減小，直到增量大小爲 1。

增量大小爲 1 時，排序是基本的插入排序，但此時數據可以保證幾乎已排序，這是插入排序的“最佳情況”。

只要以 1 結尾，任何序列都會對數據進行排序，但有些序列比其他序列更好。

實證研究表明，比率約爲 2.2 的幾何增量序列在實踐中效果很好。

# --hints--

`shellSort` 應該是一個函數。

```js
assert(typeof shellSort == 'function');
```

`shellSort([25, 32, 12, 7, 20])` 應該返回一個數組。

```js
assert(Array.isArray(shellSort([25, 32, 12, 7, 20])));
```

`shellSort([25, 32, 12, 7, 20])` 應該返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(shellSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`shellSort([38, 45, 35, 8, 13])` 應該返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(shellSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`shellSort([43, 36, 20, 34, 24])` 應該返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(shellSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`shellSort([12, 33, 26, 18, 1, 16, 38])` 應該返回 `[1, 12, 16, 18, 26, 33, 38]`。

```js
assert.deepEqual(shellSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`shellSort([3, 39, 48, 16, 1, 4, 29])` 應該返回`[1, 3, 4, 16, 29, 39, 48]`。

```js
assert.deepEqual(shellSort([3, 39, 48, 16, 1, 4, 29]), [
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
function shellSort(a) {

}
```

# --solutions--

```js
function shellSort(a) {
  for (var h = a.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < a.length; i++) {
      var k = a[i];
      for (var j = i; j >= h && k < a[j - h]; j -= h) a[j] = a[j - h];
      a[j] = k;
    }
  }
  return a;
}
```
