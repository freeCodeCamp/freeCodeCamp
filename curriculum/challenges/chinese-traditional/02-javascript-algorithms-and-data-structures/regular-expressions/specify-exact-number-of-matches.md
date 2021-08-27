---
id: 587d7db9367417b2b2512ba7
title: 指定匹配的確切數量
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

可以使用帶有花括號的數量說明符來指定匹配模式的上下限。 但有時只需要特定數量的匹配。

要指定一定數量的匹配模式，只需在大括號之間放置一個數字。

例如，要只匹配字母 `a` 出現 `3` 次的單詞`hah`，正則表達式應爲`/ha{3}h/`。

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

按順序排列，三次 `test` 調用將返回值 `false`，`true` 和 `false`。

# --instructions--

修改正則表達式`timRegex`，以匹配僅有四個字母 `m` 的單詞 `Timber`。

# --hints--

你的正則表達式應該使用花括號。

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

你的正則表達式不應匹配字符串 `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

你的正則表達式不應匹配字符串 `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

你的正則表達式不應匹配字符串 `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

你的正則表達式應該匹配字符串 `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

你的正則表達式不應該匹配包含 30 個字母 `m` 的 `Timber`。

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
