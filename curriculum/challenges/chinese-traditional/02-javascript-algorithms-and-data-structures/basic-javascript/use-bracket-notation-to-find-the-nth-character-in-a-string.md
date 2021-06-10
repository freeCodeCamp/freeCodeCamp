---
id: bd7123c9c450eddfaeb5bdef
title: 使用方括號查找字符串中的第 N 個字符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

你也可以使用方括號（ <dfn>bracket notation</dfn>）來獲得一個字符串中的其他位置的字符。

請記住，程序是從 `0` 開始計數，所以獲取第一個字符實際上是第零個字符串。

例如：

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` 值應該爲字符串 `d`。

# --instructions--

讓我們使用方括號，把 `lastName` 變量的第三個字符賦值給 `thirdLetterOfLastName`。

**提示：** 如果卡住了，請嘗試查看上面的示例。

# --hints--

`thirdLetterOfLastName` 變量值應該爲 `v` 。

```js
assert(thirdLetterOfLastName === 'v');
```

應該使用方括號表示法。

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
