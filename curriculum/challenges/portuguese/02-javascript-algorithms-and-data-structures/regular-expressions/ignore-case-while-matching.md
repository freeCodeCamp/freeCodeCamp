---
id: 587d7db4367417b2b2512b91
title: Ignorar maiúsculas e minúsculas ao buscar
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

Até agora você escreveu regexes para encontrar strings literais. Mas, às vezes, você pode querer encontrar caixas diferentes.

Caixa (-alta ou -baixa) é a diferença entre letras maiúsculas e minúsculas. São exemplos de caixa alta: `A`, `B` e `C`. `a`, `b` e `c` são exemplos de caixa baixa.

Você pode encontrar ambas as caixas usando algo que chamamos de <dfn>flag</dfn>. Existem várias flags, mas agora nós queremos a flag que ignora a caixa - a flag `i`. Para usá-la é só colocar ao fim da regex. Por exemplo, escrever `/ignorecase/i` é uma forma. Essa regex pode encontrar as strings `ignorecase`, `igNoreCase` e `IgnoreCase` (e todas as outras combinações de maiúsculas e minúsculas).

# --instructions--

Escreva uma regex `fccRegex` que encontre `freeCodeCamp`, não importa em que caixa esteja. A regex não deve buscar abreviações ou variações com espaços.

# --hints--

A regex deve encontrar a string `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

A regex deve encontrar a string `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

A regex deve encontrar a string `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

A regex deve encontrar a string `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

A regex não deve encontrar a string `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

A regex deve encontrar a string `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

A regex não deve encontrar a string `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

A regex deve encontrar a string `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

A regex deve encontrar a string `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

A regex deve encontrar a string `FReeCodeCAmp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```
