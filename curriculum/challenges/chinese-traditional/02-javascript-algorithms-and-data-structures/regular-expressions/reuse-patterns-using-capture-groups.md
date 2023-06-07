---
id: 587d7dbb367417b2b2512baa
title: 使用捕獲組重用模式
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

當你想要匹配一個像下面這樣多次出現的單詞，

```js
let repeatStr = "row row row your boat";
```

你可以使用 `/row row row/`。但如果你不知道重複的特定單詞，怎麼辦？ <dfn>捕獲組</dfn> 可以用於找到重複的子字符串。

捕獲組是通過把要捕獲的正則表達式放在括號中來構建的。 在這個例子裏， 目標是捕獲一個包含字母數字字符的詞，所以捕獲組是將 `\w+` 放在括號中：`/(\w+)/`。

分組匹配的子字符串被保存到一個臨時的“變量”， 可以使用同一正則表達式和反斜線及捕獲組的編號來訪問它（例如：`\1`）。 捕獲組按其開頭括號的位置自動編號（從左到右），從 1 開始。

下面的示例是匹配被空格隔開的兩個相同單詞：

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

在字符串上調用 `.match()` 方法將返回一個數組，其中包含它最終匹配到的子字符串及其捕獲組。


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
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

你的正則表達式應該匹配字符串 `100 100 100`。

```js
reRegex.lastIndex = 0;
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
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

你的正則表達式不應匹配字符串 `1 2 3`。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

你的正則表達式應該匹配字符串 `10 10 10`。

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

你的正則表達式不應匹配字符串 `42\t42\t42`。

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

你的正則表達式不應匹配字符串 `42  42  42`。

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
