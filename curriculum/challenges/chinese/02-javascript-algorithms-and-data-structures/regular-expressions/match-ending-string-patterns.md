---
id: 587d7db7367417b2b2512b9e
title: 匹配字符串的末尾
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

在上一个挑战中，学习了使用脱字符号来搜寻字符串的开始位置。 还有一种方法可以搜寻字符串末尾的匹配模式。

可以使用正则表达式的美元符号 `$` 来搜寻字符串的结尾。

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

第一次 `test` 调用将返回 `true`, 而第二次调用将返回 `false`。

# --instructions--

使用锚点字符 `$` 来匹配字符串 `caboose` 在字符串末尾 `caboose`。

# --hints--

你应该在正则表达式使用美元符号 `$` 来搜寻 `caboose`。

```js
assert(lastRegex.source == 'caboose$');
```

你的正则表达式不应该使用任何标志。

```js
assert(lastRegex.flags == '');
```

你应该在字符串 `The last car on a train is the caboose` 的末尾匹配 `caboose`。

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
