---
id: 5a23c84252665b21eecc800b
title: 排序算法/煎饼排序
challengeType: 1
forumTopicId: 302315
dashedName: sorting-algorithmspancake-sort
---

# --description--

Write a function to sort an array of integers (of any convenient size) into ascending order using Pancake sorting. The function should return the sorted array.

简而言之，不是对单个元素进行排序，唯一允许的操作是“翻转”列表的一端，如下所示：

<pre>Before:
<b>6 7 8 9</b> 2 5 3 4 1<br>
After:
<b>9 8 7 6</b> 2 5 3 4 1
</pre>

只能翻转列表的一端；这应该是低端，但如果更容易编码或工作得更好，高端也可以，但它**必须**是整个解决方案的同一端。 （翻转的结尾不能随意更改。）

# --hints--

`pancakeSort` 应该是一个函数。

```js
assert(typeof pancakeSort == 'function');
```

`pancakeSort([25, 32, 12, 7, 20])` 应该返回一个数组。

```js
assert(Array.isArray(pancakeSort([25, 32, 12, 7, 20])));
```

`pancakeSort([25, 32, 12, 7, 20])` 应该返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(pancakeSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`pancakeSort([38, 45, 35, 8, 13])` 应该返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(pancakeSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`pancakeSort([43, 36, 20, 34, 24])` 应该返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(pancakeSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`pancakeSort([12, 33, 26, 18, 1, 16, 38])` 应该返回`[1, 12, 16, 18, 26, 33, 38]`。

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

`pancakeSort([3, 39, 48, 16, 1, 4, 29])` 应该返回`[1, 3, 4, 16, 29, 39, 48]`。

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
