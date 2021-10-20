---
id: 587d7db6367417b2b2512b99
title: 匹配出現一次或多次的字符
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

有時，需要匹配出現一次或者連續多次的的字符（或字符組）。 這意味着它至少出現一次，並且可能重複出現。

可以使用 `+` 符號來檢查情況是否如此。 記住，字符或匹配模式必須一個接一個地連續出現。 這就是說，字符必須一個接一個地重複。

例如，`/a+/g` 會在 `abc` 中匹配到一個匹配項，並且返回 `["a"]`。 因爲 `+` 的存在，它也會在 `aabc` 中匹配到一個匹配項，然後返回 `["aa"]`。

如果它是檢查字符串 `abab`，它將匹配到兩個匹配項並且返回`["a", "a"]`，因爲`a`字符不連續，在它們之間有一個`b`字符。 最後，因爲在字符串 `bcd` 中沒有 `a`，因此找不到匹配項。

# --instructions--

想要在字符串 `Mississippi` 中匹配到出現一次或多次的字母 `s` 的匹配項。 編寫一個使用 `+` 符號的正則表達式。

# --hints--

你的正則表達式 `myRegex` 應該使用 `+` 符號來匹配一個或多個 `s` 字符。

```js
assert(/\+/.test(myRegex.source));
```

你的正則表達式 `myRegex` 應該匹配兩項。

```js
assert(result.length == 2);
```

`result` 變量應該是一個數組，兩個匹配的 `ss`

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
