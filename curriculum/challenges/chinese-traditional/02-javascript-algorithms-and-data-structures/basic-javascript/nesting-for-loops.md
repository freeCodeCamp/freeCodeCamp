---
id: 56533eb9ac21ba0edf2244e1
title: 循環嵌套
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

如果你有一個二維數組，可以使用相同的邏輯，先遍歷外面的數組，再遍歷裏面的子數組。 下面是一個例子：

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

這裏一次輸出了 `arr` 中的每個子元素。 提示，對於內部循環，我們可以通過 `arr[i]` 的 `.length` 來獲得子數組的長度，因爲 `arr[i]` 本身就是一個數組。

# --instructions--

修改函數 `multiplyAll`，獲得 `arr` 內部數組的每個數字相乘的結果 product。

# --hints--

`multiplyAll([[1], [2], [3]])` 應該返回 `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` 應該返回 `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` 應該返回 `54`

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
