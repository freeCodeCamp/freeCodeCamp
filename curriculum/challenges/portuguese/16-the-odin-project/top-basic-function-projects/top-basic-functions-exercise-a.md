---
id: 6619240f46cec8e04d77e03a
title: Exercício básico de funções A
challengeType: 1
dashedName: top-basic-functions-exercise-a
---

# --description--

Crie uma função que recebe um inteiro. Essa função deve retornar o número inteiro `integer + 7` dado, se o inteiro for menor que `10`. Se o inteiro for maior ou igual a `10`, ela deve retornar o número inteiro `integer - 3` dado.

O nome da função deve ser `addOrSubtract`.

# --hints--

Você deve ter uma função chamada `addOrSubtract`.

```js
assert.isFunction(addOrSubtract);
```

A função deve receber um inteiro como um argumento.

```js
assert.match(addOrSubtract.toString(), /\s*addOrSubtract\(\s*\w+\s*\)/);
```

Você deve devolver o número inteiro dado + 7 se o inteiro for menor que 10.

```js
assert.strictEqual(addOrSubtract(5), 12);
```

Você deve devolver o número inteiro dado - 3 se o inteiro for maior ou igual a 10.

```js
assert.strictEqual(addOrSubtract(10), 7);
```




# --seed--

## --seed-contents--

```js

```

## --solutions--

```js
function addOrSubtract(num) {
  if (num < 10) {
    return num + 7;
  } else {
    return num - 3;
  }
}
```
