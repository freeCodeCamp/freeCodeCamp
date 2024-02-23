---
id: 56533eb9ac21ba0edf2244c2
title: 使用 return 給函數返回值
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

我們可以通過函數的參數（<dfn>arguments</dfn>）把值傳入函數， 也可以使用 `return` 語句把數據從一個函數中傳出來。

**示例**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` 的值爲 `8`。

`plusThree` 帶有一個參數（<dfn>argument</dfn>）`num`，並返回（return）一個等於 `num + 3` 的值。

# --instructions--

創建一個函數 `timesFive` 接收一個參數，把它乘以 `5` 之後返回。

# --hints--

`timesFive` 應是一個函數

```js
assert(typeof timesFive === 'function');
```

`timesFive(5)` 應該返回 `25`

```js
assert(timesFive(5) === 25);
```

`timesFive(2)` 應該返回 `10`

```js
assert(timesFive(2) === 10);
```

`timesFive(0)` 應該返回 `0`

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
