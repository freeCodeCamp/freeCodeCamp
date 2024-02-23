---
id: 587d7b8e367417b2b2512b5e
title: Evitar mutações e efeitos colaterais usando programação funcional
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

Caso você ainda não tenha descoberto, o problema do desafio anterior é com a chamada a `splice` na função `tabClose()`. Infelizmente, `splice` modifica o array original no qual opera e, por isso, a segunda chamada usou o array alterado, nos dando resultados inesperados.

Este é apenas um pequeno exemplo - você chama uma função e passa uma variável, array ou objeto a ela; a função modifica a variável ou alguma coisa no objeto.

Um dos principais princípios da programação funcional é que não devemos alterar coisas. Alterações levam a bugs. É mais fácil prever bugs quando se sabe que as funções não mudam nada, nem mesmo os argumentos e as variáveis globais.

No exemplo anterior não havia nenhuma operação complicada, mas o método `splice` modificou o array original e o resultado foi um bug.

Lembre-se de que, em programação funcional, modificar ou alterar coisas é chamado de <dfn>mutação</dfn> e a consequência é chamada de <dfn>efeito colateral</dfn>. Idealmente, uma função deveria ser uma <dfn>função pura</dfn>, que é uma função que não causa efeitos colaterais.

Vamos tentar dominar esta disciplina e não alterar nenhuma variável ou objeto em nosso código.

# --instructions--

Complete o código da função `incrementer` para que ela retorne o valor da variável global `fixedValue` acrescida em um.

# --hints--

A função `incrementer` não deve alterar o valor de `fixedValue` (que é `4`).

```js
incrementer();
assert(fixedValue === 4);
```

A função `incrementer` deve retornar um valor que é maior que o valor `fixedValue`.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

A função `incrementer` deve retornar um valor baseado no valor da variável global `fixedValue`.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
