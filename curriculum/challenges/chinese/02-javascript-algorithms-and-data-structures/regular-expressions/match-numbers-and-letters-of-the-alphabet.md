---
id: 587d7db5367417b2b2512b97
title: 匹配字母表中的数字和字母
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

使用连字符（`-`）匹配字符范围并不仅限于字母。 它还可以匹配一系列数字。

例如，`/[0-5]/` 匹配 `0` 和 `5` 之间的任意数字，包含 `0` 和 `5`。

此外，还可以在单个字符集中组合一系列字母和数字。

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

创建一个正则表达式，使其可以匹配 `h` 和 `s` 之间的一系列字母，以及 `2` 和 `6` 之间的一系列数字。 请记得在正则表达式中包含恰当的标志。

# --hints--

你的正则表达式 `myRegex` 应该匹配 17 项。

```js
assert(result.length == 17);
```

你的正则表达式 `myRegex` 应该使用全局标志。

```js
assert(myRegex.flags.match(/g/).length == 1);
```

你的正则表达式 `myRegex` 应该使用忽略大小写的标志。

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
