---
id: 587d7db7367417b2b2512b9d
title: Encontrar padrões ao início da string
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

Desafios anteriores mostraram que expressões regulares podem ser usadas para capturar um número de resultados. Elas também podem ser usadas para procurar em posições específicas de strings.

Mais cedo você usou o circunflexo (`^`) em classes de caracteres para procurar caracteres que não devem ser capturados, como em `[^caracteresQueNãoQueremos]`. Quando usados fora de classes de caracteres, o circunflexo serve para buscar a partir do começo de strings.

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

A primeira chamada a `test` retorna `true` enquanto a segunda retorna `false`.

# --instructions--

Use o circunflexo em uma regex para encontrar `Cal`, mas apenas no começo da string `rickyAndCal`.

# --hints--

A regex deve buscar a string `Cal` com uma maiúscula.

```js
assert(calRegex.source == '^Cal');
```

A regex não deve usar nenhuma flag.

```js
assert(calRegex.flags == '');
```

A regex deve capturar a string `Cal` no começo de uma string.

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

A regex não deve capturar a string `Cal` no meio de uma string.

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
