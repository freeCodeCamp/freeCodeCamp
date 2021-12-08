---
id: bd7123c9c451eddfaeb5bdef
title: Usar notação de colchetes para encontrar o último caractere em uma string
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

Para pegar a última letra de uma string, você pode subtrair um do tamanho da string.

Por exemplo, se `const firstName = "Ada"`, você pode pegar o valor da última letra da string ao usar `firstName[firstName.length - 1]`.

Exemplo:

```js
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` teria o valor da string `a`.

# --instructions--

Use <dfn>notação de colchetes</dfn> para descobrir o último caractere na variável `lastName`.

**Dica:** tente olhar o exemplo acima se você ficar travado.

# --hints--

`lastLetterOfLastName` deve ser a letra `e`.

```js
assert(lastLetterOfLastName === 'e');
```

Você deve usar `.length` para pegar a última letra.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
```
