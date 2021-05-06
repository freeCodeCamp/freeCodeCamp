---
id: 587d7db6367417b2b2512b98
title: 匹配單個未指定的字符
challengeType: 1
forumTopicId: 301358
dashedName: match-single-characters-not-specified
---

# --description--

到目前爲止，已經創建了一個想要匹配的字符集合，但也可以創建一個不想匹配的字符集合。 這些類型的字符集稱爲否定字符集（ <dfn>negated character sets</dfn>）。

要創建否定字符集，需要在開始括號後面和不想匹配的字符前面放置脫字符（即`^`）。

例如，`/[^aeiou]/gi` 匹配所有非元音字符。 注意，字符 `.`、`!`、`[`、`@`、`/` 和空白字符等也會被匹配，該否定字符集僅排除元音字符。

# --instructions--

創建一個匹配所有非數字或元音字符的正則表達式。 請記得在正則表達式中包含恰當的標誌。

# --hints--

你的正則表達式 `myRegex` 應該匹配 9 項。

```js
assert(result.length == 9);
```

你的正則表達式 `myRegex` 應該使用全局標誌。

```js
assert(myRegex.flags.match(/g/).length == 1);
```

你的正則表達式 `myRegex` 應該使用忽略大小寫標誌。

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
