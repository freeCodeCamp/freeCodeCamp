---
id: 587d7db7367417b2b2512b9c
title: 在狩猎中找到一个或多个罪犯
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

是时候停一停来测试你的正则表达式使用能力了。 一群罪犯越狱逃跑了，但你不知道有多少人。 然而，你知道他们不在一起时会保持紧密联系。 你有责任立刻找到所有的罪犯。

这里有一个示例来提示如何做到这一点：

当字母`z`在一行中出现一次或连续多次时，正则表达式`/z+/`会匹配到它。 它会在以下所有字符串中找到匹配项：

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

但是它不会在以下字符串中找到匹配项，因为它们中没有字母`z`：

```js
""
"ABC"
"abcabc"
```

# --instructions--

编写一个贪婪正则表达式，在一组其他人中匹配到一个或多个罪犯。 罪犯由大写字母`C`表示。

# --hints--

您的正则表达式应该匹配字符串 `C` 中的一个罪犯(`C`)

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

您的正则表达式应该匹配字符串 `CC` 中的两个罪犯(`CC`)

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

您的正则表达式应该在字符串 `P1P5P4CCCcP2P6P3` 中匹配三个罪犯(`CCC`)。

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

您的正则表达式应该在字符串 `P6P2P7P4P5CCCCCP3P1`中匹配五个罪犯(`CCCCC`)

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

你的正则表达式在`""`中不应该匹配到任何罪犯

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

你的正则表达式在`P1P2P3`中不应该匹配到任何罪犯

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

你的正则表达式应该在`P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`中匹配五十个 罪犯（'`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`'）。

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
