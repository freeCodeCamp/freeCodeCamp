---
id: 587d7db8367417b2b2512ba0
title: 匹配除了字母和數字的所有符號
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

已經瞭解到可以使用縮寫 `\w` 來匹配字母和數字 `[A-Za-z0-9_]`。 不過，有可能想要搜尋的匹配模式是非字母數字字符。

可以使用 `\W` 搜尋和 `\w` 相反的匹配模式。 注意，相反匹配模式使用大寫字母。 此縮寫與 `[^A-Za-z0-9_]` 是一樣的。

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

第一次 `match` 調用將返回值 `["%"]` 而第二次調用將返回 `["!"]`。

# --instructions--

使用縮寫 `\W` 來計算引號中所有非字符字母和數字字符的數量。

# --hints--

你的正則表達式應該使用全局標識。

```js
assert(nonAlphabetRegex.global);
```

你的正則表達式應該在 `The five boxing wizards jump quickly.` 中匹配到 6 個非字母數字字符。

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

正則表達式應該使用元字符來匹配非字母字符。

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

你的正則表達式應該在 `Pack my box with five dozen liquor jugs.` 中匹配到 8 個非字母數字字符。

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

你的正則表達式應該在 `How vexingly quick daft zebras jump!` 中匹配到 6 個非字母數字字符。

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

你的正則表達式應該在字符串 `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.` 中找到12個非字母數字字符。

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
