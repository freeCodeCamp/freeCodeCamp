---
id: 587d7db8367417b2b2512ba0
title: 匹配除了字母和数字的所有符号
challengeType: 1
forumTopicId: 301353
---

# --description--

已经了解到可以使用缩写`\w`来匹配字母和数字`[A-Za-z0-9_]`。不过，有可能想要搜寻的匹配模式是非字母数字字符。

可以使用`\W`搜寻和`\w`相反的匹配模式。注意，相反匹配模式使用大写字母。此缩写与`[^A-Za-z0-9_]`是一样的。

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

# --instructions--

使用缩写`\W`来计算不同引号和字符串中非字母数字字符的数量。

# --hints--

你的正则表达式应该使用全局状态修正符。

```js
assert(nonAlphabetRegex.global);
```

你的正则表达式应该在`'The five boxing wizards jump quickly.'`中匹配到 6 个非字母数字字符。

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

正则表达式应该使用元字符来匹配非字母字符。

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

你的正则表达式应该在`'Pack my box with five dozen liquor jugs.'`中匹配到 8 个非字母数字字符。

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

你的正则表达式应该在`'How vexingly quick daft zebras jump!'`中匹配到 6 个非字母数字字符。

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

你的正则表达式应该在`'123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'`中匹配到 12 个非字母数字字符。

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --solutions--

