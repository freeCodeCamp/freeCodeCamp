---
id: a26cbbe9ad8655a977e1ceb5
title: Encontrar a palavra mais longa em uma string
challengeType: 1
forumTopicId: 16015
dashedName: find-the-longest-word-in-a-string
---

# --description--

Retornar o comprimento da palavra mais longa na frase fornecida.

Sua resposta deve ser um número.

# --hints--

`findLongestWordLength("The quick brown fox jumped over the lazy dog")` deve retornar um número.

```js
assert(
  typeof findLongestWordLength(
    'The quick brown fox jumped over the lazy dog'
  ) === 'number'
);
```

`findLongestWordLength("The quick brown fox jumped over the lazy dog")` deve retornar `6`.

```js
assert(
  findLongestWordLength('The quick brown fox jumped over the lazy dog') === 6
);
```

`findLongestWordLength("May the force be with you")` deve retornar `5`.

```js
assert(findLongestWordLength('May the force be with you') === 5);
```

`findLongestWordLength("Google do a barrel roll")` deve retornar `6`.

```js
assert(findLongestWordLength('Google do a barrel roll') === 6);
```

`findLongestWordLength("What is the average airspeed velocity of an unladen swallow")` deve retornar `8`.

```js
assert(
  findLongestWordLength(
    'What is the average airspeed velocity of an unladen swallow'
  ) === 8
);
```

`findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")` deve retornar `19`.

```js
assert(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  ) === 19
);
```

# --seed--

## --seed-contents--

```js
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

# --solutions--

```js
function findLongestWordLength(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```
