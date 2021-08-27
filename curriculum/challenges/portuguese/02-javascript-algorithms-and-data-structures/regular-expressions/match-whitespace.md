---
id: 587d7db8367417b2b2512ba3
title: Capturar espaços em branco
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

Os desafios até agora cobriram a captura de letras do alfabeto e números. Você também pode capturar espaços em branco e os espaços entre as letras.

Você pode usar o atalho `\s` com um `s` minúsculo para capturar espaços em branco. Este atalho não captura apenas espaços em branco como também retorno de carro, tabulações, feeds de formulário e quebras de linha. O atalho é equivalente à classe de caracteres `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

`match` retorna `[" ", " "]` aqui.
# --instructions--

Mude a regex `countWhiteSpace` para que capture múltiplos espaços em branco em strings.

# --hints--

A regex deve usar a flag global.

```js
assert(countWhiteSpace.global);
```

A regex deve usar o atalho `\s` para capturar todos os espaços em branco.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

A regex deve encontrar oito espaços na string `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

A regex deve encontrar três espaços na string `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

A regex não deve encontrar espaços na string `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
