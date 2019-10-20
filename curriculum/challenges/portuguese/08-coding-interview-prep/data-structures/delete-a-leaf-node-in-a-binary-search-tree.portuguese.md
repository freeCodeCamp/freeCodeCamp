---
id: 587d8258367417b2b2512c80
title: Delete a Leaf Node in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Excluir um nó de folha em uma árvore de pesquisa binária
---

## Description
<section id="description"> Este é o primeiro de três desafios em que implementaremos uma operação mais difícil em árvores de pesquisa binária: exclusão. A exclusão é difícil porque a remoção de nós quebra os links na árvore. Esses links devem ser cuidadosamente restabelecidos para garantir que a estrutura da árvore binária seja mantida. Para algumas exclusões, isso significa que a árvore deve ser reorganizada. Em geral, você encontrará um dos três casos ao tentar excluir um nó: Nó Folha: O destino a excluir tem zero filhos. Um filho: o destino a excluir tem apenas um filho. Dois Filhos: O alvo a deletar tem dois nós filhos. Remover um nó de folha é fácil, nós simplesmente o removemos. Excluir um nó com um filho também é relativamente fácil, basta removê-lo e vinculá-lo ao filho do nó que excluímos. A remoção de um nó com dois filhos é mais difícil, no entanto, porque isso cria dois nós-filhos que precisam ser reconectados à árvore pai. Vamos ver como lidar com este caso no terceiro desafio. Além disso, você precisa estar ciente de alguns casos extremos ao manipular a exclusão. E se a árvore estiver vazia? E se o nó a excluir for o nó raiz? E se houver apenas dois elementos na árvore? Por enquanto, vamos lidar com o primeiro caso em que excluímos um nó de folha. Instruções: Crie um método em nossa árvore binária chamada <code>remove</code> . Vamos construir a lógica para nossa operação de exclusão aqui. Primeiro, você desejará criar uma função dentro de remove que encontre o nó que estamos tentando excluir na árvore atual. Se o nó não estiver presente na árvore, <code>remove</code> deve retornar <code>null</code> . Agora, se o nó de destino for um nó folha sem filhos, a referência pai a ele deverá ser definida como <code>null</code> . Isso efetivamente exclui o nó da árvore. Para fazer isso, você terá que acompanhar o pai do nó que estamos tentando excluir também. Também será útil criar uma maneira de rastrear o número de filhos que o nó de destino possui, pois isso determinará em qual caso nossa exclusão pertence. Vamos lidar com o segundo e terceiro casos nos próximos desafios. Boa sorte! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>remove</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == "function")})(), "The binary search tree has a method called <code>remove</code>.");'
  - text: Tentar remover um elemento que não existe retorna <code>null</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; return (test.remove(100) == null); })(), "Trying to remove an element that does not exist returns <code>null</code>.");'
  - text: 'Se o nó raiz não tiver filhos, a exclusão definirá a raiz como <code>null</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(500); test.remove(500); return (test.inorder() == null); })(), "If the root node has no children, deleting it sets the root to <code>null</code>.");'
  - text: A <code>remove</code> método remove nós folha da árvore
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (test.inorder().join("") == "567"); })(), "The <code>remove</code> method removes leaf nodes from the tree");'

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
    // case 1: target has no children, change code below this line
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
