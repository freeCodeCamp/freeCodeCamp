---
id: 587d7b7e367417b2b2512b20
title: Usar um array para armazenar uma coleção de dados
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

Abaixo está um exemplo da implementação mais simples de uma estrutura de dados array. Isso é conhecido como <dfn>array unidimensional</dfn>, significando que tem apenas 1 nível de profundidade, ou que não possui nenhum outro array aninhado dentro de si. Note que possui <dfn>booleans</dfn>, <dfn>strings</dfn> e <dfn>numbers</dfn>, entre outros tipos de dados do JavaScript válidos:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

A chamada a `console.log` exibe `7`.

Todos os arrays possuem uma propriedade length, conforme mostrado acima, que pode ser muito facilmente acessado com a sintaxe `Array.length`. Uma implementação mais complexa de um array pode ser vista abaixo. Isso é conhecido como um <dfn>array multidimensional</dfn>, ou um array que contém outros arrays. Note que esse array também contém <dfn>objetos</dfn> JavaScript, os quais examinaremos bem de perto na próxima seção. Por agora, tudo que você precisa saber é que arrays também são capazes de armazenar objetos complexos.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

Definimos uma variável chamada `yourArray`. Complete a instrução atribuindo um array de pelo menos 5 elementos de comprimento à variável `yourArray`. Seu array deve conter pelo menos uma <dfn>string</dfn>, um <dfn>número</dfn> e um <dfn>booleano</dfn>.

# --hints--

`yourArray` deve ser um array.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` deve ter pelo menos 5 elementos.

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` deve conter pelo menos um `boolean`.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` deve conter pelo menos um `number`.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` deve conter pelo menos um `string`.

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
