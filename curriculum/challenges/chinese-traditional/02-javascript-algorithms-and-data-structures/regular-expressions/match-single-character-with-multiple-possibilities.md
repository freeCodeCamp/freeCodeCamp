---
id: 587d7db5367417b2b2512b95
title: 將單個字符與多種可能性匹配
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

已經瞭解了文字匹配模式（`/literal/`）和通配符（`/./`）。 這是正則表達式的兩種極端情況，一種是精確匹配，而另一種則是匹配所有。 在這兩種極端情況之間有一個平衡選項。

可以使用字符集 （<dfn>character classes</dfn>）更靈活的匹配字符。 可以把字符集放在方括號（`[` 和 `]`）之間來定義一組需要匹配的字符串。

例如，如果想要匹配 `bag`、`big` 和 `bug`，但是不想匹配 `bog`。 可以創建正則表達式 `/b[aiu]g/` 來執行此操作。 `[aiu]` 是隻匹配字符 `a`、`i` 或者 `u` 的字符集。

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

按順序排列，四次 `match` 調用將返回值 `["big"]`、`["bag"]`、`["bug"]` 和 `null`。

# --instructions--

使用元音字符集（`a`、`e`、`i`、`o`、`u`）在正則表達式 `vowelRegex` 中匹配到字符串 `quoteSample` 中的所有元音。

**注意:**一定要同時匹配大小寫元音。

# --hints--

你應該匹配到所有25個元音。

```js
assert(result.length == 25);
```

你的正則表達式 `vowelRegex` 應該使用字符集。

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

你的正則表達式 `vowelRegex` 應該使用全局標誌。

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

你的正則表達式 `vowelRegex` 應該使用忽略大小寫標誌。

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

你的正則表達式不應該匹配任何輔音。

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
