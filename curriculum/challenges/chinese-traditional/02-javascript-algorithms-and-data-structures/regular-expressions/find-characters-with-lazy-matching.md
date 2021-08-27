---
id: 587d7db6367417b2b2512b9b
title: 用惰性匹配來查找字符
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

在正則表達式中，貪婪（<dfn>greedy</dfn>）匹配會匹配到符合正則表達式匹配模式的字符串的最長可能部分，並將其作爲匹配項返回。 另一種方案稱爲懶惰（<dfn>lazy</dfn>）匹配，它會匹配到滿足正則表達式的字符串的最小可能部分。

可以將正則表達式 `/t[a-z]*i/` 應用於字符串 `"titanic"`。 這個正則表達式是一個以 `t` 開始，以 `i` 結束，並且中間有一些字母的匹配模式。

正則表達式默認是貪婪匹配，因此匹配返回爲 `["titani"]`。 它會匹配到適合該匹配模式的最大子字符串。

但是，你可以使用 `?` 字符來將其變成懶惰匹配。 調整後的正則表達式 `/t[a-z]*?i/` 匹配字符串 `"titanic"` 返回 `["ti"]`。

**注意：**應該避免使用正則表達式解析 HTML，但是可以用正則表達式匹配 HTML 字符串。

# --instructions--

修復正則表達式 `/<.*>/`，讓它返回 HTML 標籤 `<h1>`，而不是文本 `"<h1>Winter is coming</h1>"`。 請記得在正則表達式中使用通配符 `.` 來匹配任意字符。

# --hints--

`result` 變量應該是一個包含 `<h1>` 的數組

```js
assert(result[0] == '<h1>');
```

`myRegex` 應該使用懶惰匹配

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` 不應包含字符串 `h1`

```js
assert(!myRegex.source.match('h1'));
```

# --seed--

## --seed-contents--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/; // Change this line
let result = text.match(myRegex);
```

# --solutions--

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
```
