---
id: 5675e877dbd60be8ad28edc6
title: 使用 For 循環遍歷數組
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

JavaScript 中的一個常見任務是遍歷數組的內容。 一種方法是使用 `for` 循環。 下面的代碼將輸出數組 `arr` 的每個元素到控制檯：

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

記住數組的索引從零開始的，這意味着數組的最後一個元素的下標是：`length - 1`（數組的長度 -1）。 我們這個循環的條件是 `i < arr.length`，當 `i` 的值爲 `length` 的時候循環就停止了。 在這個例子中，最後一個循環是 `i === 4`，也就是說，當 `i` 的值等於 `arr.length - 1` 時，結果輸出 `6`。 然後 `i` 增加到 `5`，循環會終止，因爲 `i < arr.length` 是 `false`。

# --instructions--

聲明並初始化一個變量 `total` 值爲 `0`。 使用 `for` 循環，使得 `total` 的值爲 `myArr` 的數組中的每個元素的值的總和。

# --hints--

`total` 應該被聲明, 並且初始化值爲 0。

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` 應該等於 20。

```js
assert(total === 20);
```

你應該使用 `for` 循環在 `myArr` 中遍歷。

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

不能直接把 `total` 設置成 20。

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
