---
id: aa7697ea2477d1316795783b
title: ピッグ・ラテン
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

ピッグ・ラテンは英語の言葉を言い変える方法です。 ルールは次のとおりです。

\-子音で始まる単語は、最初の子音または子音連結を語末へ移動し、`ay` を追加します。

\- 母音で始まる単語は、末尾に `way` を追加します。

# --instructions--

指定された文字列をピッグ・ラテンに変換してください。 入力文字列は、すべて小文字の英単語であることが保証されています。

# --hints--

`translatePigLatin("california")` は、文字列 `aliforniacay` を返す必要があります。

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` は、文字列 `aragraphspay` を返す必要があります。

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` は、文字列 `oveglay` を返す必要があります。

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` は、文字列 `algorithmway` を返す必要があります。

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` は、文字列 `eightway` を返す必要があります。

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

最初の母音が単語の真ん中に来る単語を扱う場合、  `translatePigLatin("schwartz")` は文字列 `artzschway` を返す必要があります。

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

母音なしで単語を扱う場合、 `translatePigLatin("rhythm")` は、文字列 `rhythmay` を返す必要があります。

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
