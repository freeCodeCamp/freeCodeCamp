---
id: 587d7db6367417b2b2512b9a
title: Capturar caracteres que aparecem zero ou mais vezes seguidas
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

O último desafio fez uso do caractere `+` para buscar caracteres que ocorrem uma ou mais vezes. Existe um outro caractere que permite buscar zero ou mais ocorrências de um padrão.

O caractere usado para isso é o asterisco: `*`.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

As três chamadas a `match` retornam, na ordem, os valores: `["goooooooo"]`, `["g"]` e `null`.

# --instructions--

Neste desafio, a string `chewieQuote` recebeu o valor `Aaaaaaaaaaaaaaaarrrgh!` por trás dos panos. Escreva uma regex, `chewieRegex`, que usa o caractere `*` para capturar um `A` maiúsculo seguido imediatamente de zero ou mais `a` minúsculos em `chewieQuote`. A regex não precisa de flags ou de classes de caracteres. Ela também não deve capturar nenhuma outra parte da string.

# --hints--

A regex `chewieRegex` deve usar o caractere `*` para encontrar zero ou mais `a`s.

```js
assert(/\*/.test(chewieRegex.source));
```

A regex deve encontrar a string `A` em `chewieQuote`.

```js
assert(result[0][0] === 'A');
```

A regex deve encontrar a string `Aaaaaaaaaaaaaaaa` em `chewieQuote`.

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

A regex `chewieRegex` deve capturar 16 caracteres em `chewieQuote`.

```js
assert(result[0].length === 16);
```

A expressão regular não deve corresponder com nenhum caractere na string `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

A expressão regular não deve corresponder a nenhum caractere na string `Let him have it. It's not wise to upset a Wookiee.`

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
