---
id: bd7123c9c444eddfaeb5bdef
title: 声明字符串变量
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

之前，你使用以下代码声明变量：

```js
var myName;
```

但是你也可以像这样声明一个字符串变量：

```js
var myName = "your name";
```

`"your name"` 被称为 <dfn>string</dfn> <dfn>literal</dfn>。 字符串文字或字符串是用单引号或双引号括起来的一系列零个或多个字符。

# --instructions--

创建两个新的字符串变量：`myFirstName` 和 `myLastName`，并分别为它们分配你的名字和姓氏的值。

# --hints--

`myFirstName` 应该是一个至少包含一个字符的字符串。

```js
assert(
  (function () {
    if (
      typeof myFirstName !== 'undefined' &&
      typeof myFirstName === 'string' &&
      myFirstName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

`myLastName` 应该是一个至少包含一个字符的字符串。

```js
assert(
  (function () {
    if (
      typeof myLastName !== 'undefined' &&
      typeof myLastName === 'string' &&
      myLastName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```
