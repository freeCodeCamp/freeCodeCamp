---
id: 587d7db9367417b2b2512ba6
title: 只指定匹配的下限
challengeType: 1
forumTopicId: 301366
---

# --description--

可以使用带有花括号的`数量说明符`来指定匹配模式的上下限。但有时候只想指定匹配模式的下限而不需要指定上限。

为此，在第一个数字后面跟一个逗号即可。

例如，要匹配至少出现`3`次字母`a`的字符串`"hah"`，正则表达式应该是`/ha{3,}h/`。

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```

# --instructions--

修改正则表达式`haRegex`，匹配包含四个或更多字母`z`的单词`"Hazzah"`。

# --hints--

你的正则表达式应该使用花括号。

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

你的正则表达式不应该匹配`'Hazzah'`。

```js
assert(!haRegex.test('Hazzah'));
```

你的正则表达式不应该匹配`'Hazzzah'`。

```js
assert(!haRegex.test('Hazzzah'));
```

正则表达式应该匹配 `"Hazzzzah"`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

你的正则表达式应该匹配`'Hazzzzah'`。

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

正则表达式应该匹配 `"Hazzzzzzah"`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

正则表达式应该匹配 `"Hazzah"` with 30 `z`'s in it.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --solutions--

