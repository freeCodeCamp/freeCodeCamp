---
id: aa7697ea2477d1316795783b
title: Pig Latin
challengeType: 5
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Pig Latin is a way of altering English Words. The rules are as follows:

\- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.

\- If a word begins with a vowel, just add `way` at the end.

# --instructions--

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

# --hints--

`translatePigLatin("california")` should return the string `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` should return the string `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` should return the string `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` should return the string `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` should return the string `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Should handle words where the first vowel comes in the middle of the word.  `translatePigLatin("schwartz")` should return the string `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Should handle words without vowels. `translatePigLatin("rhythm")` should return the string `rhythmay`.

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
