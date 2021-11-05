---
id: 587d7db7367417b2b2512b9f
title: 匹配所有的字母和數字
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

使用元字符，可以使用 `[a-z]` 搜尋字母表中的所有字母。 這種元字符是很常見的，它有一個縮寫，但這個縮寫也包含額外的字符。

JavaScript 中與字母表匹配的最接近的元字符是`\w`。 這個縮寫等同於`[A-Za-z0-9_]`。 此字符類匹配大寫字母和小寫字母以及數字。 注意，這個字符類也包含下劃線字符 (`_`)。

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

上面的 `test` 都會返回 `true`。

這些元字符縮寫也被稱爲短語元字符 <dfn>shorthand character classes</dfn>。

# --instructions--

使用元字符 `\w` 來計算所有引號中字母和數字字符的數量。

# --hints--

您的正則表達式應該使用全局標識。

```js
assert(alphabetRegexV2.global);
```

正則表達式應該使用元字符r `\w` 來匹配非字母字符。

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

你的正則表達式應該在 `The five boxing wizards jump quickly.` 中匹配到 31 個字母數字字符。

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

你的正則表達式應該在 `Pack my box with five dozen liquor jugs.` 中匹配到 32 個字母數字字符。

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

你的正則表達式應該在 `How vexingly quick daft zebras jump!` 中匹配到 30 個字母數字字符。

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

你的正則表達式應該在字符串 `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.` 中找到36個字母數字字符。

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```
