---
id: 587d825c367417b2b2512c8f
title: 实现归并排序
challengeType: 1
forumTopicId: 301614
dashedName: implement-merge-sort
---

# --description--

另一种常见的中间排序算法是归并排序。 像快速排序一样，合并排序也使用分而治之的递归方法对数组进行排序。 它基于这样一个事实：要将两个已经排好序的数组排在一起，是相对容易的。 但是我们只从一个数组作为输入开始，那么我们如何从中获得两个已排序的数组呢？ 好吧，我们可以递归地将原始输入分成两部分，直到我们到达每个数组只有一个元素的基本情况。 单项数组是自然排序的，因此我们可以开始组合。 这个组合将展开拆分原始数组的递归调用，最终生成所有元素的最终排序数组。 合并排序的步骤如下：

**1)** 将输入数组递归地分成两部分，直到生成仅包含一个元素的子数组。

**2)** 将每个已排序的子数组合并在一起以生成最终的排序的数组。

合并排序是一种有效的排序方法，时间复杂度为 *O(nlog(n))* 。 该算法很受欢迎，因为它性能高且易于实现。

顺便说一句，这将是我们在此处介绍的最后一种排序算法。 但是，稍后在关于树型数据结构的部分中，我们将描述堆排序，这是另一种在其实现中需要二进制堆的有效排序方法。

**说明：** 编写一个函数 `mergeSort`，它以整数数组作为输入，并按从最小到最大的排序顺序返回这些整数的数组。 实现这一点的一个好方法是编写一个函数，例如 `merge`，它负责合并两个已排序的数组；以及另一个函数，例如 `mergeSort`，它负责递归，生成单项数组以提供给 merge。 祝你好运！

# --hints--

`mergeSort` 应该是一个函数。

```js
assert(typeof mergeSort == 'function');
```

`mergeSort` 应该返回一个已排序的数组（从小到大）。

```js
assert(
  isSorted(
    mergeSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` 应返回一个除顺序外没有变化的数组。

```js
assert.sameMembers(
  mergeSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`mergeSort` 不应使用内置的 `.sort()` 方法。

```js
assert(isBuiltInSortUsed());
```

# --seed--

## --after-user-code--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}

function isBuiltInSortUsed(){
  let sortUsed = false;
  Array.prototype.sort = () => sortUsed = true;
  mergeSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function mergeSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge(
      mergeSort(array.slice(0, splitIndex)),
      mergeSort(array.slice(splitIndex))
    );
  }

  // Merge two sorted arrays
  function merge(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }

    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```
