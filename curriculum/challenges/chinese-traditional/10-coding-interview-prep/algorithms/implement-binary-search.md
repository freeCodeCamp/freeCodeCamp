---
id: 61abc7ebf3029b56226de5b6
title: 實現二分搜索
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

二分搜索是一種 **O(log(n))** 效率的算法，用於在已排序的數組以查找元素。 它通過以下步驟運行：

1. 查找已排序數組的中間值 `value`。 If `value == target` return `true` (The value has been found and the search is complete).
1. 如果中間值 `value < target`，則在下一次比較中搜索數組的右半部分。
1. 如果中間值 `value > target`，則在下一次比較中搜索數組的左半部分。
1. If after searching the whole array the value is not present, return `false` (The array has been searched and the value is not in the array).

如你所見，你連續將數組減半，這爲你提供了 log(n) 效率。 對於這個挑戰，我們希望你展示你的工作——你是如何到達目標值的……你走過的路！

# --instructions--

編寫一個函數 `binarySearch` 來實現對數組的二分查找算法，返回在數組中查找目標所採用的路徑（每個中間值比較）。

該函數將一個排序的整數數組和一個目標值作爲輸入。 它返回一個數組，其中包含（按順序）你在原始數組的每個減半處找到的中間值，直到你找到目標值。 目標值應該是返回數組的最後一個元素。 If the value is not found, return the string `Value Not Found`.

例如，`binarySearch([1,2,3,4,5,6,7], 5)` 將返回 `[4,6,5]`。

對於這個挑戰，當減半時，你必須在做除法時使用 `Math.floor()`：`Math.floor(x/2)`。 這將提供一致的、可測試的路徑。

**注意：** 以下數組將用於測試：

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` 應該是一個函數。

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` 應該返回 `[13, 5, 2, 0]`。

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` 應該返回 `[13, 5, 2, 0, 1]`。

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` 應該返回 `[13, 5, 2]`。

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` 應該返回字符串 `Value Not Found`。

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` 應該返回 `[13, 5, 10, 11]`。

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` 應該返回 `[13]`。

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` 應該返回 `[13, 19, 22, 49, 70]`.

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
