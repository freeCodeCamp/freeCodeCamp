---
id: bd7123c9c448eddfaeb5bdef
title: 查找字符串的长度
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
---

# --description--

你可以通过在字符串变量或字符串后面写上`.length`来获得字符串变量值的长度。

`"Alan Peter".length; // 10`

例如，我们创建了一个变量`var firstName = "Charles"`，我们就可以通过使用`firstName.length`来获得`"Charles"`字符串的长度。

# --instructions--

使用`.length`属性来获得变量`lastName`的长度，并把它赋值给变量`lastNameLength`。

# --hints--

不能改变 `// Setup` 部分声明的变量。

```js
assert(
  code.match(/var lastNameLength = 0;/) &&
    code.match(/var lastName = "Lovelace";/)
);
```

`lastNameLength`应该等于 8。

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

你应该使用 `.length` 获取 `lastName` 的长度，像这样 `lastName.length`。

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --solutions--

