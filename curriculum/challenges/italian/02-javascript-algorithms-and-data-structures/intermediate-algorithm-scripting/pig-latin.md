---
id: aa7697ea2477d1316795783b
title: Pig Latin
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Pig Latin è un modo di alterare le parole inglesi. Le regole sono le seguenti:

\- Se una parola inizia con una consonante, prendi la prima consonante o gruppo di consonanti, spostala alla fine della parola e aggiungi `ay` ad essa.

\- Se una parola inizia con una vocale, aggiungi semplicemente `way` alla fine.

# --instructions--

Traduci la stringa fornita in Pig Latin. È garantito che le stringhe in ingresso sono parole Inglesi scritte in minuscolo.

# --hints--

`translatePigLatin("california")` dovrebbe restituire la stringa `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` dovrebbe restituire la stringa `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` dovrebbe restituire la stringa `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` dovrebbe restituire la stringa `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` dovrebbe restituire la stringa `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Dovresti gestire le parole in cui la prima vocale viene in mezzo alla parola.  `translatePigLatin("schwartz")` dovrebbe restituire la stringa `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Dovresti gestire le parole senza vocali. `translatePigLatin("rhythm")` dovrebbe restituire la stringa `rhythmay`.

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
