---
id: 587d7db7367417b2b2512b9e
title: 匹配字符串的末尾
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

在上一個挑戰中，學習了使用脫字符號來搜尋字符串的開始位置。 還有一種方法可以搜尋字符串末尾的匹配模式。

可以使用正則表達式的美元符號 `$` 來搜尋字符串的結尾。

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

第一次 `test` 調用將返回 `true`, 而第二次調用將返回 `false`。

# --instructions--

使用錨點字符 `$` 來匹配字符串 `caboose` 在字符串末尾 `caboose`。

# --hints--

你應該在正則表達式使用美元符號 `$` 來搜尋 `caboose`。

```js
assert(lastRegex.source == 'caboose$');
```

你的正則表達式不應該使用任何標誌。

```js
assert(lastRegex.flags == '');
```

你應該在字符串 `The last car on a train is the caboose` 的末尾匹配 `caboose`。

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
