---
id: 587d7db6367417b2b2512b99
title: 匹配出现一次或多次的字符
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

有时，需要匹配出现一次或者连续多次的的字符（或字符组）。 这意味着它至少出现一次，并且可能重复出现。

可以使用 `+` 符号来检查情况是否如此。 记住，字符或匹配模式必须一个接一个地连续出现。 这就是说，字符必须一个接一个地重复。

例如，`/a+/g` 会在 `abc` 中匹配到一个匹配项，并且返回 `["a"]`。 因为 `+` 的存在，它也会在 `aabc` 中匹配到一个匹配项，然后返回 `["aa"]`。

如果它是检查字符串 `abab`，它将匹配到两个匹配项并且返回`["a", "a"]`，因为`a`字符不连续，在它们之间有一个`b`字符。 最后，因为在字符串 `bcd` 中没有 `a`，因此找不到匹配项。

# --instructions--

想要在字符串 `Mississippi` 中匹配到出现一次或多次的字母 `s` 的匹配项。 编写一个使用 `+` 符号的正则表达式。

# --hints--

你的正则表达式 `myRegex` 应该使用 `+` 符号来匹配一个或多个 `s` 字符。

```js
assert(/\+/.test(myRegex.source));
```

你的正则表达式 `myRegex` 应该匹配两项。

```js
assert(result.length == 2);
```

`result` 变量应该是一个数组，两个匹配的 `ss`

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
