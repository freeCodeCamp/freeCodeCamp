---
id: 587d7db5367417b2b2512b96
title: 匹配字母表中的字母
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

了解了如何使用字符集（<dfn>character sets</dfn>）来指定要匹配的一组字符串，但是有时需要匹配大量字符（例如，字母表中的每个字母）。 有一种写法可以让实现这个功能变得简短。

在字符集中，可以使用连字符（`-`）来定义要匹配的字符范围。

例如，要匹配小写字母 `a` 到 `e`，你可以使用 `[a-e]`。

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

按顺序排列，三次 `match` 调用将返回值 `["cat"]`，`["bat"]` 和 `null`。

# --instructions--

匹配字符串 `quoteSample` 中的所有字母。

**注意**：一定要同时匹配大小写字母。

# --hints--

你的正则表达式 `alphabetRegex` 应该匹配 35 项。

```js
assert(result.length == 35);
```

你的正则表达式 `alphabetRegex` 应该使用全局标识。

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

你的正则表达式 `alphabetRegex` 应该使用忽略大小写标志。

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
