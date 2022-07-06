---
id: bd7123c9c448eddfaeb5bdef
title: 查找字符串的长度
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

你可以通过在字符串变量或字符串后面写上 `.length` 来获得 `String` 的长度。

```js
console.log("Alan Peter".length);
```

值 `10` 将显示在控制台中。 请注意，“Alan” 和 “Peter” 之间的空格字符也被计算在内。

例如，如果我们创建了一个变量 `const firstName = "Ada"`，我们可以通过使用 `firstName.length` 找出字符串 `Ada` 的长度属性。

# --instructions--

使用 `.length` 属性将 `lastNameLength` 设置为 `lastName` 中的字符数。

# --hints--

不能改变 `// Setup` 部分声明的变量。

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` 应该等于 8。

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

你应该使用 `.length` 获取 `lastName` 的长度，像这样 `lastName.length`。

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
