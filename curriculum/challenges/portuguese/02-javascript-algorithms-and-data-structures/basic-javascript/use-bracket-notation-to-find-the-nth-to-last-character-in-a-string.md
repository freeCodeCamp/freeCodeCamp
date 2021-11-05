---
id: bd7123c9c452eddfaeb5bdef
title: Usar notação de colchetes para descobrir o enésimo caractere antes do último em uma string
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

Você pode usar o mesmo princípio que nós acabamos de usar para recuperar o último caractere em uma string, para recuperar o enésimo caractere antes do último caractere.

Por exemplo, você pode pegar o valor da antepenúltima letra da string `const firstName = "Augusta"` usando `firstName[firstName.length - 3]`

Exemplo:

```js
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` teria o valor da string `s`.

# --instructions--

Use <dfn>notação de colchetes</dfn> para descobrir o penúltimo caractere na string `lastName`.

**Dica:** tente olhar o exemplo acima se você ficar travado.

# --hints--

`secondToLastLetterOfLastName` deve ser a letra `c`.

```js
assert(secondToLastLetterOfLastName === 'c');
```

Você deve usar `.length` para pegar a penúltima letra.

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
