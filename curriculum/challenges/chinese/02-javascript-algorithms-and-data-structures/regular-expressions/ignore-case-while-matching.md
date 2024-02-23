---
id: 587d7db4367417b2b2512b91
title: 匹配时忽略大小写
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

到目前为止，已经了解了如何用正则表达式来执行字符串的匹配。 但有时候，并不关注匹配字母的大小写。

大小写即大写字母和小写字母。 大写字母如 `A`、`B` 和 `C`。 小写字母如 `a`、`b` 和 `c`。

可以使用标志（flag）来匹配这两种情况。 标志有很多，不过这里我们只关注忽略大小写的标志——`i`。 可以通过将它附加到正则表达式之后来使用它。 这里给出使用该标志的一个实例 `/ignorecase/i`。 这个字符串可以匹配字符串 `ignorecase`、`igNoreCase` 和 `IgnoreCase`。

# --instructions--

编写正则表达式 `fccRegex` 以匹配 `freeCodeCamp`，忽略大小写。 正则表达式不应与任何缩写或带有空格的变体匹配。

# --hints--

你的正则表达式应该匹配 `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

你的正则表达式应该匹配 `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

你的正则表达式应该匹配 `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

你的正则表达式应该匹配 `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

你的正则表达式不应该匹配 `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

您的正则表达式应该匹配字符串 `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

你的正则表达式不应该匹配 `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

你的正则表达式应该匹配字符串 `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

你的正则表达式应该匹配字符串 `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

你的正则表达式应该匹配字符串 `FReeCodeCAmp`

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
