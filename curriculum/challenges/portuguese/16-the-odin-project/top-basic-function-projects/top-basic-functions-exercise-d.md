---
id: 661e17c6068359c3ccf2f4d8
title: Exercício Básico de Funções D
challengeType: 1
dashedName: top-basic-functions-exercise-d
---

# --description--

Escreva uma função, chamada `lastLetter`, que recebe uma string como parâmetro e retorna a última letra da string.

# --hints--

Você deve ter uma função chamada `lastLetter`.

```js
assert.isFunction(lastLetter);
```

A função deve receber uma string como parâmetro.

```js
assert.match(lastLetter.toString(), /\s*lastLetter\(\s*\w+\s*\)/);
```

Você deve retornar a última letra da string.

```js
assert.strictEqual(lastLetter('Sem'), 'm');
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function lastLetter(str) {
  return str[str.length - 1];
}
```
