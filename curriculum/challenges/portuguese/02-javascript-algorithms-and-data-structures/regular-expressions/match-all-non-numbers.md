---
id: 587d7db8367417b2b2512ba1
title: Capture Tudo Exceto Números
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

O último desafio mostrou como procurar dígitos usando o atalho `\d` com um `d` minúsculo. Você também pode procurar não-dígitos usando um atalho semelhante que usa um `D` maiúsculo.

O atalho para procurar não-dígitos é `\D`. Esse atalho é o mesmo que `[^0-9]`, que serve para procurar qualquer caractere que não seja um dígito de zero a nove.

# --instructions--

Use o atalho `\D` para contar quantos não-dígitos existem em títulos de filmes.

# --hints--

Sua regex deve usar o atalho que captura não-dígitos

```js
assert(/\\D/.test(noNumRegex.source));
```

Sua regex deve usar a flag global.

```js
assert(noNumRegex.global);
```

Sua regex não deve encontrar nenhum não-dígito na string `9`.

```js
assert('9'.match(noNumRegex) == null);
```

Sua regex deve encontrar seis não-dígitos na string `Catch 22`.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

Sua regex deve encontrar onze não-dígitos na string `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

Sua regex deve encontrar quinze não-dígitos na string `One, Two, Three`.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

Sua regex deve encontrar 12 não-dígitos na string `21 Jump Street`.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

Sua regex deve encontrar dezessete não-dígitos na string `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
