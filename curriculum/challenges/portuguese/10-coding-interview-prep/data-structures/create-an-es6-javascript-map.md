---
id: 587d825b367417b2b2512c8d
title: Criar um mapa da ES6 JavaScript
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

A nova versão do JavaScript nos fornece um objeto Map integrado, com a maior parte da funcionalidade que escrevemos manualmente no último desafio. Este objeto Map, embora semelhante a objetos JavaScript normais, fornece algumas funcionalidade úteis que faltam aos objetos normais. Por exemplo, um Map de ES6 rastreia a ordem de inserção dos itens que são adicionados a ele. Aqui está uma visão geral mais completa de seus métodos:

- `.has(key)` retorna true ou false baseado na presença de uma chave
- `.get(key)` retorna o valor associado a uma chave
- `.set(key, value)` define um novo par chave-valor
- `.delete(key)` remove um par chave-valor
- `.clear()` remove todos os pares chave-valor
- `.entries()` retorna um array de todas as chaves na ordem de inserção
- `.values()` retorna um array de todos os valores na ordem de inserção

# --instructions--

Defina um objeto Map do JavaScript e atribua a ele uma variável chamada myMap. Adicione o par chave-valor `freeCodeCamp`, `Awesome!` a ele.

# --hints--

Um objeto `myMap` deve existir.

```js
assert(typeof myMap === 'object');
```

`myMap` deve conter o par chave-valor `freeCodeCamp`, `Awesome!`.

```js
assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("freeCodeCamp", "Awesome!");
```
