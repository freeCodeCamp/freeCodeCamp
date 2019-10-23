---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Use a primeira pesquisa em largura em uma árvore de pesquisa binária
---

## Description
<section id="description"> Aqui introduziremos outro método de travessia de árvore: pesquisa em largura. Em contraste com os métodos de pesquisa em profundidade do último desafio, a pesquisa em amplitude explora todos os nós em um determinado nível dentro de uma árvore antes de continuar para o próximo nível. Normalmente, as filas são utilizadas como estruturas de dados auxiliares no projeto de algoritmos de pesquisa em amplitude. Neste método, começamos adicionando o nó raiz a uma fila. Em seguida, iniciamos um loop no qual desenfileiramos o primeiro item da fila, o adicionamos a uma nova matriz e, em seguida, inspecionamos suas subárvores secundárias. Se seus filhos não forem nulos, eles serão enfileirados. Esse processo continua até que a fila esteja vazia. Instruções: Vamos criar um método de pesquisa <code>levelOrder</code> em nossa árvore chamada <code>levelOrder</code> . Esse método deve retornar uma matriz contendo os valores de todos os nós da árvore, explorados de uma maneira abrangente. Certifique-se de retornar os valores na matriz, não os próprios nós. Um nível deve ser percorrido da esquerda para a direita. Em seguida, vamos escrever um método semelhante chamado <code>reverseLevelOrder</code> que realiza a mesma pesquisa, mas na direção inversa (direita para esquerda) em cada nível. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>levelOrder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.levelOrder == "function")})(), "The binary search tree has a method called <code>levelOrder</code>.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>reverseLevelOrder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.reverseLevelOrder == "function")})(), "The binary search tree has a method called <code>reverseLevelOrder</code>.");'
  - text: O método <code>levelOrder</code> retorna uma matriz dos valores do nó da árvore explorados em ordem de nível.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.levelOrder().join("") == "719038102546"); })(), "The <code>levelOrder</code> method returns an array of the tree node values explored in level order.");'
  - text: O método <code>reverseLevelOrder</code> retorna uma matriz dos valores do nó da árvore explorados na ordem inversa do nível.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.reverseLevelOrder().join("") == "791108305264"); })(), "The <code>reverseLevelOrder</code> method returns an array of the tree node values explored in reverse level order.");'
  - text: O método <code>levelOrder</code> retorna <code>null</code> para uma árvore vazia.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; return (test.levelOrder() == null); })(), "The <code>levelOrder</code> method returns <code>null</code> for an empty tree.");'
  - text: O método <code>reverseLevelOrder</code> retorna <code>null</code> para uma árvore vazia.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; return (test.reverseLevelOrder() == null); })(), "The <code>reverseLevelOrder</code> method returns <code>null</code> for an empty tree.");'

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
