---
id: bd7123c9c450eddfaeb5bdef
title: Usar notação de colchetes para encontrar o enésimo caractere em uma string
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

Você também pode usar <dfn>notação de colchetes</dfn> para pegar caracteres em outras posições em uma string.

Lembre-se de que computadores começam contando do `0`. Então, o primeiro caractere é na verdade o caractere na posição 0.

Exemplo:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` teria o valor da string `d`.

# --instructions--

Vamos tentar definir `thirdLetterOfLastName` para ser igual a terceira letra da variável `lastName` usando notação de colchetes.

**Dica:** tente olhar o exemplo acima se você ficar travado.

# --hints--

A variável `thirdLetterOfLastName` deve ter o valor de `v`.

```js
assert(thirdLetterOfLastName === 'v');
```

Você deve usar notação de colchetes.

```js
assert(code.match(/thirdLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```
