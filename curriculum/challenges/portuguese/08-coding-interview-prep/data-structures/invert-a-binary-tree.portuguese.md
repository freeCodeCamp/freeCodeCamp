---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
challengeType: 1
videoUrl: ''
localeTitle: Inverta uma árvore binária
---

## Description
<section id="description"> Aqui vamos criar uma função para inverter uma árvore binária. Dada uma árvore binária, queremos produzir uma nova árvore que seja equivalente à imagem espelhada dessa árvore. Executar uma travessia dentro da ordem em uma árvore invertida irá explorar os nós na ordem reversa quando comparado com a travessia dentro da árvore original. Escreva um método para fazer isso chamado <code>invert</code> em nossa árvore binária. Chamar esse método deve inverter a estrutura da árvore atual. Idealmente, gostaríamos de fazer isso no local em tempo linear. Ou seja, apenas visitamos cada nó uma vez e modificamos a estrutura de árvore existente à medida que avançamos, sem usar nenhuma memória adicional. Boa sorte! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A estrutura de dados <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: A árvore de pesquisa binária tem um método chamado <code>invert</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.invert == "function")})(), "The binary search tree has a method called <code>invert</code>.");'
  - text: O método <code>invert</code> inverte corretamente a estrutura da árvore.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); test.invert(); return test.inorder().join("") == "877345348741"; })(), "The <code>invert</code> method correctly inverts the tree structure.");'
  - text: Inverter uma árvore vazia retorna <code>null</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== "function") { return false; }; return (test.invert() == null); })(), "Inverting an empty tree returns <code>null</code>.");'

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
