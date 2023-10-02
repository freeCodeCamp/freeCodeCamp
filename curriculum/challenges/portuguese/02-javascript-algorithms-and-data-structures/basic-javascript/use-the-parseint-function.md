---
id: 587d7b7e367417b2b2512b23
title: Usar a função parseInt
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

A função `parseInt()` analisa uma string e retorna um inteiro. Exemplo:

```js
const a = parseInt("007");
```

A função acima converte a string `007` para o inteiro `7`. Se o primeiro caractere na string não pode ser convertido em um número, então ele retorna `NaN`.

# --instructions--

Use `parseInt()` na função `convertToInteger` para que ela converta a string de entrada `str` em um inteiro e a retorne.

# --hints--

`convertToInteger` deve usar a função `parseInt()`

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` deve retornar um número

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` deve retornar 56

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` deve retornar 77

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` deve retornar `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
