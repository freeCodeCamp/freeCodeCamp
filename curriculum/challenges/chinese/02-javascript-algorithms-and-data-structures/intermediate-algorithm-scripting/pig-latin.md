---
id: aa7697ea2477d1316795783b
title: 儿童黑话
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

儿童黑话也叫 Pig Latin，是一种英语语言游戏。 规则如下：

\- 如果单词以辅音开头，就把第一个辅音字母或第一组辅音簇移到单词的结尾，并在后面加上 `ay`。

\- 如果单词以元音开头，只需要在结尾加上 `way`。

# --instructions--

请把传入的字符串根据上述规则翻译成儿童黑话并返回结果。 输入的字符串一定是一个小写的英文单词。

# --hints--

`translatePigLatin("california")` 应该返回字符串 `aliforniacay`。

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` 应该返回字符串 `aragraphspay`。

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` 应该返回字符串 `oveglay`。

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` 应该返回字符串 `algorithmway`。

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` 应该返回字符串 `eightway`。

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

应该处理单词的第一个元音在单词中间的位置的情况。  `translatePigLatin("schwartz")` 应该返回字符串 `artzschway`。

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

应该处理不带元音的单词。 `translatePigLatin("rhythm")` 应该返回字符串 `rhythmay`。

```js
assert.deepEqual(translatePigLatin('rhythm'), 'rhythmay');
```

# --seed--

## --seed-contents--

```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

# --solutions--

```js
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  var front = [];
  str = str.split('');
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join('') + 'ay';
}

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
```
