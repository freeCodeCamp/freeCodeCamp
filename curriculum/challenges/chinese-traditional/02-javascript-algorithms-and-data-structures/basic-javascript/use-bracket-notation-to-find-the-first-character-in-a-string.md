---
id: bd7123c9c549eddfaeb5bdef
title: 使用方括號查找字符串中的第一個字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

方括號表示法（<dfn>Bracket notation</dfn>）是一種在字符串中的特定 index（索引）處獲取字符的方法。

大多數現代編程語言，如 JavaScript，不同於人類從 1 開始計數。 它們是從 0 開始計數。 這被稱爲基於零（<dfn>Zero-based</dfn>）的索引。

例如，單詞 `Charles` 的索引 0 的字符是 `C`。 所以如果 `const firstName = "Charles"`，你可以通過 `firstName[0]` 得到字符串第一個字母的值。

示例：

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` 值爲字符串 `C` 。

# --instructions--

使用方括號獲取變量 `lastName` 中的第一個字符，並賦給變量 `firstLetterOfLastName`。

**提示：** 如果卡住了，請嘗試查看上面的示例。

# --hints--

`firstLetterOfLastName` 變量值應該爲 `L` 。

```js
assert(firstLetterOfLastName === 'L');
```

應該使用方括號表示法。

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
