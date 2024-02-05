---
id: 5a23c84252665b21eecc8014
title: 排序稳定性
challengeType: 1
forumTopicId: 302308
dashedName: sort-stability
---

# --description--

When sorting records in a table by a particular column or field, a <a href="https://www.freecodecamp.org/news/stability-in-sorting-algorithms-a-treatment-of-equality-fa3140a5a539/" target="_blank" rel="noopener noreferrer nofollow">stable sort</a> will always retain the relative order of records that have the same key.

例如，在这个国家和城市表中，对**第二** 列（城市）的稳定排序将使美国伯明翰高于英国伯明翰。 （尽管在这种情况下，不稳定的排序 *可能* 将美国伯明翰置于英国伯明翰之上，稳定排序例程将 *保证* 它）。

<pre>UK  London
US  New York
US  Birmingham
UK  Birmingham
</pre>

类似地，仅对第一列进行稳定排序将生成“UK London”作为第一项，“US Birmingham”作为最后一项（因为具有相同第一个单词的元素的顺序——“UK”或“US”——将保持）。

# --instructions--

编写一个以二维数组为参数的函数。 每个元素有 2 个元素，类似于上面的例子。 该函数应该如前所述对数组进行排序并返回排序后的数组。

# --hints--

`stableSort` 应该是一个函数。

```js
assert(typeof stableSort == 'function');
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` 应该返回一个数组。

```js
assert(
  Array.isArray(
    stableSort([
      ['UK', 'London'],
      ['US', 'New York'],
      ['US', 'Birmingham'],
      ['UK', 'Birmingham']
    ])
  )
);
```

`stableSort([["UK", "London"], ["US", "New York"], ["US", "Birmingham"], ["UK", "Birmingham"]])` 应该返回 `[["US", "Birmingham"], ["UK", "Birmingham"], ["UK", "London"], ["US", "New York"]]`。

```js
assert.deepEqual(
  stableSort([
    ['UK', 'London'],
    ['US', 'New York'],
    ['US', 'Birmingham'],
    ['UK', 'Birmingham']
  ]),
  [
    ['US', 'Birmingham'],
    ['UK', 'Birmingham'],
    ['UK', 'London'],
    ['US', 'New York']
  ]
);
```

`stableSort([[2, 2], [1, 2], [1, 4], [1, 5]])` 应该返回 `[[2, 2], [1, 2], [1, 4], [1, 5]]`。

```js
assert.deepEqual(
  stableSort([
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]),
  [
    [2, 2],
    [1, 2],
    [1, 4],
    [1, 5]
  ]
);
```

`stableSort([[11, 55], [12, 45], [11, 45], [32, 45]])` 应该返回 `[[12, 45], [11, 45], [32, 45], [11, 55]]`。

```js
assert.deepEqual(
  stableSort([
    [11, 55],
    [12, 45],
    [11, 45],
    [32, 45]
  ]),
  [
    [12, 45],
    [11, 45],
    [32, 45],
    [11, 55]
  ]
);
```

`stableSort([[10, 22], [1, 2], [1, 4], [1, 5], [10, 9]])` 应该返回 `[[1, 2], [1, 4], [1, 5], [10, 9], [10, 22]]`。

```js
assert.deepEqual(
  stableSort([
    [10, 22],
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9]
  ]),
  [
    [1, 2],
    [1, 4],
    [1, 5],
    [10, 9],
    [10, 22]
  ]
);
```

`stableSort([[55, 54], [12, 22], [31, 43], [31, 54], [10, 49]])` 应该返回 `[[12, 22], [31, 43], [10, 49], [55, 54], [31, 54]]`。

```js
assert.deepEqual(
  stableSort([
    [55, 54],
    [12, 22],
    [31, 43],
    [31, 54],
    [10, 49]
  ]),
  [
    [12, 22],
    [31, 43],
    [10, 49],
    [55, 54],
    [31, 54]
  ]
);
```

# --seed--

## --seed-contents--

```js
function stableSort(arr) {

}
```

# --solutions--

```js
function stableSort(arr) {
  arr.sort(function(a, b) {
    return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
  });
  return arr;
}
```
