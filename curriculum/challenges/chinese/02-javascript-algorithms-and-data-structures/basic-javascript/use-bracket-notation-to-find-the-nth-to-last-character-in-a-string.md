---
id: bd7123c9c452eddfaeb5bdef
title: 使用方括号查找字符串中的倒数第 N 个字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

我们既可以获取字符串的最后一个字符，也可以用获取字符串的倒数第 N 个字符。

例如，你可以这样 `firstName[firstName.length - 3]` 来获得 `var firstName = "Charles"` 字符串中的倒数第三个字符。

例如：

```js
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` 的值应该为字符串 `l`。

# --instructions--

使用方括号（ <dfn>bracket notation</dfn>）来获得 `lastName` 字符串中的倒数第二个字符。

**提示：** 如果卡住了，请尝试查看上面的示例。

# --hints--

`secondToLastLetterOfLastName` 应该是字母 `c`。

```js
assert(secondToLastLetterOfLastName === 'c');
```

您应该使用 `.length` 获取倒数第二个字母。

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
