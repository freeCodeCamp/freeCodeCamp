---
id: a105e963526e7de52b219be9
title: 集合排序
challengeType: 5
forumTopicId: 16077
dashedName: sorted-union
---

# --description--

在这道题目中，我们需要写一个函数，它接收两个或多个数组为参数。我们需要首先求出所有数组的并集，然后进行去除重复元素的处理，并以数组的形式返回去重结果。

换句话说，所有数组中出现的所有值都应按其原始顺序包括在内，但最终数组中不得重复。

去重后的数字应按其出现在参数中的原始顺序排序，最终数组不应按数字大小进行排序。

如有疑问，请先浏览下方的测试用例。

# --hints--

`uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])` 应返回 `[1, 3, 2, 5, 4]`。

```js
assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4]);
```

`uniteUnique([1, 2, 3], [5, 2, 1])` 应返回 `[1, 2, 3, 5]`。

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5]);
```

`uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])` 应返回 `[1, 2, 3, 5, 4, 6, 7, 8]`。

```js
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
  1,
  2,
  3,
  5,
  4,
  6,
  7,
  8
]);
```

# --seed--

## --seed-contents--

```js
function uniteUnique(arr) {
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```

# --solutions--

```js
function uniteUnique(arr) {
  return [].slice.call(arguments).reduce(function(a, b) {
    return [].concat(a, b.filter(function(e) {return a.indexOf(e) === -1;}));
  }, []);
}
```
