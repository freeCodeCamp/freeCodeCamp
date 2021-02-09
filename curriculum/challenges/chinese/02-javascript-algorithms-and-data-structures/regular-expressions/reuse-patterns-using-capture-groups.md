---
id: 587d7dbb367417b2b2512baa
title: 使用捕获组重用模式
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

一些你所搜寻的匹配模式会在字符串中出现多次， 手动重复该正则表达式显得不够简洁。 当字符串中出现多个重复子字符串时，有一种更好的方式来编写模式。

可以使用 <dfn>捕获组</dfn> 搜寻重复的子字符串。 括号 `(` 和 `)` 可以用来匹配重复的子字符串。 把需要重复匹配的模式放在括号中即可。

要指定重复字符串将出现的位置，可以使用反斜杠（<code>\\</code>）后接一个数字。 这个数字从 1 开始，随着你使用的每个捕获组的增加而增加。 这里有一个示例，`\1`可以匹配第一个组。

下面的示例展示的是匹配被空格隔开的两个相同单词：

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

在字符串上调用 `.match()` 方法将返回一个数组，其中包含它最终匹配到的字符串及其捕获组。

# --instructions--

Use capture groups in `reRegex` to match a string that consists of only the same number repeated exactly three times separated by single spaces.

# --hints--

你的正则表达式应该使用数字的简写字符类。

```js
assert(reRegex.source.match(/\\d/));
```

你的正则表达式应该使用两次捕获组。

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

Your regex should match `"42 42 42"`.

```js
assert(reRegex.test('42 42 42'));
```

Your regex should match `"100 100 100"`.

```js
assert(reRegex.test('100 100 100'));
```

Your regex should not match `"42 42 42 42"`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

Your regex should not match `"42 42"`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

Your regex should not match `"101 102 103"`.

```js
assert(!reRegex.test('101 102 103'));
```

Your regex should not match `"1 2 3"`.

```js
assert(!reRegex.test('1 2 3'));
```

Your regex should match `"10 10 10"`.

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
