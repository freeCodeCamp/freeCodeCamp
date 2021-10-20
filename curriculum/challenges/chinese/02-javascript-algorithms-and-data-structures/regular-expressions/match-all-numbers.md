---
id: 5d712346c441eddfaeb5bdef
title: 匹配所有数字
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

已经了解了常见字符串匹配模式的元字符，如字母数字。 另一个常见的匹配模式是只寻找数字。

查找数字字符的缩写是 `\d`，注意是小写的 `d`。 这等同于元字符 `[0-9]`，它查找 0 到 9 之间任意数字的单个字符。

# --instructions--

使用缩写 `\d` 来计算电影标题中有多少个数字。 书面数字（"six" 而不是 6）不计算在内。

# --hints--

你的正则表达式应该使用缩写来匹配数字字符。

```js
assert(/\\d/.test(numRegex.source));
```

您的正则表达式应该使用全局标识。

```js
assert(numRegex.global);
```

你的正则表达式应该在 `9` 中匹配到 1 个数字。

```js
assert('9'.match(numRegex).length == 1);
```

你的正则表达式应该在 `Catch 22` 中匹配到 2 个数字。

```js
assert('Catch 22'.match(numRegex).length == 2);
```

你的正则表达式应该在 `101 Dalmatians` 中匹配到 3 个数字。

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

你的正则表达式在 `One, Two, Three` 中应该匹配不到数字。

```js
assert('One, Two, Three'.match(numRegex) == null);
```

你的正则表达式应该在 `21 Jump Street` 中匹配到 2 个数字。

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

你的正则表达式应该在 `2001: A Space Odyssey` 中匹配到 4 个数字。

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
