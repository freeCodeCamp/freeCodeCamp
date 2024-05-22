---
id: 56bbb991ad1ed5201cd392cb
title: 使用 push 方法操作數組
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

一個將數據添加到數組末尾的簡單方式是使用 `push()` 方法。

`push()` 方法需要一個或多個 <dfn>參數</dfn> 並將它們根據出現順序追加到數組的末尾。 它返回數組的新長度。

示例：

```js
const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

`arr1` 現在值爲 `[1, 2, 3, 4, 5]`，`arr2` 的值爲 `["Stimpson", "J", "cat", ["happy", "joy"]]`。

# --instructions--

把`["dog", 3]` 壓入到 `myArray` 變量的末尾。

# --hints--

`myArray` 現在應該等於 `[["John", 23], ["cat", 2], ["dog", 3]]`。

```js
assert(
  (function (d) {
    if (
      d[2] != undefined &&
      d[0][0] == 'John' &&
      d[0][1] === 23 &&
      d[2][0] == 'dog' &&
      d[2][1] === 3 &&
      d[2].length == 2
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```
