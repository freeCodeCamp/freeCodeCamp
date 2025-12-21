---
id: aa7697ea2477d1316795783b
title: Implement a Pig Latin Translator
challengeType: 26
dashedName: lab-pig-latin
---

# --description--

Pig Latin is a way of altering English words by following specific transformation rules.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a `translatePigLatin` function that accepts one string as argument.
1. If the string argument begins with a consonant, your function should take the first consonant or consonant cluster, move it to the end of the word, add `ay` to it, and return the result.
1. If the string argument begins with a vowel, your function should add `way` at the end and return the result.
1. Your function should handle string arguments where the first vowel comes in the middle of the word and return the appropriately transformed string.
1. If the string argument has no vowels, your function should add `ay` at the end and return the result.

Note: For the context of this lab, vowels are `a`, `e`, `i`, `o`, and `u`. The letter `y` is not considered a vowel.

# --hints--

You should have a `translatePigLatin` function.

```js
assert.isFunction(translatePigLatin);
```

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

Should handle words where the first vowel comes in the middle of the word. `translatePigLatin("schwartz")` should return the string `artzschway`.

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

```

# --solutions--

```js
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  let front = [];
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
