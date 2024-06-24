---
id: 661e131f068359c3ccf2f4d6
title: Exercício básico de funções B
challengeType: 1
dashedName: top-basic-functions-exercise-b
---

# --description--

Escreva uma função, chamada `multiply`, que recebe dois parâmetros e retorna seu produto.

# --hints--

Você deve ter uma função chamada `multiply`.

```js
assert.isFunction(multiply);
```

A função deve receber dois números inteiros como argumentos.

```js
assert.match(multiply.toString(), /\s*multiply\(\s*\w+\s*,\s*\w+\s*\)/);
```

Você deve retornar o produto dos dois inteiros.

```js
assert.strictEqual(multiply(10, 10), 100);
```


# --seed--

## --seed-contents--

```js

```

## --solutions--

```js 
function multiply(a, b) {
  return a * b;
}
```
