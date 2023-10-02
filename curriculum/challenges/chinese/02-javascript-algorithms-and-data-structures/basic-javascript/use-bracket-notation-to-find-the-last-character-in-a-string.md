---
id: bd7123c9c451eddfaeb5bdef
title: 使用方括号查找字符串中的最后一个字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

要获取字符串的最后一个字符，可以用字符串的长度减 1 的索引值。

例如，如果 `const firstName = "Ada"`，则可以使用 `firstName[firstName.length - 1]` 获取字符串最后一个字母的值。

示例：

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` 值为字符串 `a`。

# --instructions--

使用方括号表示法（ <dfn>bracket notation</dfn>）来找到 `lastName` 变量中的最后一个字符。

**提示：** 如果卡住了，请尝试查看上面的示例。

# --hints--

`lastLetterOfLastName` 应该是字母 `e`。

```js
assert(lastLetterOfLastName === 'e');
```

您应该使用 `.length` 获取最后一个字母。

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```
