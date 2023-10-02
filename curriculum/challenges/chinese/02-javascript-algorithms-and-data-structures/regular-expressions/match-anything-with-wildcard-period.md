---
id: 587d7db5367417b2b2512b94
title: 用通配符匹配任何内容
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

有时不（或不需要）知道匹配模式中的确切字符。 如果要精确匹配到完整的单词，那出现一个拼写错误就会匹配不到。 幸运的是，可以使用通配符 `.` 来处理这种情况。

通配符 `.` 将匹配任何一个字符。 通配符也叫 `dot` 或 `period`。 可以像使用正则表达式中任何其他字符一样使用通配符。 例如，如果想匹配 `hug`、`huh`、`hut` 和 `hum`，可以使用正则表达式 `/hu./` 匹配以上四个单词。

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

上面的 `test` 都会返回 `true`。

# --instructions--

完成正则表达式 `unRegex` 以匹配字符串 `run`、`sun`、`fun`、`pun`、`nun` 和 `bun`。 正则表达式中应该使用通配符。

# --hints--

你应该使用 `.test()` 方法。

```js
assert(code.match(/\.test\(.*\)/));
```

你应该在你的正则表达式 `unRegex` 中使用通配符。

```js
assert(/\./.test(unRegex.source));
```

你的正则表达式 `unRegex` 应该在字符串 `Let us go on a run.` 中匹配到 `run` 单词。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

你的正则表达式 `unRegex` 应该在字符串 `The sun is out today.` 中匹配到 `sun` 单词。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

你的正则表达式 `unRegex` 应该在字符串 `Coding is a lot of fun.` 中匹配到 `fun` 单词。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

你的正则表达式 `unRegex` 应该在字符串 `Seven days without a pun makes one weak.` 中匹配到 `pun`单词。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

你的正则表达式 `unRegex` 应该在字符串 `One takes a vow to be a nun.` 中匹配到 `nun` 单词。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

你的正则表达式 `unRegex` 应该在字符串 `She got fired from the hot dog stand for putting her hair in a bun.` 中匹配到 `bun` 单词。

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

你的正则表达式 `unRegex` 不应该匹配 `There is a bug in my code.`。

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

你的正则表达式 `unRegex` 不应该匹配 `Catch me if you can.`。

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
