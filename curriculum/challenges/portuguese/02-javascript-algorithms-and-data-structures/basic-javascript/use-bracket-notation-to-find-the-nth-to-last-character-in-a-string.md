---
id: bd7123c9c452eddfaeb5bdef
title: Use Notação de Colchetes para Descobrir o Nº Antes do Ultimo em uma String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

Você pode usar o mesmo princípio que nós acabamos de usar para recuperar o último caractere em uma string, para recuperar o Nº antes do último caractere.

Por exemplo, você pode pegar o valor da antepenúltima letra da string `var fistName = "Augusta` usando `firstName[firstName.length -3]`

Exemplo:

```js
var firstName = "Augusta";
var thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` teria o valor da string `s`.

# --instructions--

Use <dfn>notação de colchetes</dfn> para descobrir o penúltimo caractere na string `lastName`.

**Dica:** Tente olhar o exemplo acima se você ficar travado.

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
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
