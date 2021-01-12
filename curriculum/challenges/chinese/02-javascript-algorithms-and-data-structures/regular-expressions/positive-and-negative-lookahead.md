---
id: 587d7dba367417b2b2512ba9
title: 正向先行断言和负向先行断言
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

`先行断言`是告诉 JavaScript 在字符串中向前查找的匹配模式。当想要在同一个字符串上搜寻多个匹配模式时，这可能非常有用。

有两种`先行断言`：`正向先行断言`和`负向先行断言`。

`正向先行断言`会查看并确保搜索匹配模式中的元素存在，但实际上并不匹配。正向先行断言的用法是`(?=...)`，其中`...`就是需要存在但不会被匹配的部分。

另一方面，`负向先行断言`会查看并确保搜索匹配模式中的元素不存在。负向先行断言的用法是`(?!...)`，其中`...`是希望不存在的匹配模式。如果负向先行断言部分不存在，将返回匹配模式的其余部分。

尽管先行断言有点儿令人困惑，但是这些示例会有所帮助。

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```

`先行断言`的更实际用途是检查一个字符串中的两个或更多匹配模式。这里有一个简单的密码检查器，密码规则是 3 到 6 个字符且至少包含一个数字：

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

# --instructions--

在正则表达式`pwRegex`中使用`先行断言`以匹配大于5个字符且有两个连续数字的密码，并且不能以数字开头。

# --hints--

你的正则表达式应该使用两个正向`先行断言`。

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

你的正则表达式不应该匹配`'astronaut'`。

```js
assert(!pwRegex.test('astronaut'));
```

你的正则表达式不应该匹配`'airplanes'`。

```js
assert(!pwRegex.test('airplanes'));
```

正则不应该匹配 `"banan1"`

```js
assert(!pwRegex.test('banan1'));
```

你的正则表达式应该匹配`'bana12'`。

```js
assert(pwRegex.test('bana12'));
```

你的正则表达式应该匹配`'abc123'`。

```js
assert(pwRegex.test('abc123'));
```

你的正则表达式不应该匹配`'123'`。

```js
assert(!pwRegex.test('123'));
```

你的正则表达式不应该匹配`'1234'`。

```js
assert(!pwRegex.test('1234'));
```

正则不应该匹配 `"8pass99"`

```js
assert(!pwRegex.test('8pass99'));
```

正则不应该匹配 `"12abcde"`

```js
assert(!pwRegex.test('12abcde'));
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
var pwRegex =  /^\D(?=\w{5})(?=\w*\d{2})/;
```
