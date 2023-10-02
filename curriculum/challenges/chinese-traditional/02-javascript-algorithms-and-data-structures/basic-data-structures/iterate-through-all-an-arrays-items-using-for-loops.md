---
id: 587d7b7b367417b2b2512b15
title: 使用 for 循環遍歷數組中的全部元素
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

使用數組時，我們經常需要遍歷數組的所有元素來找出我們需要的一個或多個元素，抑或是對數組執行一些特定的操作。 JavaScript 爲我們提供了幾個內置的方法，它們以不同的方式遍歷數組，以便我們可以用於不同的場景（如 `every()`、`forEach()`、`map()` 等等）。 然而，最簡單的 `for` 循環不僅能實現上述這些方法的功能，而且相比之下也會更加靈活。

請看以下的例子：

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

在這個函數中，我們用一個 `for` 循環來遍歷數組，逐一對其中的元素進行判斷。 通過上面的代碼，我們可以找出數組中大於 `10` 的所有元素，並返回一個包含這些元素的新數組 `[12, 14, 80]`。

# --instructions--

我們已經定義了 `filteredArray` 函數，它接受一個嵌套的數組 `arr` 和一個 `elem` 作爲參數，並要返回一個新數組。 `arr` 數組中嵌套的數組裏可能包含 `elem` 元素，也可能不包含。 請修改該函數，用一個 `for` 循環來做篩選，使函數返回一個由 `arr` 中不包含 `elem` 的數組所組成的新數組。

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` 應返回 `[[10, 8, 3], [14, 6, 23]]`。

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` 應返回 `[["flutes", 4]]`。

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` 應返回 `[["amy", "beth", "sam"]]`。

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` 應返回 `[]`。

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

`filteredArray` 函數中應使用 `for` 循環。

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
