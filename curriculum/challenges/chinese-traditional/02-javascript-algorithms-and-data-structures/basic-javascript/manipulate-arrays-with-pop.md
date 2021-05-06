---
id: 56bbb991ad1ed5201cd392cc
title: 使用 pop() 操作數組
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

改變數組中數據的另一種方法是用 `.pop()` 函數。

`.pop()` 函數用來彈出一個數組末尾的值。 我們可以把這個彈出的值賦給一個變量存儲起來。 換句話說就是 `.pop()` 函數移除數組末尾的元素並返回這個元素。

數組中任何類型的元素（數值，字符串，甚至是數組）都可以被彈出來 。

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

第一個 `console.log` 將顯示值 `6`，第二個將顯示值 `[1, 4]`。

# --instructions--

使用 `.pop()` 函數移除 `myArray` 中的最後一個元素，並且把彈出的值賦給 `removedFromMyArray`。

# --hints--

`myArray` 應該只包含 `[["John", 23]]`。

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

對 `myArray` 使用 `pop()` 函數。

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` 應該只包含 `["cat", 2]`。

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```
