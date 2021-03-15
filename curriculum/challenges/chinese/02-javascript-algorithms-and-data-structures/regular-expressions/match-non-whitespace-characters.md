---
id: 587d7db9367417b2b2512ba4
title: 匹配非空白字符
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

已经学会了如何使用带有小写 `s` 的缩写 `\s` 来搜寻空白字符。 还可以搜寻除了空格之外的所有内容。

使用 `\S` 搜寻非空白字符，其中 `s` 是大写。 此匹配模式将不匹配空格、回车符、制表符、换页符和换行符。 可以认为这类似于元字符 `[^ \r\t\f\n\v]`。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

返回值的 `.length` 应该是 `32`。

# --instructions--

修改正则表达式 `countNonWhiteSpace` 以查找字符串中的多个非空字符。

# --hints--

您的正则表达式应该使用全局标识。

```js
assert(countNonWhiteSpace.global);
```

你的正则表达式应该使用简写字符 `\S` 来匹配所有非空白字符。

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

您的正则表达式应该在字符串 `Men are from Mars and women are from Venus.` 中找到 35 个非空格字符。

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

你的正则表达式应该在 `Space: the final frontier.` 中匹配到 23 个非空白字符。

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

你的正则表达式应该在 `MindYourPersonalSpace` 中匹配到 21 个非空白字符。

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
