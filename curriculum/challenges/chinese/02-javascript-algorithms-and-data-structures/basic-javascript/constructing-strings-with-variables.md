---
id: 56533eb9ac21ba0edf2244b9
title: 用变量构造字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
---

# --description--

有时候你需要创建一个类似[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)(填词游戏）风格的字符串。通过使用连接运算符`+`，你可以插入一个或多个变量来组成一个字符串。

# --instructions--

把你的名字赋值给变量`myName`，然后把变量`myName`插入到字符串`"My name is "`和`" and I am well!"`之间，并把连接后的结果赋值给变量`myStr`。

# --hints--

`myName`至少要包含三个字符。

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

使用两个`+`操作符创建包含`myName`的`myStr`变量。

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --solutions--

