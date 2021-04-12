---
id: bd7123c9c444eddfaeb5bdef
title: 声明字符串变量
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

之前我们写过这样的代码：

```js
var myName = "your name";
```

`"your name"` 被称作<dfn>字符串</dfn><dfn>字面量</dfn>。 这是一个字符串，因为它是一系列包含在单引号或双引号中的零或多个字符。

# --instructions--

创建两个新的字符串变量：`myFirstName` 和 `myLastName`，并用你的姓和名分别为它们赋值。

# --hints--

`myFirstName` 应该是一个字符串，至少包含一个字符。

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

`myLastName` 应该是一个字符串，至少包含一个字符。

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
