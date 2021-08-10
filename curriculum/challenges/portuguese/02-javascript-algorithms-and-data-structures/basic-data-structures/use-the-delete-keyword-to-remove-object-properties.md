---
id: 587d7b7c367417b2b2512b1b
title: Usar a palavra-chave delete para remover propriedades de objetos
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

Agora você sabe o que são objetos, seus recursos básicos e suas vantagens. Resumindo, ele são uma forma de armazenar chave-valor que provê uma forma flexível e intuitiva de estruturar dados, ***e***, eles fornecem um desempenho rápido para acessá-los. Ao longo do resto destes desafios, descreveremos diversas operações que você pode executar em objetos, com a finalidade de torná-lo confortável ao usar essas estruturas de dados úteis em seus programas.

Nos desafios anteriores, nós adicionamos e modificamos os pares de chave-valor de objetos. Aqui veremos como podemos *remover* uma chave-valor de um obeto.

Vamos revisitar nosso objeto de exemplo `foods` uma última vez. Se quisermos remover a chave `apples`, podemos removê-lo usando a palavra-chave `delete` assim:

```js
delete foods.apples;
```

# --instructions--

Use a palavra-chave delete para remover as chaves `oranges`, `plums` e `strawberries` do objeto `foods`.

# --hints--

O objeto `foods` deve ter apenas três chaves: `apples`, `grapes` e `bananas`.

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

As chaves `oranges`, `plums` e `strawberries` devem ser removidos usando `delete`.

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
