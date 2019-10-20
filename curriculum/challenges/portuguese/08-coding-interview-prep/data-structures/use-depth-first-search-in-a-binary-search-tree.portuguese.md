---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Use a primeira pesquisa de profundidade em uma árvore de pesquisa binária
---

## Description
<section id="description"> Sabemos como pesquisar uma árvore de pesquisa binária por um valor específico. Mas e se quisermos apenas explorar a árvore inteira? Ou se nós não temos uma árvore ordenada e precisamos apenas procurar por um valor? Aqui introduziremos alguns métodos de travessia de árvores que podem ser usados ​​para explorar estruturas de dados de árvores. A primeira é a pesquisa em profundidade. Na pesquisa em profundidade, uma determinada subárvore é explorada o mais profundamente possível antes que a pesquisa continue em outra subárvore. Existem três maneiras pelas quais isso pode ser feito: Em ordem: Comece a pesquisa no nó mais à esquerda e termine no nó mais à direita. Pré-encomenda: explore todas as raízes antes das folhas. Pós-ordem: explore todas as folhas antes das raízes. Como você pode imaginar, você pode escolher diferentes métodos de busca, dependendo do tipo de dados que sua árvore está armazenando e do que você está procurando. Para uma árvore de pesquisa binária, uma passagem in-order retorna os nós na ordem classificada. Instruções: Aqui nós iremos criar estes três métodos de busca em nossa árvore de busca binária. A pesquisa em profundidade é uma operação inerentemente recursiva que continua a explorar outras subárvores, desde que os nós filhos estejam presentes. Depois de entender esse conceito básico, você pode simplesmente reorganizar a ordem na qual você explora os nós e subárvores para produzir qualquer uma das três pesquisas acima. Por exemplo, na pesquisa de pós-ordem, gostaríamos de recorrer a um nó de folha antes de começarmos a retornar qualquer um dos nós, enquanto que na pesquisa de pré-ordem, gostaríamos de retornar os nós primeiro e continuar recursando. descendo a árvore. Defina os métodos <code>inorder</code> , <code>preorder</code> e <code>postorder</code> na nossa árvore. Cada um desses métodos deve retornar uma matriz de itens que representam o percurso da árvore. Certifique-se de retornar os valores inteiros em cada nó da matriz, não os próprios nós. Finalmente, retorne <code>null</code> se a árvore estiver vazia. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>inorder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == "function")})(), "The binary search tree has a method called <code>inorder</code>.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>preorder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == "function")})(), "The binary search tree has a method called <code>preorder</code>.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>postorder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == "function")})(), "The binary search tree has a method called <code>postorder</code>.");'
  - text: O método <code>inorder</code> retorna uma matriz dos valores do nó que resultam de um percurso inorder.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join("") == "012345678910"); })(), "The <code>inorder</code> method returns an array of the node values that result from an inorder traversal.");'
  - text: O método <code>preorder</code> retorna uma matriz dos valores do nó que resultam de uma passagem de pré-ordem.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join("") == "710325469810"); })(), "The <code>preorder</code> method returns an array of the node values that result from a preorder traversal.");'
  - text: O método <code>postorder</code> retorna uma matriz dos valores do nó que resultam de uma passagem de pós-ordem.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join("") == "024653181097"); })(), "The <code>postorder</code> method returns an array of the node values that result from a postorder traversal.");'
  - text: O método <code>inorder</code> retorna <code>null</code> para uma árvore vazia.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== "function") { return false; }; return (test.inorder() == null); })(), "The <code>inorder</code> method returns <code>null</code> for an empty tree.");'
  - text: O método de <code>preorder</code> retorna <code>null</code> para uma árvore vazia.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== "function") { return false; }; return (test.preorder() == null); })(), "The <code>preorder</code> method returns <code>null</code> for an empty tree.");'
  - text: O método <code>postorder</code> retorna <code>null</code> para uma árvore vazia.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== "function") { return false; }; return (test.postorder() == null); })(), "The <code>postorder</code> method returns <code>null</code> for an empty tree.");'

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
