---
id: aa7697ea2477d1316795783b
title: Поросяча латина
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Поросяча латина – це спосіб шифрування англійських слів. Правила такі:

\- Якщо слово починається з приголосного звуку, то перший приголосний або сполучення приголосних переміщуються в кінець слова і додається `ay`.

\- Якщо слово починається з голосного звуку, то вкінці просто додається `way`.

# --instructions--

Перекладіть поданий рядок на поросячу латину. Відомо, що при вводі всі рядки будуть складатись з англійських слів у нижньому регістрі.

# --hints--

`translatePigLatin("california")` має повертати рядок `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` має повертати рядок `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` має повертати рядок `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` має повертати рядок `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` має повертати рядок `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Ваша програма повинна обробляти слова, у яких перший голосний звук у середині слова.  `translatePigLatin("schwartz")` має повертати рядок `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Ваша програма повинна обробляти слова без голосних звуків. `translatePigLatin("rhythm")` має повертати рядок `rhythmay`.

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
