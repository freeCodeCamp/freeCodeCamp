---
id: 587d7db9367417b2b2512ba6
title: 只指定匹配的下限
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

可以使用帶有花括號的數量說明符來指定匹配模式的上下限。 但有時候只想指定匹配模式的下限而不需要指定上限。

爲此，在第一個數字後面跟一個逗號即可。

例如，要匹配至少出現 `3` 次字母 `a` 的字符串 `hah`，正則表達式應該是 `/ha{3,}h/`。

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

按順序排列，三次 `test` 調用將返回值 `true`，`false` 和 `true`。

# --instructions--

修改正則表達式 `haRegex`，匹配包含四個或更多字母 `z` 的單詞 `Hazzah`。

# --hints--

你的正則表達式應該使用花括號。

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

你的正則表達式不應匹配字符串 `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

你的正則表達式不應匹配字符串 `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

你的正則表達式應該匹配字符串 `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

你的正則表達式應該匹配字符串 `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

你的正則表達式應該匹配字符串 `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

你的正則表達式應該匹配包含 30 個字母 `z` 的 `Hazzah`。

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
