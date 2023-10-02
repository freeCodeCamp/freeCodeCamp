---
id: 56533eb9ac21ba0edf2244b4
title: 用单引号引用字符串
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

JavaScript 中的<dfn>字符串</dfn>可以使用开始和结束都是同类型的单引号或双引号表示。 与其他一些编程语言不同的是，单引号和双引号的功能在 JavaScript 中是相同的。

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

当你需要在一个字符串中使用多个引号的时候，你可以使用单引号包裹双引号或者相反。 常见的场景比如在字符串中包含对话的句子需要用引号包裹。 另外比如在一个包含有 `<a>` 标签的字符串中，标签的属性值需要用引号包裹。

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

然而，如果你需要在其中使用外面的引号，这就成为一个问题。 记住，一个字符串在开头和结尾处有相同的引号。 要知道，字符串在开头和结尾都有相同的引号，如果在中间使用了相同的引号，字符串会提前中止并抛出错误。

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

在这里 `badStr` 会产生一个错误。

在上面的 <dfn>goodStr</dfn> 中，通过使用反斜杠 `\` 转义字符可以安全地使用两种引号。

**提示：** 不要混淆反斜杠 `\` 和斜杠 `/`。 它们不是一回事。

# --instructions--

把字符串更改为开头和结尾使用单引号的字符串，并且不包含转义字符。

这样字符串中的 `<a>` 标签里面任何地方都可以使用双引号。 你需要将最外层引号更改为单引号，以便删除转义字符。

# --hints--

应该删除所有反斜杠（`\`）。

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

应该要有两个单引号 `'` 和四个双引号 `"`。

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
