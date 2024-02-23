---
id: 5a23c84252665b21eecc800b
title: 排序算法/煎餅排序
challengeType: 1
forumTopicId: 302315
dashedName: sorting-algorithmspancake-sort
---

# --description--

Write a function to sort an array of integers (of any convenient size) into ascending order using Pancake sorting. The function should return the sorted array.

簡而言之，不是對單個元素進行排序，唯一允許的操作是“翻轉”列表的一端，如下所示：

<pre>Before:
<b>6 7 8 9</b> 2 5 3 4 1<br>
After:
<b>9 8 7 6</b> 2 5 3 4 1
</pre>

只能翻轉列表的一端；這應該是低端，但如果更容易編碼或工作得更好，高端也可以，但它**必須**是整個解決方案的同一端。 （翻轉的結尾不能隨意更改。）

# --hints--

`pancakeSort` 應該是一個函數。

```js
assert(typeof pancakeSort == 'function');
```

`pancakeSort([25, 32, 12, 7, 20])` 應該返回一個數組。

```js
assert(Array.isArray(pancakeSort([25, 32, 12, 7, 20])));
```

`pancakeSort([25, 32, 12, 7, 20])` 應該返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(pancakeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`pancakeSort([38, 45, 35, 8, 13])` 應該返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(pancakeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`pancakeSort([43, 36, 20, 34, 24])` 應該返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(pancakeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`pancakeSort([12, 33, 26, 18, 1, 16, 38])` 應該返回`[1, 12, 16, 18, 26, 33, 38]`。

```js
assert.deepEqual(pancakeSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`pancakeSort([3, 39, 48, 16, 1, 4, 29])` 應該返回`[1, 3, 4, 16, 29, 39, 48]`。

```js
assert.deepEqual(pancakeSort([3, 39, 48, 16, 1, 4, 29]), [
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
function pancakeSort(arr) {

}
```

# --solutions--

```js
function pancakeSort(arr) {
  for (var i = arr.length - 1; i >= 1; i--) {
    // find the index of the largest element not yet sorted
    var max_idx = 0;
    var max = arr[0];
    for (var j = 1; j <= i; j++) {
      if (arr[j] > max) {
        max = arr[j];
        max_idx = j;
      }
    }

    if (max_idx == i) continue; // element already in place

    var new_slice;

    // flip arr max element to index 0
    if (max_idx > 0) {
      new_slice = arr.slice(0, max_idx + 1).reverse();
      for (var j = 0; j <= max_idx; j++) arr[j] = new_slice[j];
    }

    // then flip the max element to its place
    new_slice = arr.slice(0, i + 1).reverse();
    for (var j = 0; j <= i; j++) arr[j] = new_slice[j];
  }
  return arr;
}
```
