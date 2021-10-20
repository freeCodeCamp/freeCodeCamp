---
id: 587d7db6367417b2b2512b9b
title: 用惰性匹配来查找字符
challengeType: 1
forumTopicId: 301341
dashedName: find-characters-with-lazy-matching
---

# --description--

在正则表达式中，贪婪（<dfn>greedy</dfn>）匹配会匹配到符合正则表达式匹配模式的字符串的最长可能部分，并将其作为匹配项返回。 另一种方案称为懒惰（<dfn>lazy</dfn>）匹配，它会匹配到满足正则表达式的字符串的最小可能部分。

可以将正则表达式 `/t[a-z]*i/` 应用于字符串 `"titanic"`。 这个正则表达式是一个以 `t` 开始，以 `i` 结束，并且中间有一些字母的匹配模式。

正则表达式默认是贪婪匹配，因此匹配返回为 `["titani"]`。 它会匹配到适合该匹配模式的最大子字符串。

但是，你可以使用 `?` 字符来将其变成懒惰匹配。 调整后的正则表达式 `/t[a-z]*?i/` 匹配字符串 `"titanic"` 返回 `["ti"]`。

**注意：**应该避免使用正则表达式解析 HTML，但是可以用正则表达式匹配 HTML 字符串。

# --instructions--

修复正则表达式 `/<.*>/`，让它返回 HTML 标签 `<h1>`，而不是文本 `"<h1>Winter is coming</h1>"`。 请记得在正则表达式中使用通配符 `.` 来匹配任意字符。

# --hints--

`result` 变量应该是一个包含 `<h1>` 的数组

```js
assert(result[0] == '<h1>');
```

`myRegex` 应该使用懒惰匹配

```js
assert(/[^\\][\*\+\?]\?/.test(myRegex));
```

`myRegex` 不应包含字符串 `h1`

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
