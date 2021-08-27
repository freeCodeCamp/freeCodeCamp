---
id: 587d7db7367417b2b2512b9f
title: Capturar todas as letras e números
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

Ao escrever `[a-z]` você foi capaz de capturar todas as letras do alfabeto. Essa classe de caracteres é tão comum que existe uma forma reduzida de escrevê-la. Mas essa forma inclui alguns caracteres a mais.

Em JavaScript, você pode usar `\w` para capturar todas as letras do alfabeto. Isso é equivalente à classe de caracteres `[A-Za-z0-9_]`. Ela captura números e letras, tanto maiúsculas quanto minúsculas. Note que o underline (`_`) também é incluído nela.

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

As quatro chamadas a `test` retornam `true`.

Essas formas reduzidas de classes de caracteres podem ser chamadas de <dfn>atalhos</dfn>.

# --instructions--

Use o atalho `\w` para contar o número de caracteres alfanuméricos em várias strings.

# --hints--

A regex deve usar a flag global.

```js
assert(alphabetRegexV2.global);
```

A regex deve usar o atalho `\w` para capturar todos os caracteres alfanuméricos.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

A regex deve encontrar 31 caracteres alfanuméricos na string `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

A regex deve encontrar 32 caracteres alfanuméricos na string `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

A regex deve encontrar 30 caracteres alfanuméricos na string `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

A regex deve encontrar 36 caracteres alfanuméricos na string `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```
