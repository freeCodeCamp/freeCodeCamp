---
id: cf1391c1c11feddfaeb4bdef
title: 创建一个小数
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

我们也可以把小数存储到变量中。 小数有时候也被称作<dfn>浮点数</dfn>或者 <dfn>floats</dfn>。

**注意：** 当你计算数字时，它们是以有限的精确度计算的。 使用浮点数的运算可能产生不同于预期结果的结果。 如果你生成了一个非预期的结果，请在 <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp 论坛</a>上创建一个话题进行说明。

# --instructions--

创建一个变量 `myDecimal`，并给它赋值一个浮点数（例如 `5.7`)。

# --hints--

`myDecimal` 应该是一个数字。

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` 应该包含小数点。

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
