---
id: bd7123c9c549eddfaeb5bdef
title: 使用方括号查找字符串中的第一个字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

方括号表示法（<dfn>Bracket notation</dfn>）是一种在字符串中的特定 index（索引）处获取字符的方法。

大多数现代编程语言，如 JavaScript，不同于人类从 1 开始计数。 它们是从 0 开始计数。 这被称为基于零（<dfn>Zero-based</dfn>）的索引。

例如，单词 `Charles` 的索引 0 的字符是 `C`。 所以如果 `const firstName = "Charles"`，你可以通过 `firstName[0]` 得到字符串第一个字母的值。

示例：

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` 值为字符串 `C` 。

# --instructions--

使用方括号获取变量 `lastName` 中的第一个字符，并赋给变量 `firstLetterOfLastName`。

**提示：** 如果卡住了，请尝试查看上面的示例。

# --hints--

`firstLetterOfLastName` 变量值应该为 `L` 。

```js
assert(firstLetterOfLastName === 'L');
```

应该使用方括号表示法。

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
