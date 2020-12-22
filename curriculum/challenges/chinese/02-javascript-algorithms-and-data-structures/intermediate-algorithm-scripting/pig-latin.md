---
id: aa7697ea2477d1316795783b
title: 儿童黑话
challengeType: 5
forumTopicId: 16039
---

# --description--

在这道题目中，我们需要写一个函数，把传入的字符串翻译成“儿童黑话”。

[儿童黑话](http://en.wikipedia.org/wiki/Pig_Latin)的基本转换规则很简单，只需要把一个英文单词的第一个辅音字母或第一组辅音簇移到单词的结尾，并在后面加上`ay`即可。在英语中，字母 a、e、i、o、u 为元音，其余的字母均为辅音。辅音簇的意思是连续的多个辅音字母。

额外地，如果单词本身是以元音开头的，那只需要在结尾加上`way`。

额外地，如果单词不包含元音，那只需要在结尾加上`ay`。

在本题中，传入的单词一定会是英文单词，且所有字母均为小写。

如果你遇到了问题，请点击[帮助](https://forum.freecodecamp.one/t/topic/157)。

# --hints--

`translatePigLatin('california')`应该返回 'aliforniacay'。

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin('paragraphs')`应该返回 'aragraphspay'。

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin('glove')`应该返回 'oveglay'。

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin('algorithm')`应该返回 'algorithmway'。

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin('eight')`应该返回 'eightway'。

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

你的代码应该能处理第一个 vowel 在单词中间的情况。比如`translatePigLatin('schwartz')` 应该返回 'artzschway'

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

你的代码应当能够处理单词中不含元音字母的情况。比如`translatePigLatin('rhythm')`应该返回 'rhythmay'。

```js
assert.deepEqual(translatePigLatin('rhythm'), 'rhythmay');
```

# --solutions--

