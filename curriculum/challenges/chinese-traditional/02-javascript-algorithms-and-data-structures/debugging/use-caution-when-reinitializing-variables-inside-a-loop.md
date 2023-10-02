---
id: 587d7b86367417b2b2512b3c
title: 重新初始化循環中的變量時要小心
challengeType: 1
forumTopicId: 301194
dashedName: use-caution-when-reinitializing-variables-inside-a-loop
---

# --description--

有時需要在循環中保存信息以增加計數器或重置變量。 一個潛在的問題是變量什麼時候該重新初始化，什麼時候不該重新初始化，反之亦然。 如果你不小心重置了用於終止條件的變量，導致無限循環，這將特別危險。

使用`console.log()`在每個循環中打印變量值可以發現與重置相關的錯誤或者重置變量失敗。

# --instructions--

以下函數應該創建一個具有`m`行和`n`列“零”的二維數組。 不幸的是，它沒有產生預期的輸出，因爲`row`變量沒有在外部循環中重新初始化（設置回空數組）。 修改代碼，使其正確地返回包含 3 行 2 列“零”的二維數組，即`[[0, 0], [0, 0], [0, 0]]`。

# --hints--

應將變量 `matrix` 設置爲 3 行 2 列“零”的二維數組。

```js
assert(JSON.stringify(matrix) == '[[0,0],[0,0],[0,0]]');
```

變量 `matrix` 應有 3 行。

```js
assert(matrix.length == 3);
```

變量 `matrix` 每行應有 2 列。

```js
assert(
  matrix[0].length == 2 && matrix[1].length === 2 && matrix[2].length === 2
);
```

`zeroArray(4,3)` 應該返回一個包含 4 行、每行 3 列零的數組。

```js
assert(JSON.stringify(zeroArray(4,3)) == '[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]');
```

# --seed--

## --seed-contents--

```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```

# --solutions--

```js
function zeroArray(m, n) {
 // Creates a 2-D array with m rows and n columns of zeroes
 let newArray = [];
 for (let i = 0; i < m; i++) {
   let row = [];
   // Adds the m-th row into newArray

   for (let j = 0; j < n; j++) {
     // Pushes n zeroes into the current row to create the columns
     row.push(0);
   }
   // Pushes the current row, which now has n zeroes in it, to the array
   newArray.push(row);
 }
 return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
