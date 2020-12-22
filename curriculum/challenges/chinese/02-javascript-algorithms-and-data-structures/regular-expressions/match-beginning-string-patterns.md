---
id: 587d7db7367417b2b2512b9d
title: 匹配字符串的开头
challengeType: 1
forumTopicId: 301349
---

# --description--

回顾一下之前的挑战，正则表达式可以用于查找多项匹配。还可以查询字符串中符合指定匹配模式的字符。

在之前的挑战中，使用`字符集`中的`插入`符号（`^`）来创建一个`否定字符集`，形如`[^thingsThatWillNotBeMatched]`。在`字符集`之外，`插入`符号用于字符串的开头搜寻匹配模式。

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```

# --instructions--

在正则表达式中使用`^`符号，以匹配仅在字符串`rickyAndCal`的开头出现的`"Cal"`。

# --hints--

你的正则表达式应该搜寻有一个大写字母的`'Cal'`。

```js
assert(calRegex.source == '^Cal');
```

你的正则表达式不应该使用任何标志。

```js
assert(calRegex.flags == '');
```

你的正则表达式应该匹配字符串开头的`'Cal'`。

```js
assert(calRegex.test('Cal and Ricky both like racing.'));
```

你的正则表达式不应该匹配字符串中间的`'Cal'`。

```js
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --solutions--

