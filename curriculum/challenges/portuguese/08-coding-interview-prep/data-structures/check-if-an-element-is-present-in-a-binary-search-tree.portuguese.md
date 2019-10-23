---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Verificar se um elemento está presente em uma árvore de pesquisa binária
---

## Description
<section id="description"> Agora que temos uma noção geral do que é uma árvore de pesquisa binária, vamos falar sobre isso com um pouco mais de detalhes. As árvores de pesquisa binária fornecem tempo logarítmico para as operações comuns de pesquisa, inserção e exclusão no caso médio e tempo linear no pior dos casos. Por que é isso? Cada uma dessas operações básicas nos obriga a encontrar um item na árvore (ou no caso de inserção para encontrar onde ele deve ir) e por causa da estrutura em árvore em cada nó pai que estamos ramificando para a esquerda ou direita e efetivamente excluindo metade do tamanho da árvore restante. Isso torna a pesquisa proporcional ao logaritmo do número de nós na árvore, o que cria um tempo logarítmico para essas operações no caso médio. Ok, mas e o pior dos casos? Bem, considere a construção de uma árvore a partir dos seguintes valores, adicionando-os da esquerda para a direita: <code>10</code> , <code>12</code> , <code>17</code> , <code>25</code> . Seguindo nossas regras para uma árvore de pesquisa binária, adicionaremos <code>12</code> à direita de <code>10</code> , <code>17</code> à direita desta e <code>25</code> à direita desta. Agora nossa árvore se assemelha a uma lista encadeada e atravessá-la para encontrar <code>25</code> exigiria que percorrêssemos todos os itens de maneira linear. Assim, o tempo linear no pior dos casos. O problema aqui é que a árvore está desequilibrada. Veremos um pouco mais sobre o que isso significa nos desafios a seguir. Instruções: Neste desafio, vamos criar um utilitário para a nossa árvore. Escreva um método <code>isPresent</code> que <code>isPresent</code> um valor inteiro como entrada e retorne um valor booleano para a presença ou ausência desse valor na árvore de pesquisa binária. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>isPresent</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == "function")})(), "The binary search tree has a method called <code>isPresent</code>.");'
  - text: O método <code>isPresent</code> verifica corretamente a presença ou ausência de elementos adicionados à árvore.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })(), "The <code>isPresent</code> method correctly checks for the presence or absence of elements added to the tree.");'
  - text: <code>isPresent</code> manipula casos em que a árvore está vazia.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; return test.isPresent(5) == false; })(), "<code>isPresent</code> handles cases where the tree is empty.");'

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
