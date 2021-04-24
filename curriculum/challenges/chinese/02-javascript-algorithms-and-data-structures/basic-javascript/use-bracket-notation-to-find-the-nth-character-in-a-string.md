---
id: bd7123c9c450eddfaeb5bdef
title: 使用方括号查找字符串中的第 N 个字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

你也可以使用方括号（ <dfn>bracket notation</dfn>）来获得一个字符串中的其他位置的字符。

请记住，程序是从 `0` 开始计数，所以获取第一个字符实际上是第零个字符串。

例如：

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` 值应该为字符串 `d`。

# --instructions--

让我们使用方括号，把 `lastName` 变量的第三个字符赋值给 `thirdLetterOfLastName`。

**提示：** 如果卡住了，请尝试查看上面的示例。

# --hints--

`thirdLetterOfLastName` 变量值应该为 `v` 。

```js
assert(thirdLetterOfLastName === 'v');
```

应该使用方括号表示法。

```js
assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```
