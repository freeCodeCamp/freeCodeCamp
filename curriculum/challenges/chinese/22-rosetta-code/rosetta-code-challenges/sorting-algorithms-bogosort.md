---
id: 5a23c84252665b21eecc8002
title: 排序算法/Bogosort
challengeType: 1
forumTopicId: 302311
dashedName: sorting-algorithmsbogosort
---

# --description--

Bogosort a list of numbers.

Bogosort 只是随机打乱一个集合，直到它被排序。

“Bogosort”是一种非常低效的算法，仅用作笑话。

它的平均运行时间是 O(n!) 因为一个集合的任何给定 shuffle 以排序顺序结束的机会约为 *n* 阶乘中的一个，并且最坏的情况是无限的，因为不能保证随机改组会产生排序的序列。

最好的情况是 O(n)，因为单次遍历元素可能足以对它们进行排序。

伪代码：

<pre><b>while not</b> InOrder(list) <b>do</b>
  Shuffle(list)
<b>done</b>
</pre>

# --hints--

`bogosort` 应该是一个函数。

```js
assert(typeof bogosort == 'function');
```

`bogosort([25, 32, 12, 7, 20])` 应该返回一个数组。

```js
assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
```

`bogosort([25, 32, 12, 7, 20])` 应该返回 `[7, 12, 20, 25, 32]`。

```js
assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`bogosort([38, 45, 35, 8, 13])` 应该返回 `[8, 13, 35, 38, 45]`。

```js
assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`bogosort([43, 36, 20, 34, 24])` 应该返回 `[20, 24, 34, 36, 43]`。

```js
assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`bogosort([12, 33, 26, 18, 1, 16, 38])` 应该返回`[1, 12, 16, 18, 26, 33, 38]`。

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

`bogosort([3, 39, 48, 16, 1, 4, 29])` 应该返回`[1, 3, 4, 16, 29, 39, 48]`。

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
