---
id: 587d7b8d367417b2b2512b5b
title: Aprender sobre programação funcional
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

Programação funcional é um estilo de programação em que as soluções são funções simples, isoladas e livres de efeitos colaterais fora do escopo da função: `INPUT -> PROCESS -> OUTPUT`

Quando falamos de programação funcional, pensamos em:

1) Funções isoladas: nenhuma função depende do estado do programa, incluindo variáveis globais, que podem sofrer mudanças

2) Funções puras: a mesma entrada sempre devolve a mesma saída

3) Funções com efeitos colaterais limitados: qualquer alteração ou mutação do estado do programa fora da função é cuidadosamente controlada

# --instructions--

Os membros do freeCodeCamp adoram chá.

As funções `prepareTea` e `getTea` já estão definidas para você no editor de texto. Chame a função `getTea` para adquirir 40 xícaras de chá para o time e as armazene na variável `tea4TeamFCC`.

# --hints--

A variável `tea4TeamFCC` deve conter 40 xícaras de chá para o time.

```js
assert(tea4TeamFCC.length === 40);
```

A variável `tea4TeamFCC` deve conter xícaras de chá verde.

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
