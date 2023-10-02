---
id: 587d7dab367417b2b2512b6e
title: Usar o método every para checar se todos os elementos em um array atendem a um critério
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

O método `every` funciona verificando se *todos* os elementos de um array passam em um teste. Ele retorna um booleano: `true` se todos os valores atendem ao critério e `false` caso contrário.

Por exemplo, o código a seguir verifica se todos os elementos no array `numbers` são menores que 10:

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

O método `every` retorna `false` neste exemplo.

# --instructions--

Use o método `every` dentro da função `checkPositive` para checar se todos os elementos em `arr` são positivos. A função deve retornar um valor booleano.

# --hints--

Você deve usar o método `every`.

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` deve retornar `false`.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` deve retornar `true`.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` deve retornar `false`.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
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
  return arr.every(num => num > 0);
}
```
