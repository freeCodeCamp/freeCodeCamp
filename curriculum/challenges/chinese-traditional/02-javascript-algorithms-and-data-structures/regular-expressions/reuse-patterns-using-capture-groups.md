---
id: 587d7dbb367417b2b2512baa
title: 使用捕獲組重用模式
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

一些你所搜尋的匹配模式會在字符串中出現多次。 手動重複該正則表達式顯得不夠簡潔。 當字符串中出現多個重複子字符串時，有一種更好的方式來編寫模式。

可以使用捕獲組（<dfn>capture groups</dfn>）搜尋重複的子字符串。 括號 `(` 和 `)` 可以用來匹配重複的子字符串。 把需要重複匹配的模式放在括號中即可。

要指定重複字符串將出現的位置，可以使用反斜槓（`\`）後接一個數字。 這個數字從 1 開始，隨着你使用的每個捕獲組的增加而增加。 這裏有一個示例，`\1` 可以匹配第一個組。

下面的示例展示的是匹配被空格隔開的兩個相同單詞：

```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
```

`test` 調用將返回 `true`，`match` 調用將返回 `["regex regex", "regex"]`。

在字符串上調用 `.match()` 方法將返回一個數組，其中包含它最終匹配到的字符串及其捕獲組。

# --instructions--

在 `reRegex` 中使用捕獲組來匹配一個只由相同的數字重複三次組成的由空格分隔字符串。

# --hints--

你的正則表達式應該使用數字的簡寫字符類。

```js
assert(reRegex.source.match(/\\d/));
```

你的正則表達式應該使用捕獲組兩次。

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

你的正則表達式應該匹配字符串 `42 42 42`。

```js
assert(reRegex.test('42 42 42'));
```

你的正則表達式應該匹配字符串 `100 100 100`。

```js
assert(reRegex.test('100 100 100'));
```

你的正則表達式不應匹配字符串 `42 42 42 42`。

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

你的正則表達式不應該匹配字符串 `42 42`。

```js
assert.equal('42 42'.match(reRegex.source), null);
```

你的正則表達式不應該匹配字符串 `101 102 103`。

```js
assert(!reRegex.test('101 102 103'));
```

你的正則表達式不應匹配字符串 `1 2 3`。

```js
assert(!reRegex.test('1 2 3'));
```

你的正則表達式不應匹配字符串 `10 10 10`。

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
