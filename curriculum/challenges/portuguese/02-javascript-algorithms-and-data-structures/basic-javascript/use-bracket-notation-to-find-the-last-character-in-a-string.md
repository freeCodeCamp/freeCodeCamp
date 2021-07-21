---
id: bd7123c9c451eddfaeb5bdef
title: Usar notação de colchetes para encontrar o último caractere em uma string
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

Em ordem para pegar a última letra de uma string, você pode subtrair um do tamanho da string.

Por exemplo, se `var firstName = "Ada"`, você pode pegar o valor da última letra da string ao usar `firstName[firstName.length - 1]`.

Exemplo:

```js
var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1];
```

`lastLetter` teria o valor da string `a`.

# --instructions--

Use <dfn>notação de colchetes</dfn> para descobrir o último caracter na variável `lastName`.

**Dica:** Tente olhar o exemplo acima se você ficar travado.

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
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```
