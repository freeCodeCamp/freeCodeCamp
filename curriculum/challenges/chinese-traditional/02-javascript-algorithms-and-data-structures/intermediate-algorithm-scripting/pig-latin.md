---
id: aa7697ea2477d1316795783b
title: 兒童黑話
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

兒童黑話也叫 Pig Latin，是一種英語語言遊戲。 規則如下：

\- 如果單詞以輔音開頭，就把第一個輔音字母或第一組輔音簇移到單詞的結尾，並在後面加上 `ay`。

\- 如果單詞以元音開頭，只需要在結尾加上 `way`。

# --instructions--

請把傳入的字符串根據上述規則翻譯成兒童黑話並返回結果。 輸入的字符串一定是一個小寫的英文單詞。

# --hints--

`translatePigLatin("california")` 應該返回字符串 `aliforniacay`。

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` 應該返回字符串 `aragraphspay`。

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` 應該返回字符串 `oveglay`。

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` 應該返回字符串 `algorithmway`。

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` 應該返回字符串 `eightway`。

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

應該處理單詞的第一個元音在單詞中間的位置的情況。  `translatePigLatin("schwartz")` 應該返回字符串 `artzschway`。

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

應該處理不帶元音的單詞。 `translatePigLatin("rhythm")` 應該返回字符串 `rhythmay`。

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
