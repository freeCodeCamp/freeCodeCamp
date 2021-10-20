---
id: 587d7dba367417b2b2512ba9
title: 正向先行断言和负向先行断言
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

先行断言 （<dfn>Lookaheads</dfn>）是告诉 JavaScript 在字符串中向前查找的匹配模式。 当想要在同一个字符串上搜寻多个匹配模式时，这可能非常有用。

有两种先行断言：正向先行断言（<dfn>positive lookahead</dfn>）和负向先行断言（<dfn>negative lookahead</dfn>）。

正向先行断言会查看并确保搜索匹配模式中的元素存在，但实际上并不匹配。 正向先行断言的用法是 `(?=...)`，其中 `...` 就是需要存在但不会被匹配的部分。

另一方面，负向先行断言会查看并确保搜索匹配模式中的元素不存在。 负向先行断言的用法是 `(?!...)`，其中 `...` 是希望不存在的匹配模式。 如果负向先行断言部分不存在，将返回匹配模式的其余部分。

尽管先行断言有点儿令人困惑，但是这些示例会有所帮助。

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

这两次 `match` 调用都将返回 `["q"]`。

先行断言的更实际用途是检查一个字符串中的两个或更多匹配模式。 这里有一个简单的密码检查器，密码规则是 3 到 6 个字符且至少包含一个数字：

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

在正则表达式 `pwRegex` 中使用先行断言以匹配大于 5 个字符且有两个连续数字的密码。

# --hints--

你的正则表达式应该使用两个正向先行断言（ `lookaheads`）。

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

您的正则表达式不应匹配字符串 `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

你的正则表达式不应匹配字符串 `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

你的正则表达式应该匹配字符串 `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

你的正则表达式应该匹配字符串 `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

你的正则表达式不应匹配字符串 `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

你的正则表达式应该匹配字符串 `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

你的正表达式不应匹配字符串 `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

你的正则表达式应该匹配字符串 `astr1on11aut`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
