---
id: bd7993c9c69feddfaeb8bdef
title: 使用 JavaScript 数组将多个值存储在一个变量中
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

使用数组（`array`），我们可以在一个地方存储多个数据。

以左方括号开始定义一个数组，以右方括号结束，里面每个元素之间用逗号隔开，例如：

```js
const sandwich = ["peanut butter", "jelly", "bread"];
```

# --instructions--

创建一个包含字符串和数字（按照字符串和数字的顺序）的数组 `myArray`。

# --hints--

`myArray` 应为数组。

```js
assert(typeof myArray == 'object');
```

`myArray` 数组的第一个元素应该是一个字符串。

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

`myArray` 数组的第二个元素应该是一个数字。

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
