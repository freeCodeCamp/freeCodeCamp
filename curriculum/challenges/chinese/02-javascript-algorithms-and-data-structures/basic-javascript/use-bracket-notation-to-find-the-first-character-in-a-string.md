---
id: bd7123c9c549eddfaeb5bdef
title: 使用方括号查找字符串中的第一个字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
---

# --description--

方括号表示法是一种在字符串中的特定`index`（索引）处获取字符的方法。

大多数现代编程语言，如JavaScript，不同于人类从 1 开始计数。它们是从 0 开始计数，这被称为 <dfn>基于零</dfn> 的索引。

例如, 在单词 "Charles" 中索引 0 上的字符为 "C"，所以在`var firstName = "Charles"`中，你可以使用`firstName[0]`来获得第一个位置上的字符。

# --instructions--

使用方括号获取变量`lastName`中的第一个字符，并赋给变量`firstLetterOfLastName`。

**提示**  
如果你遇到困难了，不妨看看变量`firstLetterOfFirstName`是如何赋值的。

# --hints--

`firstLetterOfLastName`的值应该是`L`。

```js
assert(firstLetterOfLastName === 'L');
```

你应该使用中括号。

```js
assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --solutions--

