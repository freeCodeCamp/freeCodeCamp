---
id: 587d7db5367417b2b2512b95
title: 将单个字符与多种可能性匹配
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

已经了解了文字匹配模式（`/literal/`）和通配符（`/./`）。 这是正则表达式的两种极端情况，一种是精确匹配，而另一种则是匹配所有。 在这两种极端情况之间有一个平衡选项。

可以使用字符集 （<dfn>character classes</dfn>）更灵活的匹配字符。 可以把字符集放在方括号（`[` 和 `]`）之间来定义一组需要匹配的字符串。

例如，如果想要匹配 `bag`、`big` 和 `bug`，但是不想匹配 `bog`。 可以创建正则表达式 `/b[aiu]g/` 来执行此操作。 `[aiu]` 是只匹配字符 `a`、`i` 或者 `u` 的字符集。

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

按顺序排列，四次 `match` 调用将返回值 `["big"]`、`["bag"]`、`["bug"]` 和 `null`。

# --instructions--

使用元音字符集（`a`、`e`、`i`、`o`、`u`）在正则表达式 `vowelRegex` 中匹配到字符串 `quoteSample` 中的所有元音。

**注意:**一定要同时匹配大小写元音。

# --hints--

你应该匹配到所有25个元音。

```js
assert(result.length == 25);
```

你的正则表达式 `vowelRegex` 应该使用字符集。

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

你的正则表达式 `vowelRegex` 应该使用全局标志。

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

你的正则表达式 `vowelRegex` 应该使用忽略大小写标志。

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

你的正则表达式不应该匹配任何辅音。

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
