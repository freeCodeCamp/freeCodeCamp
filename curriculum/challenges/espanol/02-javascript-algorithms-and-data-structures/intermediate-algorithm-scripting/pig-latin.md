---
id: aa7697ea2477d1316795783b
title: Pig Latin (Latin de los cerdos)
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Pig Latin (latin de los cerdos) es una manera de alterar las palabras en inglés. Las normas son las siguientes:

\- Si una palabra comienza con una consonante, toma la primer consonante o grupo de consonantes, muévela al final de la palabra, y añade `ay` a ella.

\- Si una palabra comienza con una vocal, solo añade `way` al final.

# --instructions--

Traduce la cadena proporcionada a Pig Latin. Las cadenas de entrada están garantizadas como palabras en inglés en minúsculas.

# --hints--

`translatePigLatin("california")` debe devolver la cadena `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` debe devolver la cadena `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` debe devolver la cadena `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` debe devolver la cadena `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` debe devolver la cadena `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Debes manejar las palabras en donde la primera vocal viene en el centro de la palabra.  `translatePigLatin("schwartz")` debe devolver la cadena `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Debes manejar las palabras sin vocales. `translatePigLatin("rhythm")` debe devolver la cadena `rhythmay`.

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
