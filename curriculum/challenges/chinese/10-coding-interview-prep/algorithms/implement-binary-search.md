---
id: 61abc7ebf3029b56226de5b6
title: 实现二分搜索
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

二分搜索是一种 **O(log(n))** 效率的算法，用于在已排序的数组以查找元素。 它通过以下步骤运行：

1. 查找已排序数组的中间值 `value`。 If `value == target` return `true` (The value has been found and the search is complete).
1. 如果中间值 `value < target`，则在下一次比较中搜索数组的右半部分。
1. 如果中间值 `value > target`，则在下一次比较中搜索数组的左半部分。
1. If after searching the whole array the value is not present, return `false` (The array has been searched and the value is not in the array).

如你所见，你连续将数组减半，这为你提供了 log(n) 效率。 对于这个挑战，我们希望你展示你的工作——你是如何到达目标值的……你走过的路！

# --instructions--

编写一个函数 `binarySearch` 来实现对数组的二分查找算法，返回在数组中查找目标所采用的路径（每个中间值比较）。

该函数将一个排序的整数数组和一个目标值作为输入。 它返回一个数组，其中包含（按顺序）你在原始数组的每个减半处找到的中间值，直到你找到目标值。 目标值应该是返回数组的最后一个元素。 If the value is not found, return the string `Value Not Found`.

例如，`binarySearch([1,2,3,4,5,6,7], 5)` 将返回 `[4,6,5]`。

对于这个挑战，当减半时，你必须在做除法时使用 `Math.floor()`：`Math.floor(x/2)`。 这将提供一致的、可测试的路径。

**注意：** 以下数组将用于测试：

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` 应该是一个函数。

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` 应该返回 `[13, 5, 2, 0]`。

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` 应该返回 `[13, 5, 2, 0, 1]`。

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` 应该返回 `[13, 5, 2]`。

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` 应该返回字符串 `Value Not Found`。

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` 应该返回 `[13, 5, 10, 11]`。

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` 应该返回 `[13]`。

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` 应该返回 `[13, 19, 22, 49, 70]`.

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
