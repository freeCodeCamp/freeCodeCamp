---
id: bd7123c9c444eddfaeb5bdef
title: 聲明字符串變量
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

之前，你使用以下代碼聲明變量：

```js
var myName;
```

但是你也可以像這樣聲明一個字符串變量：

```js
var myName = "your name";
```

`"your name"` 被稱爲 <dfn>string</dfn> <dfn>literal</dfn>。 字符串文字或字符串是用單引號或雙引號括起來的一系列零個或多個字符。

# --instructions--

創建兩個新的字符串變量：`myFirstName` 和 `myLastName`，並分別爲它們分配你的名字和姓氏的值。

# --hints--

`myFirstName` 應該是一個至少包含一個字符的字符串。

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

`myLastName` 應該是一個至少包含一個字符的字符串。

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
