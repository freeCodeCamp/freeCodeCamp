---
id: 587d7db4367417b2b2512b93
title: 全局匹配
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

到目前爲止，只能提取或搜尋一次模式匹配。

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

在這裏 `match` 將返回 `["Repeat"]`。

要多次搜索或提取模型，你可以使用全局搜索標誌： `g`。

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

這裏 `match` 返回值 `["Repeat", "Repeat", "Repeat"]`

# --instructions--

使用正則表達式 `starRegex`，從字符串 `twinkleStar` 中匹配所有的 `Twinkle` 單詞並提取出來。

**注意：**  
在正則表達式上可以有多個標誌，比如 `/search/gi`

# --hints--

你的正則表達式 `starRegex` 應該使用全局標誌 `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

你的正則表達式 `starRegex` 應該使用忽略大小寫標誌 `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

你的匹配應該匹配單詞 `Twinkle` 的兩個匹配項

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

你的匹配 `result` 應該包含兩個元素

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
