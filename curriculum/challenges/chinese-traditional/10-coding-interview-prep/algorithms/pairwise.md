---
id: a3f503de51cfab748ff001aa
title: 成對
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

給定一個數組 `arr` ，找到其中總和等於第二個參數 `arg` 的元素對，並返回它們的索引之和。

你可以使用具有相同數字元素但索引不同的多個對。 每對應使用盡可能低的索引。 一旦元素被使用，它就不能被重用來與另一個元素配對。 例如， `pairwise([1, 1, 2], 3)` 使用索引爲 0 的 1，而不是索引爲 1 的 1 來創建一對 `[2, 1]`，因爲 0 + 2 &lt; 1 + 2。

例如， `pairwise([7, 9, 11, 13, 15], 20)` 返回 `6`。 總和爲 20 的對是 `[7, 13]` 和 `[9, 11]`。 然後我們可以用它們的索引和值寫出數組。

<div style='margin-left: 2em;'>

| 索引 | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| 值 | 7 | 9 | 11 | 13 | 15 |

</div>

接下來，我們將獲取它們的相應索引並添加它們。

<div style='margin-left: 2em;'>

7 + 13 = 20 → 索引 0 + 3 = 3  
9 + 11 = 20 → 索引 1 + 2 = 3  
3 + 3 = 6 →返回 `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` 應該返回 11。

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` 應返回 1。

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` 應該返回 1。

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` 應該返回10。

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` 應該返回 0。

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
