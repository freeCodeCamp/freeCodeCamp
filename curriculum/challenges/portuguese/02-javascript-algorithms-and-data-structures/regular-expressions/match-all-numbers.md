---
id: 5d712346c441eddfaeb5bdef
title: Capturar todos os números
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

Você aprendeu atalhos para padrões comuns de strings como alfanuméricos. Outro padrão comum é o de apenas dígitos ou números.

O atalho para procurar caracteres numéricos é `\d`, com um `d` minúsculo. Esse atalho é o mesmo que `[0-9]`, que serve para procurar qualquer dígito de zero a nove.

# --instructions--

Use o atalho `\d` para contar quantos dígitos existem em títulos de filmes. Números por extenso, como "seis" em vez de 6, não contam.

# --hints--

A regex deve usar o atalho que captura dígitos

```js
assert(/\\d/.test(numRegex.source));
```

A regex deve usar a flag global.

```js
assert(numRegex.global);
```

A regex deve encontrar um dígito na string `9`.

```js
assert('9'.match(numRegex).length == 1);
```

A regex deve encontrar dois dígitos na string `Catch 22`.

```js
assert('Catch 22'.match(numRegex).length == 2);
```

A regex deve encontrar três dígitos na string `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

A regex não deve encontrar dígito algum na string `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

A regex deve encontrar dois dígitos na string `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

A regex deve encontrar quatro dígitos na string `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
