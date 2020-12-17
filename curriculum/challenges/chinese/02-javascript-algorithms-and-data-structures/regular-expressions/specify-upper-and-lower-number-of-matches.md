---
id: 587d7db9367417b2b2512ba5
title: 指定匹配的上限和下限
challengeType: 1
forumTopicId: 301367
---

# --description--

回想一下，使用加号`+`查找一个或多个字符，使用星号`*`查找零个或多个字符。这些都很方便，但有时需要匹配一定范围的匹配模式。

可以使用`数量说明符`指定匹配模式的上下限。数量说明符与花括号（`{`和`}`）一起使用。可以在花括号之间放两个数字，这两个数字代表匹配模式的上限和下限。

例如，要在字符串`"ah"`中匹配仅出现`3`到`5`次的字母`a`，正则表达式应为`/a{3,5}h/`。

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

# --instructions--

修改正则表达式`ohRegex`以匹配在`"Oh no"`中仅出现`3`到`6`次的字母`h`。

# --hints--

你的正则表达式应该使用花括号。

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

你的正则表达式不应该匹配`'Ohh no'`。

```js
assert(!ohRegex.test('Ohh no'));
```

你的正则表达式应该匹配`'Ohhh no'`。

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

正则表达式应该匹配 `"Ohhhh no"`。

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

你的正则表达式应该匹配`'Ohhhhh no'`。

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

你的正则表达式应该匹配`'Ohhhhhh no'`。

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

你的正则表达式不应该匹配`'Ohhhhhhh no'`。

```js
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --solutions--

