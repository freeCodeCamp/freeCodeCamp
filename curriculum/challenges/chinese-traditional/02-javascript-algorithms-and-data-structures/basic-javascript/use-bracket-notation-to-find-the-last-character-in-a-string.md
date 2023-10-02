---
id: bd7123c9c451eddfaeb5bdef
title: 使用方括號查找字符串中的最後一個字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

要獲取字符串的最後一個字符，可以用字符串的長度減 1 的索引值。

例如，如果 `const firstName = "Ada"`，則可以使用 `firstName[firstName.length - 1]` 獲取字符串最後一個字母的值。

示例：

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` 值爲字符串 `a`。

# --instructions--

使用方括號表示法（ <dfn>bracket notation</dfn>）來找到 `lastName` 變量中的最後一個字符。

**提示：** 如果卡住了，請嘗試查看上面的示例。

# --hints--

`lastLetterOfLastName` 應該是字母 `e`。

```js
assert(lastLetterOfLastName === 'e');
```

您應該使用 `.length` 獲取最後一個字母。

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
