---
id: 587d7db5367417b2b2512b94
title: 用通配符匹配任何內容
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

有時不（或不需要）知道匹配模式中的確切字符。 如果要精確匹配到完整的單詞，那出現一個拼寫錯誤就會匹配不到。 幸運的是，可以使用通配符 `.` 來處理這種情況。

通配符 `.` 將匹配任何一個字符。 通配符也叫 `dot` 或 `period`。 可以像使用正則表達式中任何其他字符一樣使用通配符。 例如，如果想匹配 `hug`、`huh`、`hut` 和 `hum`，可以使用正則表達式 `/hu./` 匹配以上四個單詞。

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

上面的 `test` 都會返回 `true`。

# --instructions--

完成正則表達式 `unRegex` 以匹配字符串 `run`、`sun`、`fun`、`pun`、`nun` 和 `bun`。 正則表達式中應該使用通配符。

# --hints--

你應該使用 `.test()` 方法。

```js
assert(code.match(/\.test\(.*\)/));
```

你應該在你的正則表達式 `unRegex` 中使用通配符。

```js
assert(/\./.test(unRegex.source));
```

你的正則表達式 `unRegex` 應該在字符串 `Let us go on a run.` 中匹配到 `run` 單詞。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

你的正則表達式 `unRegex` 應該在字符串 `The sun is out today.` 中匹配到 `sun` 單詞。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

你的正則表達式 `unRegex` 應該在字符串 `Coding is a lot of fun.` 中匹配到 `fun` 單詞。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

你的正則表達式 `unRegex` 應該在字符串 `Seven days without a pun makes one weak.` 中匹配到 `pun`單詞。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

你的正則表達式 `unRegex` 應該在字符串 `One takes a vow to be a nun.` 中匹配到 `nun` 單詞。

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

你的正則表達式 `unRegex` 應該在字符串 `She got fired from the hot dog stand for putting her hair in a bun.` 中匹配到 `bun` 單詞。

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

你的正則表達式 `unRegex` 不應該匹配 `There is a bug in my code.`。

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

你的正則表達式 `unRegex` 不應該匹配 `Catch me if you can.`。

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
