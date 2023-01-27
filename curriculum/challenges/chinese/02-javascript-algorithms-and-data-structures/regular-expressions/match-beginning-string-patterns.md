---
id: 587d7db7367417b2b2512b9d
title: 匹配字符串的开头
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

回顾一下之前的挑战，正则表达式可以用于查找多项匹配。 还可以查询字符串中符合指定匹配模式的字符。

在之前的挑战中，使用字符集中前插入符号（`^`）来创建一个否定字符集，形如 `[^thingsThatWillNotBeMatched]`。 除了在字符集中使用之外，插入符号（^）用于匹配文本是否在字符串的开始位置

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

第一次 `test` 调用将返回 `true`，而第二次调用将返回 `false`。

# --instructions--

在正则表达式中使用脱字符来找到 `Cal` 在字符串 `rickyAndCal` 中的开始位置。

# --hints--

你的正则表达式应该搜寻首字母大写的 `Cal`。

```js
assert(calRegex.source == '^Cal');
```

你的正则表达式不应该使用任何标志。

```js
assert(calRegex.flags == '');
```

你的正则表达式应该匹配字符串 `Cal` 的开始位置。

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

你的正则表达式不应该匹配中间包含 `Cal` 的字符串。

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
