---
id: bd7123c9c448eddfaeb5bdef
title: 查找字符串的長度
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

你可以通過在字符串變量或字符串後面寫上 `.length` 來獲得 `String` 的長度。

```js
console.log("Alan Peter".length);
```

值 `10` 將顯示在控制檯中。 請注意，“Alan” 和 “Peter” 之間的空格字符也被計算在內。

例如，如果我們創建了一個變量 `const firstName = "Ada"`，我們可以通過使用 `firstName.length` 找出字符串 `Ada` 的長度屬性。

# --instructions--

使用 `.length` 屬性將 `lastNameLength` 設置爲 `lastName` 中的字符數。

# --hints--

不能改變 `// Setup` 部分聲明的變量。

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` 應該等於 8。

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

你應該使用 `.length` 獲取 `lastName` 的長度，像這樣 `lastName.length`。

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
