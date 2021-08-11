---
id: 587d7db5367417b2b2512b94
title: Encontrar qualquer coisa com o caractere curinga
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

Haverá vezes em que você não saberá (ou não precisará saber) quais caracteres exatamente farão parte das suas regexes. Pensar em todas as palavras que capturariam, digamos, um erro ortográfico levaria muito tempo. Por sorte, você pode economizar tempo usando o caractere curinga: `.`

O caractere curinga `.` captura qualquer caractere. O curinga também pode ser chamado de `ponto`. Você pode usar o curinga como qualquer outro caractere na regex. Por exemplo, se você quiser encontrar `hug`, `huh`, `hut` ou `hum`, você pode usar a regex `/hu./` para capturar todas as quatro palavras.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

As duas chamadas a `test` retornam `true`.

# --instructions--

Complete a regex `unRegex` para que ela encontre as strings `run`, `sun`, `fun`, `pun`, `nun` e `bun`. A regex deve usar o caractere curinga.

# --hints--

Você deve usar o método `.test()`.

```js
assert(code.match(/\.test\(.*\)/));
```

Você deve usar o caractere curinga na regex `unRegex`

```js
assert(/\./.test(unRegex.source));
```

A regex `unRegex` deve encontrar `run` na string `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

A regex `unRegex` deve encontrar `sun` na string `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

A regex `unRegex` deve encontrar `fun` na string `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

A regex `unRegex` deve encontrar `pun` na string `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

A regex `unRegex` deve encontrar `nun` na string `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

A regex `unRegex` deve encontrar `bun` na string `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

A regex `unRegex` não deve incluir a string `There is a bug in my code.` no resultado

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

A regex `unRegex` não deve incluir a string `Catch me if you can.` no resultado

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
