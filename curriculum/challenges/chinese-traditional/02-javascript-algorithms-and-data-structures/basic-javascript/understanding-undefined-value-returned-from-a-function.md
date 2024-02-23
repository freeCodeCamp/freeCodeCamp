---
id: 598e8944f009e646fc236146
title: 函數也可以返回 undefined
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

函數一般用 `return` 語句來返回值，但這不是必須的。 在函數沒有 `return` 語句的情況下，當你調用它時，該函數會執行內部代碼，返回的值是 `undefined`。

**示例**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` 是一個沒有 `return` 語句的函數。 該函數將更改全局變量 `sum`，函數的返回值爲 `undefined`。

# --instructions--

創建一個沒有任何參數的函數 `addFive`。 此函數使 `sum` 變量加 5，但其返回值是 `undefined`。

# --hints--

`addFive` 應該是一個函數。

```js
assert(typeof addFive === 'function');
```

兩個函數運行後，`sum` 應該等於 `8`。

```js
assert(sum === 8);
```

`addFive` 的返回值應該是 `undefined`。

```js
assert(addFive() === undefined);
```

在 `addFive` 函數中，應該給 `sum` 變量增加 `5`。

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
