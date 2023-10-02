---
id: 587d7dba367417b2b2512ba9
title: 正向先行斷言和負向先行斷言
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

先行斷言 （<dfn>Lookaheads</dfn>）是告訴 JavaScript 在字符串中向前查找的匹配模式。 當想要在同一個字符串上搜尋多個匹配模式時，這可能非常有用。

有兩種先行斷言：正向先行斷言（<dfn>positive lookahead</dfn>）和負向先行斷言（<dfn>negative lookahead</dfn>）。

正向先行斷言會查看並確保搜索匹配模式中的元素存在，但實際上並不匹配。 正向先行斷言的用法是 `(?=...)`，其中 `...` 就是需要存在但不會被匹配的部分。

另一方面，負向先行斷言會查看並確保搜索匹配模式中的元素不存在。 負向先行斷言的用法是 `(?!...)`，其中 `...` 是希望不存在的匹配模式。 如果負向先行斷言部分不存在，將返回匹配模式的其餘部分。

儘管先行斷言有點兒令人困惑，但是這些示例會有所幫助。

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

這兩次 `match` 調用都將返回 `["q"]`。

先行斷言的更實際用途是檢查一個字符串中的兩個或更多匹配模式。 這裏有一個簡單的密碼檢查器，密碼規則是 3 到 6 個字符且至少包含一個數字：

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

在正則表達式 `pwRegex` 中使用先行斷言以匹配大於 5 個字符且有兩個連續數字的密碼。

# --hints--

你的正則表達式應該使用兩個正向先行斷言（ `lookaheads`）。

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

您的正則表達式不應匹配字符串 `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

你的正則表達式不應匹配字符串 `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

你的正則表達式應該匹配字符串 `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

你的正則表達式應該匹配字符串 `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

你的正則表達式不應匹配字符串 `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

你的正則表達式應該匹配字符串 `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

你的正表達式不應匹配字符串 `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

你的正則表達式應該匹配字符串 `astr1on11aut`

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
