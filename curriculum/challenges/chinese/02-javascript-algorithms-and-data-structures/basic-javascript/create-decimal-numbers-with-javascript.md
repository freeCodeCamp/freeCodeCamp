---
id: cf1391c1c11feddfaeb4bdef
title: 创建一个小数
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

我们也可以把小数存储到变量中。小数也被称作<dfn>浮点数</dfn> 。

**提示**  
不是所有的实数都可以用 <dfn>浮点数</dfn> 来表示。因为可能存在四舍五入的错误，[详情查看](https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems)。

# --instructions--

创建一个变量`myDecimal`并给它赋值一个浮点数。(例如`5.21`)。

# --hints--

`myDecimal`应该是一个数字。

```js
assert(typeof myDecimal === 'number');
```

`myDecimal`应该包含小数点。

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
var ourDecimal = 5.7;

// Only change code below this line
```

# --solutions--

```js
var myDecimal = 9.9;
```
