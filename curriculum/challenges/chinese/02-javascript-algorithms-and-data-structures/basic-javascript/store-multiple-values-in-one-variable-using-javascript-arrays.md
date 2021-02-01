---
id: bd7993c9c69feddfaeb8bdef
title: 使用 JavaScript 数组将多个值存储在一个变量中
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

使用`数组`，我们可以在一个地方存储多个数据。

以左方括号`[`开始定义一个数组，以右方括号`]`结束，里面每个元素之间用逗号隔开，例如：

`var sandwich = ["peanut butter", "jelly", "bread"]`.

# --instructions--

创建一个包含`字符串`和`数字`的数组`myArray`。

**提示**  
如果你遇到困难，请参考文本编辑器中的示例代码。

# --hints--

`myArray`应该是一个`数组`。

```js
assert(typeof myArray == 'object');
```

`myArray`数组的第一个元素应该是一个`字符串`。

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

`myArray`数组的第二个元素应该是一个`数字`。

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
var myArray = [];
```

# --solutions--

```js
var myArray = ["The Answer", 42];
```
