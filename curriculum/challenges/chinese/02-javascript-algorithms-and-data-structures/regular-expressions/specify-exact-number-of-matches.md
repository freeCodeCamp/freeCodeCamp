---
id: 587d7db9367417b2b2512ba7
title: 指定匹配的确切数量
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

可以使用带有花括号的数量说明符来指定匹配模式的上下限。 但有时只需要特定数量的匹配。

要指定一定数量的匹配模式，只需在大括号之间放置一个数字。

例如，要只匹配字母 `a` 出现 `3` 次的单词`hah`，正则表达式应为`/ha{3}h/`。

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

按顺序排列，三次 `test` 调用将返回值 `false`，`true` 和 `false`。

# --instructions--

修改正则表达式`timRegex`，以匹配仅有四个字母 `m` 的单词 `Timber`。

# --hints--

你的正则表达式应该使用花括号。

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

你的正则表达式不应匹配字符串 `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

你的正则表达式不应匹配字符串 `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

你的正则表达式不应匹配字符串 `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

你的正则表达式应该匹配字符串 `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

你的正则表达式不应该匹配包含 30 个字母 `m` 的 `Timber`。

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
