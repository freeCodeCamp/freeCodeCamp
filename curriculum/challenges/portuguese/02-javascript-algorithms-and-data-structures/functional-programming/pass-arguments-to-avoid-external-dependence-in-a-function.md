---
id: 587d7b8e367417b2b2512b5f
title: Passar argumentos para evitar dependências externas em funções
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

No último desafio você deu um passo a mais nos princípios de programação funcional, mas ainda falta algo.

Nós não mudamos o valor dela, mas a função `incrementer` não funciona sem a variável global `fixedValue`.

Outro princípio da programação funcional é que sempre devemos declarar nossas dependências explicitamente. Isso significa que, se uma função depende de uma variável ou objeto, então devemos passar esta variável ou objeto diretamente como argumento a ela.

Há muitas boas consequências nesse princípio: a função se torna mais fácil de testar, você sabe exatamente quais são as suas entradas e ela não depende de mais nada no seu programa.

Isso faz com que você tenha mais confiança ao alterar, remover ou adicionar código, pois sabe o que pode ou não pode alterar e identifica armadilhas em potencial com mais facilidade.

Finalmente, a função sempre produzirá a mesma saída para o mesmo conjunto de entradas, não importa de onde no código ela é chamada.

# --instructions--

Vamos atualizar a função `incrementer` e declarar explicitamente as suas dependências.

Escreva a função `incrementer` de forma que ela receba um argumento e retorne o valor incrementado em um.

# --hints--

A função `incrementer` não deve alterar o valor de `fixedValue`, que é `4`.

```js
assert(fixedValue === 4);
```

A função `incrementer` deve receber um argumento.

```js
assert(incrementer.length === 1);
```

A função `incrementer` deve retornar um valor que é maior que o valor `fixedValue`.

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```
