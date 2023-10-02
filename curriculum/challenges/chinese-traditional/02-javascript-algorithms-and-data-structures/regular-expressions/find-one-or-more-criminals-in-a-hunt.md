---
id: 587d7db7367417b2b2512b9c
title: 在狩獵中找到一個或多個罪犯
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

是時候停一停來測試你的正則表達式使用能力了。 一羣罪犯越獄逃跑了，但你不知道有多少人。 然而，你知道他們不在一起時會保持緊密聯繫。 你有責任立刻找到所有的罪犯。

這裏有一個示例來提示如何做到這一點：

當字母`z`在一行中出現一次或連續多次時，正則表達式`/z+/`會匹配到它。 它會在以下所有字符串中找到匹配項：

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

但是它不會在以下字符串中找到匹配項，因爲它們中沒有字母`z`：

```js
""
"ABC"
"abcabc"
```

# --instructions--

編寫一個貪婪正則表達式，在一組其他人中匹配到一個或多個罪犯。 罪犯由大寫字母`C`表示。

# --hints--

您的正則表達式應該匹配字符串 `C` 中的一個罪犯(`C`)

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

您的正則表達式應該匹配字符串 `CC` 中的兩個罪犯(`CC`)

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

您的正則表達式應該在字符串 `P1P5P4CCCcP2P6P3` 中匹配三個罪犯(`CCC`)。

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

您的正則表達式應該在字符串 `P6P2P7P4P5CCCCCP3P1`中匹配五個罪犯(`CCCCC`)

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

你的正則表達式在`""`中不應該匹配到任何罪犯

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

你的正則表達式在`P1P2P3`中不應該匹配到任何罪犯

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

你的正則表達式應該在`P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`中匹配五十個 罪犯（'`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`'）。

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```
