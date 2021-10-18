---
id: 587d7db4367417b2b2512b90
title: Buscar uma string literal com diferentes possibilidades
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

Ao usar regexes como `/coding/`, você pode procurar pelo padrão `coding` em strings.

Isso funciona com strings únicas, mas é limitado a apenas um padrão. Você pode procurar por múltiplos padrões usando o operador de `alternation`, ou `OR`: `|`.

Este operador funciona para buscar padrões à esquerda e à direita dele. Por exemplo, se você quiser encontrar as strings `yes` ou `no`, a regex que você quer é `/yes|no/`.

Você pode também procurar por mais de dois padrões com este operador. É possível fazer isso ao adicionar mais instâncias do operador seguido do padrão desejado: `/yes|no|maybe/`.

# --instructions--

Complete a regex `petRegex` para encontrar os pets `dog`, `cat`, `bird`, ou `fish`.

# --hints--

A regex `petRegex` deve retornar `true` para a string `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

A regex `petRegex` deve retornar `false` para a string `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

A regex `petRegex` deve retornar `true` para a string `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

A regex `petRegex` deve retornar `true` para a string `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

A regex `petRegex` deve retornar `false` para a string `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

A regex `petRegex` deve retornar `true` para a string `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

A regex `petRegex` deve retornar `false` para a string `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
