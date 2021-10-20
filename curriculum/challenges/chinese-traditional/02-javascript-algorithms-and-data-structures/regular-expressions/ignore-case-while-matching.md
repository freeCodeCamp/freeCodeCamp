---
id: 587d7db4367417b2b2512b91
title: 匹配時忽略大小寫
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

到目前爲止，已經瞭解瞭如何用正則表達式來執行字符串的匹配。 但有時候，並不關注匹配字母的大小寫。

大小寫即大寫字母和小寫字母。 大寫字母如 `A`、`B` 和 `C`。 小寫字母如 `a`、`b` 和 `c`。

可以使用標誌（flag）來匹配這兩種情況。 標誌有很多，不過這裏我們只關注忽略大小寫的標誌——`i`。 可以通過將它附加到正則表達式之後來使用它。 這裏給出使用該標誌的一個實例 `/ignorecase/i`。 這個字符串可以匹配字符串 `ignorecase`、`igNoreCase` 和 `IgnoreCase`。

# --instructions--

編寫正則表達式 `fccRegex` 以匹配 `freeCodeCamp`，忽略大小寫。 正則表達式不應與任何縮寫或帶有空格的變體匹配。

# --hints--

你的正則表達式應該匹配 `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

你的正則表達式應該匹配 `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

你的正則表達式應該匹配 `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

你的正則表達式應該匹配 `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

你的正則表達式不應該匹配 `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

您的正則表達式應該匹配字符串 `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

你的正則表達式不應該匹配 `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

你的正則表達式應該匹配字符串 `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

你的正則表達式應該匹配字符串 `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

你的正則表達式應該匹配字符串 `FReeCodeCAmp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```
