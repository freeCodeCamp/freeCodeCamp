---
id: 587d7db7367417b2b2512b9f
title: 匹配所有的字母和数字
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

使用元字符，可以使用 `[a-z]` 搜寻字母表中的所有字母。 这种元字符是很常见的，它有一个缩写，但这个缩写也包含额外的字符。

JavaScript 中与字母表匹配的最接近的元字符是`\w`。 这个缩写等同于`[A-Za-z0-9_]`。 此字符类匹配大写字母和小写字母以及数字。 注意，这个字符类也包含下划线字符 (`_`)。

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

上面的 `test` 都会返回 `true`。

这些元字符缩写也被称为短语元字符 <dfn>shorthand character classes</dfn>。

# --instructions--

使用元字符 `\w` 来计算所有引号中字母和数字字符的数量。

# --hints--

您的正则表达式应该使用全局标识。

```js
assert(alphabetRegexV2.global);
```

正则表达式应该使用元字符r `\w` 来匹配非字母字符。

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

你的正则表达式应该在 `The five boxing wizards jump quickly.` 中匹配到 31 个字母数字字符。

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

你的正则表达式应该在 `Pack my box with five dozen liquor jugs.` 中匹配到 32 个字母数字字符。

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

你的正则表达式应该在 `How vexingly quick daft zebras jump!` 中匹配到 30 个字母数字字符。

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

你的正则表达式应该在字符串 `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.` 中找到36个字母数字字符。

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
