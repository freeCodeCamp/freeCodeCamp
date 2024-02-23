---
id: bd7993c9c69feddfaeb8bdef
title: 使用 JavaScript 數組將多個值存儲在一個變量中
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

使用數組（`array`），我們可以在一個地方存儲多個數據。

以左方括號開始定義一個數組，以右方括號結束，裏面每個元素之間用逗號隔開，例如：

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

創建一個包含字符串和數字（按照字符串和數字的順序）的數組 `myArray`。

# --hints--

`myArray` 應爲數組。

```js
assert(typeof myArray == 'object');
```

`myArray` 數組的第一個元素應該是一個字符串。

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

`myArray` 數組的第二個元素應該是一個數字。

```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = ["The Answer", 42];
```
