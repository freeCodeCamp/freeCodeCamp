---
id: bd7123c9c452eddfaeb5bdef
title: 使用方括號查找字符串中的倒數第 N 個字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

我們既可以獲取字符串的最後一個字符，也可以用獲取字符串的倒數第 N 個字符。

例如，你可以通過 `firstName[firstName.length - 3]` 來獲得 `var firstName = "Augusta"` 字符串中的倒數第三個字符。

例如：

```js
var firstName = "Augusta";
var thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` 的值應該爲字符串 `s`。

# --instructions--

使用方括號（ <dfn>bracket notation</dfn>）來獲得 `lastName` 字符串中的倒數第二個字符。

**提示：** 如果卡住了，請嘗試查看上面的示例。

# --hints--

`secondToLastLetterOfLastName` 應該是字母 `c`。

```js
assert(secondToLastLetterOfLastName === 'c');
```

您應該使用 `.length` 獲取倒數第二個字母。

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
