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

例如，在`var firstName = "Charles"`中，你可以这样操作`firstName[firstName.length - 1]`来得到字符串的最后的一个字符。

# --instructions--

使用<dfn>方括号&lt;dfn来取得<code>lastName变量中的最后一个字符。 <strong>提示</strong><br>如果你遇到困难了，不妨看看在<code>lastLetterOfFirstName</code>变量上是怎么做的。 &lt;/dfn来取得<code></code></code></dfn>

# --hints--

`lastLetterOfLastName`应该是"e"。

```js
assert(lastLetterOfLastName === 'e');
```

你需要使用`.length`获取最后一个字符。

```js
assert(code.match(/\.length/g).length === 2);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```
