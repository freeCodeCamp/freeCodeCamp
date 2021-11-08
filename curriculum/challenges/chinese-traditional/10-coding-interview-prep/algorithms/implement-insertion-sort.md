---
id: 587d8259367417b2b2512c86
title: 實現插入排序
challengeType: 1
forumTopicId: 301613
dashedName: implement-insertion-sort
---

# --description--

我們將要研究的下一個排序方法是插入排序。 此方法的工作原理是通過在數組的開頭構建排序數組。 它從第一個元素開始排序數組。 然後，它檢查下一個元素並將其向後交換到已排序的數組中，直到它處於已排序的位置爲止。 它繼續遍歷列表，並將新項目向後交換到已排序的部分中，直到到達末尾爲止。 這種算法在平均和最壞的情況下都有二次方的時間複雜性。

**說明：** 編寫一個函數`insertionSort` ，它將一個整數數組作爲輸入，並按照從最小到最大的排序順序返回這些整數的數組。

# --hints--

`insertionSort` 應該是一個函數。

```js
assert(typeof insertionSort == 'function');
```

`insertionSort` 應該返回一個排序的數組（從最小到最大）。

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

`insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` 應返回一個除順序外沒有變化的數組。

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

`insertionSort([5, 4, 33, 2, 8])` 應返回 `[2, 4, 5, 8, 33]`。

```js
assert.deepEqual(insertionSort([5, 4, 33, 2, 8]), [2, 4, 5, 8, 33])
```

`insertionSort` 不應使用內置的 `.sort()` 方法。

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
