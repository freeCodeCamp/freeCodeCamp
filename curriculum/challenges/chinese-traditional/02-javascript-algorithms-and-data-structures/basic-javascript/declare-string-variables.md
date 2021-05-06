---
id: bd7123c9c444eddfaeb5bdef
title: 聲明字符串變量
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

之前我們寫過這樣的代碼：

```js
var myName = "your name";
```

`"your name"` 被稱作<dfn>字符串</dfn><dfn>字面量</dfn>。 這是一個字符串，因爲它是一系列包含在單引號或雙引號中的零或多個字符。

# --instructions--

創建兩個新的字符串變量：`myFirstName` 和 `myLastName`，並用你的姓和名分別爲它們賦值。

# --hints--

`myFirstName` 應該是一個字符串，至少包含一個字符。

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

`myLastName` 應該是一個字符串，至少包含一個字符。

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
