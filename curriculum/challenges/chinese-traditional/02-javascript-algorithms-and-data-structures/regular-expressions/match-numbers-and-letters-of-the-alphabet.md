---
id: 587d7db5367417b2b2512b97
title: 匹配字母表中的數字和字母
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

使用連字符（`-`）匹配字符範圍並不僅限於字母。 它還可以匹配一系列數字。

例如，`/[0-5]/` 匹配 `0` 和 `5` 之間的任意數字，包含 `0` 和 `5`。

此外，還可以在單個字符集中組合一系列字母和數字。

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

創建一個正則表達式，使其可以匹配 `h` 和 `s` 之間的一系列字母，以及 `2` 和 `6` 之間的一系列數字。 請記得在正則表達式中包含恰當的標誌。

# --hints--

你的正則表達式 `myRegex` 應該匹配 17 項。

```js
assert(result.length == 17);
```

你的正則表達式 `myRegex` 應該使用全局標誌。

```js
assert(myRegex.flags.match(/g/).length == 1);
```

你的正則表達式 `myRegex` 應該使用忽略大小寫的標誌。

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
