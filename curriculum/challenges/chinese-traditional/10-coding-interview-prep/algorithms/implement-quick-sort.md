---
id: 587d825a367417b2b2512c89
title: 實現快速排序
challengeType: 1
forumTopicId: 301615
dashedName: implement-quick-sort
---

# --description--

在這裏，我們將繼續討論中間排序算法：快速排序。 快速排序是對數組進行排序的一種有效的，遞歸的分而治之的方法。 在此方法中，在原始數組中選擇一個樞軸值。 然後將該數組分成兩個小於和大於數值的子數組。 然後，我們在兩個子陣列上結合遞歸調用快速排序算法的結果。 這一直持續到達到空或單項數組的基本情況，我們返回。 遞歸調用的展開將返回已排序的數組。

快速排序是一種非常有效的排序方法，平均提供 *O(nlog(n))* 的性能。 它也相對容易實現。 這些屬性使其成爲一種流行且有用的排序方法。

**說明：** 編寫一個函數 `quickSort`，它將整數數組作爲輸入，並按從最小到最大的排序順序返回這些整數的數組。 雖然樞軸值的選擇很重要，但任何樞軸都可以滿足我們的目的。 爲簡單起見，可以使用第一個或最後一個元素。

# --hints--

`quickSort` 應該是一個函數。

```js
assert(typeof quickSort == 'function');
```

`quickSort` 應該返回一個排序的數組（從最小到最大）。

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

`quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])` 應該返回一個數組，除了順序之外沒有變化。

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

`quickSort` 不應使用內置的 `.sort()` 方法。

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
