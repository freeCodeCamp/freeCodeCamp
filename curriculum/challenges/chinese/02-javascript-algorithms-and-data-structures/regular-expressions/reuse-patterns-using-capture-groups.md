---
id: 587d7dbb367417b2b2512baa
title: 使用捕获组重用模式
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

一些你所搜寻的匹配模式会在字符串中出现多次，手动重复该正则表达式太浪费了。有一种更好的方法可以指定何时在字符串中会有多个重复的子字符串。

可以使用`捕获组`搜寻重复的子字符串。括号`(`和`)`可以用来匹配重复的子字符串。只需要把重复匹配模式的正则表达式放在括号中即可。

要指定重复字符串将出现的位置，可以使用反斜杠（`\`）后接一个数字。这个数字从 1 开始，随着你使用的每个捕获组的增加而增加。这里有一个示例，`\1`可以匹配第一个组。

下面的示例匹配任意两个被空格分割的单词：

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

在字符串上使用`.match()`方法将返回一个数组，其中包含它匹配的字符串及其捕获组。

# --instructions--

在正则表达式`reRegex`中使用`捕获组`，以匹配在字符串中仅重复三次的数字，每一个都由空格分隔。

# --hints--

你的正则表达式应该使用数字的速记元字符。

```js
assert(reRegex.source.match(/\\d/));
```

你的正则表达式应该重用两次捕获组。

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

你的正则表达式应该有两个空格分隔这三个数字。

```js
assert(
  reRegex.source.match(/ |\\s/g).length === 2 ||
    reRegex.source.match(/\(\\s\)(?=.*\\(1|2))/g)
);
```

你的正则表达式应该匹配`'42 42 42'`。

```js
assert(reRegex.test('42 42 42'));
```

你的正则表达式应该匹配`'100 100 100'`。

```js
assert(reRegex.test('100 100 100'));
```

你的正则表达式不应该匹配`'42 42 42 42'`。

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

你的正则表达式不应该匹配`'42 42'`。

```js
assert.equal('42 42'.match(reRegex.source), null);
```

你的正则表达式不应该匹配`'101 102 103'`。

```js
assert(!reRegex.test('101 102 103'));
```

你的正则表达式不应该匹配`'1 2 3'`。

```js
assert(!reRegex.test('1 2 3'));
```

你的正则表达式应该匹配`'10 10 10'`。

```js
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
