---
id: 587d7db8367417b2b2512ba1
title: 匹配所有非数字
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

上一项挑战中展示了如何使用带有小写 `d` 的缩写 `\d` 来搜寻数字。 也可以使用类似的缩写来搜寻非数字，该缩写使用大写的 `D`。

查找非数字字符的缩写是 `\D`。 这等同于字符串 `[^0-9]`，它查找不是 0 - 9 之间数字的单个字符。

# --instructions--

使用非数字缩写 `\D` 来计算电影标题中有多少非数字。

# --hints--

你的正则表达式应该使用缩写来匹配非数字字符。

```js
assert(/\\D/.test(noNumRegex.source));
```

你的正则表达式应该使用全局标识。

```js
assert(noNumRegex.global);
```

你的正则表达式在 `9` 中应该匹配不到非数字。

```js
assert('9'.match(noNumRegex) == null);
```

你的正则表达式应该在 `Catch 22` 中匹配到 6 个非数字。

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

你的正则表达式应该在 `101 Dalmatians` 中匹配到 11 个非数字。

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

你的正则表达式应该在 `One, Two, Three` 中匹配到 15 个非数字。

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

你的正则表达式应该在 `21 Jump Street` 中匹配到 12 个非数字。

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

你的正则表达式应该在 `2001: A Space Odyssey` 中匹配到 17 个非数字。

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
