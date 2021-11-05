---
id: 587d825a367417b2b2512c89
title: 实现快速排序
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

在这里，我们将继续讨论中间排序算法：快速排序。 快速排序是对数组进行排序的一种有效的，递归的分而治之的方法。 在此方法中，在原始数组中选择一个枢轴值。 然后将该数组分成两个小于和大于数值的子数组。 然后，我们在两个子阵列上结合递归调用快速排序算法的结果。 这一直持续到达到空或单项数组的基本情况，我们返回。 递归调用的展开将返回已排序的数组。

快速排序是一种非常有效的排序方法，平均提供 *O(nlog(n))* 的性能。 它也相对容易实现。 这些属性使其成为一种流行且有用的排序方法。

**说明：** 编写一个函数 `quickSort`，它将整数数组作为输入，并按从最小到最大的排序顺序返回这些整数的数组。 虽然枢轴值的选择很重要，但任何枢轴都可以满足我们的目的。 为简单起见，可以使用第一个或最后一个元素。

# --hints--

`quickSort` 应该是一个函数。

```js
assert(typeof quickSort == 'function');
```

`quickSort` 应该返回一个排序的数组（从最小到最大）。

```js
assert(
  isSorted(
    quickSort([
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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` 应该返回一个数组，除了顺序之外没有变化。

```js
assert.sameMembers(
  quickSort([
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

`quickSort` 不应使用内置的 `.sort()` 方法。

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
  quickSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function quickSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];

    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }

    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}
```
