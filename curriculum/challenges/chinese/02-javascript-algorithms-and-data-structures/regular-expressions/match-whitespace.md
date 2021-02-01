---
id: 587d7db8367417b2b2512ba3
title: 匹配空白字符
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

迄今为止的挑战包括匹配的字母和数字。还可以匹配字母之间的空格。

可以使用`\s`搜寻空格，其中`s`是小写。此匹配模式不仅匹配空格，还匹配回车符、制表符、换页符和换行符，可以将其视为与`[\r\t\f\n\v]`类似。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

# --instructions--

修改正则表达式`countWhiteSpace`查找字符串中的多个空白字符。

# --hints--

你的正则表达式应该使用全局状态修正符。

```js
assert(countWhiteSpace.global);
```

正则表达式应该使用元字符 `\s` 匹配所有的空白。

```js
assert(/\\s/.test(countWhiteSpace.source));
```

你的正则表达式应该在`'Men are from Mars and women are from Venus.'`中匹配到 8 个空白字符。

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

你的正则表达式应该在`"Space: the final frontier."`中匹配到 3 个空白字符。

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

你的正则表达式在`'MindYourPersonalSpace'`中应该匹配不到空白字符。

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
