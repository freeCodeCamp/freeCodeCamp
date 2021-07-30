---
id: 587d7dba367417b2b2512ba8
title: Verificar existência
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

Haverá vezes em que você procurará padrões que podem ou não existir na string. Pode ser relevante validá-los dependendo da situação.

Você pode fazer com que um padrão seja opcional ao usar uma interrogação, `?`, depois dele. Ela valida se há uma ou nenhuma ocorrência do padrão. Pode-se dizer que a interrogação torna o elemento à esquerda dela opcional.

Por exemplo, com a interrogação você pode capturar palavras em inglês escritas com a ortografia americana ou britânica.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

Ambas as chamadas ao método `test` retornam `true`.

# --instructions--

Altere a regex `favRegex` para encontrar as versões americana (`favorite`) e britânica (`favourite`) da palavra.

# --hints--

A regex deve usar a interrogação (`?`) para validação opcional.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

A regex deve encontrar a string `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

A regex deve encontrar a string `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

A regex não deve encontrar a string `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
