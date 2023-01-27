---
id: bd7123c9c549eddfaeb5bdef
title: Usar notação de colchetes para encontrar o primeiro caractere em uma string
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>Notação de colchetes</dfn> é uma forma de pegar um caractere no índice especificado dentro de uma string.

A maioria das linguagens de programação modernas, como JavaScript, não começa contando do 1 como humanos fazem. Elas começam no 0. Isso é referido como indexação <dfn>baseada em zero</dfn>.

Por exemplo, o caractere no índice 0 da palavra `Charles` é `C`. Então, se `const firstName = "Charles"`, você pode pegar o valor da primeira letra da string usando `firstName[0]`.

Exemplo:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` teria o valor da string `C`.

# --instructions--

Use notação de colchetes para encontrar o primeiro caractere na variável `lastName` e atribua a letra para a variável `firstLetterOfLastName`.

**Dica:** tente olhar o exemplo acima se você ficar travado.

# --hints--

A variável `firstLetterOfLastName` deve ter o valor de `L`.

```js
assert(firstLetterOfLastName === 'L');
```

Você deve usar a notação de colchetes.

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
