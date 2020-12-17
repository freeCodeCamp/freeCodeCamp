---
id: 587d7db7367417b2b2512b9c
title: 在狩猎中找到一个或多个罪犯
challengeType: 1
forumTopicId: 301343
---

# --description--

是时候暂停和测试你的新正则表达式写作技巧了。一群罪犯逃出监狱逃跑，但你不知道有多少人。但是，你知道他们和其他人在一起时会保持紧密联系。你有责任立刻找到所有的罪犯。

这里有一个示例来回顾如何做到这一点：

当字母`z`在一行中出现一次或连续多次时，正则表达式`/z+/`会匹配到它。它会在以下所有字符串中找到匹配项：

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

编写一个`贪婪`正则表达式，在一组其他人中匹配到一个或多个罪犯。罪犯由大写字母`C`表示。

# --hints--

你的正则表达式应该匹配`'C'`中的 <em>一个</em> 罪犯（'`C`'）。

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

你的正则表达式应该匹配`'CC'`中的 <em>两个</em> 罪犯（'`CC`'）。

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

你的正则表达式应该匹配`'P1P5P4CCCP2P6P3'`中的 <em>三个</em> 罪犯（'`CCC`'）。

```js
assert(
  'P1P5P4CCCP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

你的正则表达式应该匹配`'P6P2P7P4P5CCCCCP3P1'`中的 <em>五个</em> 罪犯（'`CCCCC`'）。

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

你的正则表达式在`''`中不应该匹配到任何罪犯。

```js
assert(!reCriminals.test(''));
```

你的正则表达式在`'P1P2P3'`中不应该匹配到任何罪犯。

```js
assert(!reCriminals.test('P1P2P3'));
```

你的正则表达式应该匹配`'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'`中的 <em>五十个</em> 罪犯（'`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`'）。

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

# --solutions--

