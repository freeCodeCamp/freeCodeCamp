---
id: 587d8257367417b2b2512c7b
title: Add a New Element to a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Adicionar um novo elemento a uma árvore de pesquisa binária
---

## Description
<section id="description"> Agora que temos uma boa ideia do básico, vamos escrever um método mais complexo. Neste desafio, criaremos um método para adicionar novos valores à nossa árvore de pesquisa binária. O método deve ser chamado de <code>add</code> e deve aceitar um valor inteiro para adicionar à árvore. Tome cuidado para manter a invariante de uma árvore de pesquisa binária: o valor em cada filho da esquerda deve ser menor ou igual ao valor pai, e o valor em cada filho da direita deve ser maior ou igual ao valor pai. Aqui, vamos fazer com que nossa árvore não possa conter valores duplicados. Se tentarmos adicionar um valor que já existe, o método deve retornar <code>null</code> . Caso contrário, se a adição for bem sucedida, <code>undefined</code> deve ser retornado. 
Dica: as árvores são estruturas de dados naturalmente recursivas! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>add</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.add == "function")})(), "The binary search tree has a method called <code>add</code>.");'
  - text: O método add adiciona elementos de acordo com as regras da árvore de pesquisa binária.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); const expectedResult = [ 1, 4, 7, 8, 34, 45, 73, 87 ]; const result = test.inOrder(); return (expectedResult.toString() === result.toString()); })(), "The add method adds elements according to the binary search tree rules.");'
  - text: Adicionar um elemento que já existe retorna <code>null</code>
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== "function") { return false; }; test.add(4); return test.add(4) == null; })(), "Adding an element that already exists returns <code>null</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    // change code above this line
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
