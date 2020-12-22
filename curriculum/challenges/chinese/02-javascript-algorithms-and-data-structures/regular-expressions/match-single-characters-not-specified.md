---
id: 587d7db6367417b2b2512b98
title: 匹配单个未指定的字符
challengeType: 1
forumTopicId: 301358
---

# --description--

到目前为止，已经创建了一个想要匹配的字符集合，但也可以创建一个不想匹配的字符集合。这些类型的字符集称为`否定字符集`。

要创建`否定字符集`，需要在开始括号后面和不想匹配的字符前面放置`插入字符`（即`^`）。

例如，`/[^aeiou]/gi`匹配所有非元音字符。注意，字符`.`、`!`、`[`、`@`、`/`和空白字符等也会被匹配，该否定字符集仅排除元音字符。

# --instructions--

创建一个匹配所有非数字或元音字符的正则表达式。请记得在正则表达式中包含恰当的标志。

# --hints--

你的正则表达式`myRegex`应该匹配 9 项。

```js
assert(result.length == 9);
```

你的正则表达式`myRegex`应该使用全局标志。

```js
assert(myRegex.flags.match(/g/).length == 1);
```

你的正则表达式`myRegex`应该使用忽略大小写标志。

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --solutions--

