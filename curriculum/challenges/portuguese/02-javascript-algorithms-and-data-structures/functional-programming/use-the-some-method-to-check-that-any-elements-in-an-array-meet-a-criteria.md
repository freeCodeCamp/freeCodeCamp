---
id: 587d7dab367417b2b2512b6f
title: Usar o método some para checar se pelo menos um elemento em um array atende a um critério
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

O método `some` funciona verificando se *pelo menos um* dos elementos de um array passam em um teste. Ele retorna um booleano: `true` se pelo menos um valor atende ao critério e `false` caso contrário.

Por exemplo, o código a seguir verifica se qualquer elemento no array `numbers` é menor que 10:

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

O método `some` retorna `true`.

# --instructions--

Use o método `some` na função `checkPositive` para verificar se algum elemento em `arr` é positivo. A função deve retornar um valor booleano.

# --hints--

Você deve usar o método `some`.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` deve retornar `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` deve retornar `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` deve retornar `false`.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
```
