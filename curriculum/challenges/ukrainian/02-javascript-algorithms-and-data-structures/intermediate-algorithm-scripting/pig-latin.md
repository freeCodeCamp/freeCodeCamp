---
id: aa7697ea2477d1316795783b
title: Pig Latin
challengeType: 5
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Pig Latin - це спосіб шифрування англійських слів. Правила такі:

\- Якщо слово починається на приголосний звук, початкові приголосні переміщуються в кінець слова і додається `ay`.

\- Якщо слово починається на голосний звук, в кінці просто додається `way`.

# --instructions--

Перекласти даний рядок на Pig Latin. Необхідно вводити лише англійські слова в нижньому регістрі.

# --hints--

`translatePigLatin("california")` повинен повертати рядок `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` повинен повертати рядок `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` повинен повертати рядок `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` повинен повертати рядок `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` повинен повертати рядок `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Спробуйте перетворити слова, у яких перший голосний звук у середині слова.  `translatePigLatin("schwartz")` повинен повертати рядок `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Спробуйте перетворити слова без голосних звуків. `translatePigLatin("rhythm")` повинен повертати рядок `rhythmay`.

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
