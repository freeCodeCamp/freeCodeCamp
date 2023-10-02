---
id: 587d7db3367417b2b2512b8f
title: Criar correspondência de strings literais
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

No desafio anterior, você usou a expressão regular `/Hello/` para procurar a palavra `Hello`. Esta regex buscou a string `Hello` literalmente. No exemplo abaixo há outra busca literal, dessa vez pela string `Kevin`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

Essa chamada a `test` retornará `true`.

Qualquer outra forma de escrever `Kevin` não funcionará. Por exemplo, a regex `/Kevin/` não encontrará nem `kevin` e nem `KEVIN`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

`test` retornará `false`.

Você verá como encontrar estas outras formas em alguns desafios futuros.

# --instructions--

Complete a regex `waldoRegex` para encontrar `"Waldo"` na string `waldoIsHiding` de forma literal.

# --hints--

A regex `waldoRegex` deve encontrar a string `Waldo`

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

A regex `waldoRegex` não deve buscar nada além disso.

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

A busca com a regex deve ser por uma string literal.

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
