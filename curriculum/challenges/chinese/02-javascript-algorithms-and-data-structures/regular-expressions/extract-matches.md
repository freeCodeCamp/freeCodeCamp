---
id: 587d7db4367417b2b2512b92
title: 提取匹配项
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

到目前为止，只是检查了一个匹配模式是否存在于字符串中。 还可以使用 `.match()` 方法来提取找到的实际匹配项。

可以使用字符串来调用 `.match()` 方法，并在括号内传入正则表达式。

请看下面的举例：

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

这里第一个 `match` 将返回 `["Hello"]` 第二个将返回 `["expressions"]`。

请注意， `.match` 语法是目前为止一直使用的 `.test` 方法中的“反向”：

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

利用 `.match()` 方法提取单词 `coding`。

# --hints--

`result` 应该有字符串 `coding`

```js
assert(result.join() === 'coding');
```

您的 regex `codingRegex` 应该搜索字符串 `coding`

```js
assert(codingRegex.source === 'coding');
```

您应该使用 `.match()` 方法。

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
