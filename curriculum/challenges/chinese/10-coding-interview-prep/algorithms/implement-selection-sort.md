---
id: 587d8259367417b2b2512c85
title: 实现选择排序
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

这里我们将实现选择排序。 选择排序的工作原理是选择列表中的最小值并与列表中的第一个值进行交换。 然后它从第二个位置开始，选择剩余列表中的最小值，并将其与第二个元素交换。 它继续遍历列表并交换元素，直到它到达列表的末尾。 现在列表已排序。 在所有情况下，选择排序都具有二次方的时间复杂度。

**说明**：编写一个 `selectionSort` 函数，它将一个整数数组作为输入，并按照从最小到最大的排序顺序返回这些整数的数组。

# --hints--

`selectionSort` 应该是一个函数。

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` 应该返回一个排序的数组（从最小到最大）。

```js
assert(
  isSorted(
    selectionSort([
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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` 应返回一个除顺序外没有变化的数组。

```js
assert.sameMembers(
  selectionSort([
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

`selectionSort` 不应使用内置的 `.sort()` 方法。

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
  selectionSort([0, 1]);
  return !sortUsed;
}
```

## --seed-contents--

```js
function selectionSort(array) {
  // Only change code below this line
  return array;
  // Only change code above this line
}
```

# --solutions--

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i];
    array[i] = value;
  }
    return array;
}
```
