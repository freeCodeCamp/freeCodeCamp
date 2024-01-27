---
id: 5a23c84252665b21eecc8013
title: 排序算法/链排序
challengeType: 1
forumTopicId: 302319
dashedName: sorting-algorithmsstrand-sort
---

# --description--

The **Strand sort** creates sorted subsets that are merged to create the final result.

审议一个 `未排序数组 = [3, 1, 4, 2]`。 选择第一个项目 `3` 并将其复制到一个单独的数组。 搜索此项目后面的任何较大的项目。 当你发现一个更大的项目时，在这种情况下 `4`, 复制它到单独的数组， `[3, 4]`, 并比较以下项目到这个新值， ``。

到达数组末尾之后，删除所复制的项目，` [3,4] ` ，然后重新开始，使用 ` unsortedArray ` 中剩余的第一个项目，在本例中为 ` 1 ` 。

按照这个进程结果排列两个排序数组， `[3, 4]` and `[1, 2]`。 合并这两个数组以创建 `字符串排序数组`。

```js
const unsortedArray = [3, 1, 4, 2];
const strandsortedArray = [1, 2, 3, 4];
```

编写一个函数来使用 **Strand sort** 对数组进行排序。 该函数应返回排序后的数组。


# --hints--

`strandSort` 应该是一个函数。

```js
assert(typeof strandSort == 'function');
```

`strandSort([25, 32, 12, 7, 20])` 应该返回一个数组。

```js
assert(Array.isArray(strandSort([25, 32, 12, 7, 20])));
```

`strandSort([25, 32, 12, 7, 20])` 应该返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(strandSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`strandSort([38, 45, 35, 8, 13])` 应该返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(strandSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`strandSort([43, 36, 20, 34, 24])` 应该返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(strandSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`strandSort([12, 33, 26, 18, 1, 16, 38])` 应该返回 `[1, 12, 16, 18, 26, 33, 38]`。

```js
assert.deepEqual(strandSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`strandSort([3, 39, 48, 16, 1, 4, 29])` 应该返回 `[1, 3, 4, 16, 29, 39, 48]`。

```js
assert.deepEqual(strandSort([3, 39, 48, 16, 1, 4, 29]), [
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
function strandSort(list) {

}
```

# --solutions--

```js
function strandSort(list) {
  function merge(left, right) {
    var result = [];
    while (left.length != 0 && right.length != 0) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    result.push.apply(result, left);
    result.push.apply(result, right);
    return result;
  }

  if (list.length <= 1) return list;
  var result = [];
  while (list.length > 0) {
    var sorted = [];
    sorted.push(list.shift());
    var len = list.length;
    for (var i = 1; i < len; i++) {
      var elem = list[i];
      if (sorted[i - 1] <= elem) {
        sorted.push(elem);
        sorted.splice(i, 1);
      }
    }

    result = merge(result, sorted);
  }
  return result;
}
```
