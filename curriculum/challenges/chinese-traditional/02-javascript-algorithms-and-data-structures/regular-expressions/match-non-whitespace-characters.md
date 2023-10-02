---
id: 587d7db9367417b2b2512ba4
title: 匹配非空白字符
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

已經學會了如何使用帶有小寫 `s` 的縮寫 `\s` 來搜尋空白字符。 還可以搜尋除了空格之外的所有內容。

使用 `\S` 搜尋非空白字符，其中 `s` 是大寫。 此匹配模式將不匹配空格、回車符、製表符、換頁符和換行符。 可以認爲這類似於元字符 `[^ \r\t\f\n\v]`。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

返回值的 `.length` 應該是 `32`。

# --instructions--

修改正則表達式 `countNonWhiteSpace` 以查找字符串中的多個非空字符。

# --hints--

您的正則表達式應該使用全局標識。

```js
assert(countNonWhiteSpace.global);
```

你的正則表達式應該使用簡寫字符 `\S` 來匹配所有非空白字符。

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

您的正則表達式應該在字符串 `Men are from Mars and women are from Venus.` 中找到 35 個非空格字符。

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

你的正則表達式應該在 `Space: the final frontier.` 中匹配到 23 個非空白字符。

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

你的正則表達式應該在 `MindYourPersonalSpace` 中匹配到 21 個非空白字符。

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
