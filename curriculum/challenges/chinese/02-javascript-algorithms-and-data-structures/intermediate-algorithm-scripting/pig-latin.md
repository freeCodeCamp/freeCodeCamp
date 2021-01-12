---
id: aa7697ea2477d1316795783b
title: 儿童黑话
challengeType: 5
forumTopicId: 16039
---

# --description--

[儿童黑话](http://en.wikipedia.org/wiki/Pig_Latin)，也叫 Pig Latin，是一种英语语言游戏。规则如下：

\- 如果单词以辅音开头，就把第一个辅音字母或第一组辅音簇移到单词的结尾，并在后面加上 "ay"。

\- 如果单词以元音开头，只需要在结尾加上 "way"。

在英语中，字母 a、e、i、o、u 为元音，其余的字母均为辅音。辅音簇的意思是连续的多个辅音字母。

# --instructions--

请把传入的字符串根据上述规则翻译成儿童黑话并返回结果。输入的字符串一定是一个小写的英文单词。

# --hints--

`translatePigLatin("california")` 应返回 "aliforniacay"。

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` 应返回 "aragraphspay"。

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` 应返回 "oveglay"。

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` 应返回 "algorithmway"。

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` 应返回 "eightway"。

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Should handle words where the first vowel comes in the middle of the word.  `translatePigLatin("schwartz")` 应返回 "artzschway"。

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

应可以处理不含元音的单词，`translatePigLatin("rhythm")` 应返回 "rhythmay"。

```js
assert.deepEqual(translatePigLatin('rhythm'), 'rhythmay');
```

# --solutions--

