---
id: 587d8259367417b2b2512c85
title: 實現選擇排序
challengeType: 1
forumTopicId: 301616
dashedName: implement-selection-sort
---

# --description--

這裏我們將實現選擇排序。 選擇排序的工作原理是選擇列表中的最小值並與列表中的第一個值進行交換。 然後它從第二個位置開始，選擇剩餘列表中的最小值，並將其與第二個元素交換。 它繼續遍歷列表並交換元素，直到它到達列表的末尾。 現在列表已排序。 在所有情況下，選擇排序都具有二次方的時間複雜度。

**說明**：編寫一個 `selectionSort` 函數，它將一個整數數組作爲輸入，並按照從最小到最大的排序順序返回這些整數的數組。

# --hints--

`selectionSort` 應該是一個函數。

```js
assert(typeof selectionSort == 'function');
```

`selectionSort` 應該返回一個排序的數組（從最小到最大）。

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

`selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` 應返回一個除順序外沒有變化的數組。

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

`selectionSort` 不應使用內置的 `.sort()` 方法。

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
