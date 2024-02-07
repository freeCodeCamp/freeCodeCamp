---
id: 5a23c84252665b21eecc8002
title: 排序算法/Bogosort
challengeType: 1
forumTopicId: 302311
dashedName: sorting-algorithmsbogosort
---

# --description--

Bogosort a list of numbers.

Bogosort 只是隨機打亂一個集合，直到它被排序。

“Bogosort”是一種非常低效的算法，僅用作笑話。

它的平均運行時間是 O(n!) 因爲一個集合的任何給定 shuffle 以排序順序結束的機會約爲 *n* 階乘中的一個，並且最壞的情況是無限的，因爲不能保證隨機改組會產生排序的序列。

最好的情況是 O(n)，因爲單次遍歷元素可能足以對它們進行排序。

僞代碼：

<pre><b>while not</b> InOrder(list) <b>do</b>
  Shuffle(list)
<b>done</b>
</pre>

# --hints--

`bogosort` 應該是一個函數。

```js
assert(typeof bogosort == 'function');
```

`bogosort([25, 32, 12, 7, 20])` 應該返回一個數組。

```js
assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
```

`bogosort([25, 32, 12, 7, 20])` 應該返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`bogosort([38, 45, 35, 8, 13])` 應該返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`bogosort([43, 36, 20, 34, 24])` 應該返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`bogosort([12, 33, 26, 18, 1, 16, 38])` 應該返回`[1, 12, 16, 18, 26, 33, 38]`。

```js
assert.deepEqual(bogosort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`bogosort([3, 39, 48, 16, 1, 4, 29])` 應該返回`[1, 3, 4, 16, 29, 39, 48]`。

```js
assert.deepEqual(bogosort([3, 39, 48, 16, 1, 4, 29]), [
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
function bogosort(v) {

}
```

# --solutions--

```js
function bogosort(v) {
  function shuffle(v) {
    for (
      var j, x, i = v.length;
      i;
      j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
    );
    return v;
  }

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
```
