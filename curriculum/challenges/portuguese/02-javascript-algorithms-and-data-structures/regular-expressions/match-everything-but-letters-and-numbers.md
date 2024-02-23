---
id: 587d7db8367417b2b2512ba0
title: Capturar tudo exceto letras e números
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

Você aprendeu que você pode usar um atalho para capturar alfanuméricos `[A-Za-z0-9_]` usando `\w`. Você pode querer capturar exatamente o oposto disso.

Você pode capturar não alfanuméricos usando `\W` ao invés de `\w`. Observe que o atalho usa uma maiúscula. Este atalho é o mesmo que escrever `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

A primeira chamada a `match` retorna `["%"]` enquanto o segundo retorna `["!"]`.

# --instructions--

Use o atalho `\W` para contar o número de caracteres não alfanuméricos em várias strings.

# --hints--

A regex deve usar a flag global.

```js
assert(nonAlphabetRegex.global);
```

A regex deve encontrar 6 caracteres não alfanuméricos na string `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

A regex deve usar o atalho que captura os caracteres não alfanuméricos.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

A regex deve encontrar 8 caracteres não alfanuméricos na string `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

A regex deve encontrar 6 caracteres não alfanuméricos na string `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

A regex deve encontrar 12 caracteres não alfanuméricos na string `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
