---
id: 587d7db7367417b2b2512b9d
title: 匹配字符串的開頭
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

回顧一下之前的挑戰，正則表達式可以用於查找多項匹配。 還可以查詢字符串中符合指定匹配模式的字符。

在之前的挑戰中，使用字符集中前插入符號（`^`）來創建一個否定字符集，形如 `[^thingsThatWillNotBeMatched]`。 除了在字符集中使用之外，插入符號（^）用於匹配文本是否在字符串的開始位置

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

第一次 `test` 調用將返回 `true`，而第二次調用將返回 `false`。

# --instructions--

在正則表達式中使用脫字符來找到 `Cal` 在字符串 `rickyAndCal` 中的開始位置。

# --hints--

你的正則表達式應該搜尋首字母大寫的 `Cal`。

```js
assert(calRegex.source == '^Cal');
```

你的正則表達式不應該使用任何標誌。

```js
assert(calRegex.flags == '');
```

你的正則表達式應該匹配字符串 `Cal` 的開始位置。

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

你的正則表達式不應該匹配中間包含 `Cal` 的字符串。

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
