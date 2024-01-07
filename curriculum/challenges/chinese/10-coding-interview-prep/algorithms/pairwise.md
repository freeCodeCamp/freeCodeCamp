---
id: a3f503de51cfab748ff001aa
title: 成对
challengeType: 1
forumTopicId: 301617
dashedName: pairwise
---

# --description--

给定一个数组 `arr` ，找到其中总和等于第二个参数 `arg` 的元素对，并返回它们的索引之和。

你可以使用具有相同数字元素但索引不同的多个对。 每对应使用尽可能低的索引。 一旦元素被使用，它就不能被重用来与另一个元素配对。 例如， `pairwise([1, 1, 2], 3)` 使用索引为 0 的 1，而不是索引为 1 的 1 来创建一对 `[2, 1]`，因为 0 + 2 &lt; 1 + 2。

例如， `pairwise([7, 9, 11, 13, 15], 20)` 返回 `6`。 总和为 20 的对是 `[7, 13]` 和 `[9, 11]`。 然后我们可以用它们的索引和值写出数组。

<div style='margin-left: 2em;'>

| 索引 | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| 值 | 7 | 9 | 11 | 13 | 15 |

</div>

接下来，我们将获取它们的相应索引并添加它们。

<div style='margin-left: 2em;'>

7 + 13 = 20 → 索引 0 + 3 = 3  
9 + 11 = 20 → 索引 1 + 2 = 3  
3 + 3 = 6 →返回 `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` 应该返回 11。

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` 应返回 1。

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` 应该返回 1。

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` 应该返回10。

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` 应该返回 0。

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
