---
id: 587d7db9367417b2b2512ba5
title: Especificar o número de capturas
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

Lembre-se de que você pode usar o sinal de `+` para procurar por uma ou mais ocorrências e o asterisco `*` para procurar por zero ou mais ocorrências. Eles são convenientes, mas às vezes você precisa capturar um número exato de caracteres.

Você pode especificar um número mínimo e um máximo de capturas com <dfn>especificadores de quantidade</dfn>. Para usar especificadores de quantidade, usa-se chaves: `{` e `}`. Você pode especificar os dois números dentro delas para restringir as capturas.

Por exemplo, se você quiser encontrar a letra `a` de `3` a `5` vezes na string `ah`, você pode escrever a regex `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

A primeira chamada a `test` retorna `true` enquanto a segunda retorna `false`.

# --instructions--

Altere a regex `ohRegex` para que capture a frase `Oh no`, mas apenas quando nela houver de `3` a `6` letras `h`'s.

# --hints--

A regex deve usar chaves.

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

A regex não deve encontrar a string `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

A regex deve encontrar a string `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

A regex deve encontrar a string `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

A regex deve encontrar a string `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

A regex deve encontrar a string `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

A regex não deve encontrar a string `Ohhhhhhh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
