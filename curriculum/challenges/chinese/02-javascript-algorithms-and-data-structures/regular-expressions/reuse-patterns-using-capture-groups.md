---
id: 587d7dbb367417b2b2512baa
title: 使用捕获组重用模式
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

当你想要匹配一个像下面这样多次出现的单词，

```js
let repeatStr = "row row row your boat";
```

你可以使用 `/row row row/`。但如果你不知道重复的特定单词，怎么办？ <dfn>捕获组</dfn> 可以用于找到重复的子字符串。

捕获组是通过把要捕获的正则表达式放在括号中来构建的。 在这个例子里， 目标是捕获一个包含字母数字字符的词，所以捕获组是将 `\w+` 放在括号中：`/(\w+)/`。

分组匹配的子字符串被保存到一个临时的“变量”， 可以使用同一正则表达式和反斜线及捕获组的编号来访问它（例如：`\1`）。 捕获组按其开头括号的位置自动编号（从左到右），从 1 开始。

下面的示例是匹配被空格隔开的两个相同单词：

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

在字符串上调用 `.match()` 方法将返回一个数组，其中包含它最终匹配到的子字符串及其捕获组。


# --instructions--

在 `reRegex` 中使用捕获组来匹配一个只由相同的数字重复三次组成的由空格分隔字符串。

# --hints--

你的正则表达式应该使用数字的简写字符类。

```js
assert(reRegex.source.match(/\\d/));
```

你的正则表达式应该使用捕获组两次。

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

你的正则表达式应该匹配字符串 `42 42 42`。

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

你的正则表达式应该匹配字符串 `100 100 100`。

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

你的正则表达式不应匹配字符串 `42 42 42 42`。

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

你的正则表达式不应该匹配字符串 `42 42`。

```js
assert.equal('42 42'.match(reRegex.source), null);
```

你的正则表达式不应该匹配字符串 `101 102 103`。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

你的正则表达式不应匹配字符串 `1 2 3`。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

你的正则表达式应该匹配字符串 `10 10 10`。

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

你的正则表达式不应匹配字符串 `42\t42\t42`。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

你的正则表达式不应匹配字符串 `42  42  42`。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
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
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```
