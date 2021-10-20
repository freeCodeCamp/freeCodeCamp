---
id: 587d8259367417b2b2512c86
title: 实现插入排序
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

我们将要研究的下一个排序方法是插入排序。 此方法的工作原理是通过在数组的开头构建排序数组。 它从第一个元素开始排序数组。 然后，它检查下一个元素并将其向后交换到已排序的数组中，直到它处于已排序的位置为止。 它继续遍历列表，并将新项目向后交换到已排序的部分中，直到到达末尾为止。 这种算法在平均和最坏的情况下都有二次方的时间复杂性。

**说明：** 编写一个函数`insertionSort` ，它将一个整数数组作为输入，并按照从最小到最大的排序顺序返回这些整数的数组。

# --hints--

`insertionSort` 应该是一个函数。

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` 应该返回一个排序的数组（从最小到最大）。

```js
assert(
  isSorted(
    insertionSort([
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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` 应返回一个除顺序外没有变化的数组。

```js
assert.sameMembers(
  insertionSort([
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

`insertionSort([5, 4, 33, 2, 8])` 应返回 `[2, 4, 5, 8, 33]`。

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` 不应使用内置的 `.sort()` 方法。

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
  insertionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function insertionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```
