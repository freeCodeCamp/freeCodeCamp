---
id: 587d7b84367417b2b2512b37
title: 捕捉单引号和双引号的混合用法
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript 允许使用单引号（`'`）和双引号（`"`）声明字符串。 决定使用哪一个通常看个人偏好，但有一些例外。

如果字符串中有缩写或存在一段带引号的文本，你就会明白为什么 JavaScript 允许两种引号了。 请注意，不要提前用引号结束字符串，这会导致语法错误。

下面是混合使用引号的一些示例：

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

前两项是正确的，但第三项是不正确的。

当然，只使用一种引号也是可以的。 可以使用反斜杠（`\`）来转义字符串内的引号：

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

修复字符串，使其对 `href` 值使用不同的引号，或者转义现有的引号。 在整个字符串周围保留双引号。

# --hints--

你应通过更改或转义来修复 `href` 的值 `#Home` 周围的引号。

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

你应该在整个字符串外围保留双引号。

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
