---
id: 5a23c84252665b21eecc8013
title: 排序算法/鏈排序
challengeType: 1
forumTopicId: 302319
dashedName: sorting-algorithmsstrand-sort
---

# --description--

The **Strand sort** creates sorted subsets that are merged to create the final result.

審議一個 `未排序數組 = [3, 1, 4, 2]`。 選擇第一個項目 `3` 並將其複製到一個單獨的數組。 搜索此項目後面的任何較大的項目。 當你發現一個更大的項目時，在這種情況下 `4`, 複製它到單獨的數組， `[3, 4]`, 並比較以下項目到這個新值， ``。

到達數組末尾之後，刪除所複製的項目，` [3,4] ` ，然後重新開始，使用 ` unsortedArray ` 中剩餘的第一個項目，在本例中爲 ` 1 ` 。

按照這個進程結果排列兩個排序數組， `[3, 4]` and `[1, 2]`。 合併這兩個數組以創建 `字符串排序數組`。

```js
const unsortedArray = [3, 1, 4, 2];
const strandsortedArray = [1, 2, 3, 4];
```

編寫一個函數來使用 **Strand sort** 對數組進行排序。 該函數應返回排序後的數組。


# --hints--

`strandSort` 應該是一個函數。

```js
assert(typeof strandSort == 'function');
```

`strandSort([25, 32, 12, 7, 20])` 應該返回一個數組。

```js
assert(Array.isArray(strandSort([25, 32, 12, 7, 20])));
```

`strandSort([25, 32, 12, 7, 20])` 應該返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(strandSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`strandSort([38, 45, 35, 8, 13])` 應該返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(strandSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`strandSort([43, 36, 20, 34, 24])` 應該返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(strandSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`strandSort([12, 33, 26, 18, 1, 16, 38])` 應該返回 `[1, 12, 16, 18, 26, 33, 38]`。

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

`strandSort([3, 39, 48, 16, 1, 4, 29])` 應該返回 `[1, 3, 4, 16, 29, 39, 48]`。

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
