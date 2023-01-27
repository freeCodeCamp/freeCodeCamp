---
id: aa7697ea2477d1316795783b
title: Usar o Pig Latin
challengeType: 1
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Pig Latin é uma forma de alterar palavras inglesas. As regras são as seguintes:

\- Se uma palavra começar com uma consoante, tire a primeira consoante ou grupo de consoantes, mova-a para o final da palavra e adicione `ay` a ela.

\- Se uma palavra começar com uma vogal, basta adicionar `way` no final.

# --instructions--

Traduza a string fornecida para o Pig Latin. As strings de entrada terão a garantia de serem palavras em inglês com as letras em minúsculo.

# --hints--

`translatePigLatin("california")` deve retornar a string `aliforniacay`.

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` deve retornar a string `aragraphspay`.

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` deve retornar a string `oveglay`.

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` deve retornar a string `algorithmway`.

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` deve retornar a string `eightway`.

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

Deve lidar com palavras onde a primeira vogal vem no meio da palavra.  `translatePigLatin("schwartz")` deve retornar a string `artzschway`.

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

Deve lidar com palavras sem vogais. `translatePigLatin("rhythm")` deve retornar a string `rhythmay`.

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
