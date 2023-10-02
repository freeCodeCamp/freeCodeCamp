---
id: aa7697ea2477d1316795783b
title: Schweine-Latein
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Schweine-Latein ist eine Art, englische Wörter zu verändern. Die Regeln lauten:

\- Wenn ein Wort mit einem Konsonant beginnt, nimm den ersten Konsonanten oder Konsonanten Cluster, verschieben ihn an das Ende des Wortes und füge `ay` hinzu.

\- Wenn ein Wort mit einem Vokal beginnt, füge einfach `way` am Ende hinzu.

# --instructions--

Übersetze den angegebenen String in Schweine-Latein. Die Input Strings sind garantiert englische Wörter in ausschließlich Kleinbuchstaben.

# --hints--

`translatePigLatin("california")` sollte den String `aliforniacay` zurückgeben.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` sollte den String `aragraphspay` zurückgeben.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` sollte den String `oveglay` zurückgeben.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` sollte den String `algorithmway` zurückgeben.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` sollte den String `eightway` zurückgeben.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Sollte Wörter behandeln können, bei denen der erste Vokal in der Mitte des Wortes vorkommt.  `translatePigLatin("schwartz")` sollte den String `artzschway` zurückgeben.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Sollte Wörter ohne Vokale behandeln. `translatePigLatin("rhythm")` sollte den String `rhythmay` zurückgeben.

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
