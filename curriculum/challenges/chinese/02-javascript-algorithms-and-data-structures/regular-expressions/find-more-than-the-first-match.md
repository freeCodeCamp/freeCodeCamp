---
id: 587d7db4367417b2b2512b93
title: 全局匹配
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

到目前为止，只能提取或搜寻一次模式匹配。

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

在这里 `match` 将返回 `["Repeat"]`。

要多次搜索或提取模型，你可以使用全局搜索标志： `g`。

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

这里 `match` 返回值 `["Repeat", "Repeat", "Repeat"]`

# --instructions--

使用正则表达式 `starRegex`，从字符串 `twinkleStar` 中匹配所有的 `Twinkle` 单词并提取出来。

**注意：**  
在正则表达式上可以有多个标志，比如 `/search/gi`

# --hints--

你的正则表达式 `starRegex` 应该使用全局标志 `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

你的正则表达式 `starRegex` 应该使用忽略大小写标志 `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

你的匹配应该匹配单词 `Twinkle` 的两个匹配项

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

你的匹配 `result` 应该包含两个元素

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
