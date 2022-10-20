---
id: aa7697ea2477d1316795783b
title: Pig Latin
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Pig Latin هي طريقة لتغيير الكلمات الإنجليزية. و القواعد هي كما يلي:

\- إذا كانت الكلمة تبدأ بـ consonant فخذ الـ consonant الاول او مجموعة الـ consonants، وحركها إلى نهاية الكلمة، وأضف `ay` إليها.

\- إذا كانت الكلمة تبدأ بـ vowel، فقط أضف `way` في النهاية.

# --instructions--

ترجم الـ string المقدم إلى Pig Latin. Input strings ستكون كلمات إنجليزية بأحرف صغيرة.

# --hints--

`translatePigLatin("california")` يجب أن يعيد السلسلة `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` يجب أن يعيد السلسلة `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` يجب أن يعيد السلسلة `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` يجب أن يعيد السلسلة `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` يجب أن يعيد السلسلة `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

يجب أن تتعامل مع الكلمات التي يأتي فيها أول vowel في منتصف الكلمة.  `translatePigLatin("schwartz")` يجب أن يعيد السلسلة `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

يجب أن تتعامل مع الكلمات بدون vowels. `translatePigLatin("rhythm")` يجب أن يعيد السلسلة `rhythmay`.

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
