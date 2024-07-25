---
id: 661e151f068359c3ccf2f4d7
title: Exercício básico de funções C
challengeType: 1
dashedName: top-basic-functions-exercise-c
---

# --description--

Escreva uma função, chamada `capitalize`, que recebe uma string como um parâmetro e retorna uma nova string com a primeira letra em maiúscula.

# --hints--

Você deve ter uma função chamada `capitalize`.

```js
assert.isFunction(capitalize);
```

A função deve receber uma string como parâmetro.

```js
assert.match(capitalize.toString(), /\s*capitalize\(\s*\w+\s*\)/);
```

A função deve retornar uma nova string com a primeira letra em maiúscula.

```js
assert.strictEqual(capitalize('sem'), 'Sem');
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
```
