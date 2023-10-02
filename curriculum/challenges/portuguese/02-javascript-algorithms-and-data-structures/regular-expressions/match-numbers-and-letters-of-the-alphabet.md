---
id: 587d7db5367417b2b2512b97
title: Capturar números e letras do alfabeto
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

O uso do hífen (`-`) para capturar um intervalo de caracteres não é limitado a letras. Ele também funciona para capturar intervalos de números.

Por exemplo, `/[0-5]/` encontra qualquer número entre `0` e `5`, incluindo ambos `0` e `5`.

E também é possível combinar intervalos de letras e números em uma única classe de caracteres.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

Escreva uma única regex que encontra letras entre `h` e `s` e, também, números entre `2` e `6`. Lembre-se de incluir as flags necessárias na regex.

# --hints--

A regex `myRegex` deve encontrar 17 itens.

```js
assert(result.length == 17);
```

Você deve usar a flag global na sua regex `myRegex`.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

Você deve usar a flag de ignorar caixa na sua regex `myRegex`.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
