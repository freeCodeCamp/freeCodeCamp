---
id: 587d7db8367417b2b2512ba3
title: 匹配空白字符
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

迄今爲止的挑戰包括匹配字母和數字。 還可以匹配字符之間的空格。

可以使用 `\s` 搜尋空格，其中 `s` 是小寫。 此匹配模式將匹配空格、回車符、製表符、換頁符和換行符。 可以認爲這類似於元字符 `[ \r\t\f\n\v]`。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

這個 `match` 調用將返回 `[" ", " "]`。
# --instructions--

修改正則表達式 `countWhiteSpace` 查找字符串中的多個空白字符。

# --hints--

你的正則表達式應該使用全局標識。

```js
assert(countWhiteSpace.global);
```

正則表達式應該使用元字符 `\s` 匹配所有的空白。

```js
assert(/\\s/.test(countWhiteSpace.source));
```

你的正則表達式應該在字符串 `Men are from Mars and women are from Venus.` 中找到 8 個非空格字符。

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

你的正則表達式應該在 `Space: the final frontier.` 中匹配到 3 個非空白字符。

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

你的正則表達式在 `MindYourPersonalSpace` 中應該匹配不到空白字符。

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
