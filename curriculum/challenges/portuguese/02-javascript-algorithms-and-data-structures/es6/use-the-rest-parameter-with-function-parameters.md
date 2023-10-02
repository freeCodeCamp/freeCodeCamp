---
id: 587d7b88367417b2b2512b47
title: Usar o parâmetro rest com parâmetros de função
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

Para nos ajuda a criar funções mais flexíveis, ES6 introduziu o <dfn>parâmetro rest</dfn> para parâmetros de funções. Com o parâmetro rest, você pode criar funções que recebem um número variável de argumentos. Esses argumentos são armazenados em um array que pode ser acessado depois dentro da função.

Verifique esse código:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

O console exibiria as strings `You have passed 3 arguments` e `You have passed 4 arguments.</codde>.</p>

<p spaces-before="0">O parâmetro rest elimina a necessidade de usar o objeto <code>arguments` e nos permite usar métodos de array no array de parâmetros passados para a função `howMany`.

# --instructions--

Modifique a função `sum` usando o parâmetro rest de tal forma que a função `sum` seja capaz de receber qualquer número de argumentos e retornar a soma deles.

# --hints--

O resultado de `sum(0,1,2)` deve ser 3

```js
assert(sum(0, 1, 2) === 3);
```

O resultado de `sum(1,2,3,4)` deve ser 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

O resultado de `sum(5)` deve ser 5

```js
assert(sum(5) === 5);
```

O resultado de `sum()` deve ser 0

```js
assert(sum() === 0);
```

`sum` deve ser uma arrow function que usa a sintaxe de parâmetro rest (`...`) no parâmetro `args`.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```

# --solutions--

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```
