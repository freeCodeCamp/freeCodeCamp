---
id: 587d8257367417b2b2512c7d
title: Find the Minimum and Maximum Height of a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Encontre a altura mínima e máxima de uma árvore de pesquisa binária
---

## Description
<section id="description"> No último desafio, descrevemos um cenário em que uma árvore pode se desequilibrar. Para entender o conceito de equilíbrio, vamos dar uma olhada em outra propriedade da árvore: altura. Altura em uma árvore representa a distância do nó raiz a qualquer nó de folha fornecido. Caminhos diferentes em uma estrutura de árvore altamente ramificada podem ter diferentes alturas, mas para uma determinada árvore haverá uma altura mínima e máxima. Se a árvore estiver balanceada, esses valores serão diferenciados no máximo por um. Isso significa que, em uma árvore balanceada, todos os nós foliares existem dentro do mesmo nível ou, se não estiverem no mesmo nível, estão no máximo um nível à parte. A propriedade do equilíbrio é importante para as árvores porque é o que determina a eficiência das operações das árvores. Como explicamos no último desafio, enfrentamos a pior complexidade do tempo para árvores altamente desequilibradas. Árvores de autoequilíbrio são comumente usadas para explicar esse problema em árvores com conjuntos de dados dinâmicos. Exemplos comuns incluem árvores AVL, árvores vermelhas e pretas e árvores B. Todas essas árvores contêm lógica interna adicional que reequilibra a árvore quando inserções ou exclusões criam um estado de desequilíbrio. Nota: Uma propriedade semelhante à altura é depth, que se refere a quanto um determinado nó é do nó raiz. Instruções: Escreva dois métodos para nossa árvore binária: <code>findMinHeight</code> e <code>findMaxHeight</code> . Esses métodos devem retornar um valor inteiro para a altura mínima e máxima dentro de uma determinada árvore binária, respectivamente. Se o nó estiver vazio, vamos atribuir uma altura de <code>-1</code> (esse é o caso base). Finalmente, adicione um terceiro método <code>isBalanced</code> que retorna <code>true</code> ou <code>false</code> dependendo se a árvore está balanceada ou não. Você pode usar os dois primeiros métodos que acabou de escrever para determinar isso. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>findMinHeight</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMinHeight == "function")})(), "The binary search tree has a method called <code>findMinHeight</code>.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>findMaxHeight</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMaxHeight == "function")})(), "The binary search tree has a method called <code>findMaxHeight</code>.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>isBalanced</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isBalanced == "function")})(), "The binary search tree has a method called <code>isBalanced</code>.");'
  - text: O método <code>findMinHeight</code> retorna a altura mínima da árvore.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMinHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMinHeight() == 1); })(), "The <code>findMinHeight</code> method returns the minimum height of the tree.");'
  - text: O método <code>findMaxHeight</code> retorna a altura máxima da árvore.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMaxHeight() == 5); })(), "The <code>findMaxHeight</code> method returns the maximum height of the tree.");'
  - text: Uma árvore vazia retorna uma altura de <code>-1</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; return (test.findMaxHeight() == -1); })(), "An empty tree returns a height of <code>-1</code>.");'
  - text: O método <code>isBalanced</code> retorna true se a árvore for uma árvore de pesquisa binária balanceada.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isBalanced !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.isBalanced(); })(), "The <code>isBalanced</code> method returns true if the tree is a balanced binary search tree.");'

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
