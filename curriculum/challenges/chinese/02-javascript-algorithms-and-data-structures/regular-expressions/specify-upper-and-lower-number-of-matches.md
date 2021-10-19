---
id: 587d7db9367417b2b2512ba5
title: 指定匹配的上限和下限
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

回想一下，使用加号 `+` 查找一个或多个字符，使用星号 `*` 查找零个或多个字符。 这些都很方便，但有时需要匹配一定范围的匹配模式。

可以使用数量说明符（<dfn>quantity specifiers</dfn>）指定匹配模式的上下限。 数量说明符与花括号（`{` 和 `}`）一起使用。 可以在花括号之间放两个数字，这两个数字代表匹配模式的上限和下限。

例如，要匹配出现 `3` 到 `5` 次字母 `a` 的在字符串 `ah`，正则表达式应为`/a{3,5}h/`。

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

第一次 `test` 调用将返回 `true`，而第二次调用将返回 `false`。

# --instructions--

修改正则表达式 `ohRegex` 以匹配出现 `3` 到 `6` 次字母 `h` 的字符串 `Oh no`。

# --hints--

你的正则表达式应该使用花括号。

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

你的正则表达式不应匹配字符串 `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

你的正则表达式应该匹配字符串 `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

你的正则表达式应该匹配字符串 `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

你的正则表达式应该匹配字符串 `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

你的正则表达式应该匹配字符串 `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

你的正则表达式应该匹配字符串 `Ohhhhhhh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
