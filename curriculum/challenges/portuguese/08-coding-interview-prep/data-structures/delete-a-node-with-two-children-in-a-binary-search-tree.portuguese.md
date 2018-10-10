---
id: 587d8258367417b2b2512c82
title: Delete a Node with Two Children in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Excluir um nó com dois filhos em uma árvore de pesquisa binária
---

## Description
<section id="description"> A remoção de nós que possuem dois filhos é o caso mais difícil de implementar. Remover um nó como este produz duas subárvores que não estão mais conectadas à estrutura de árvore original. Como podemos reconectá-los? Um método é encontrar o menor valor na subárvore direita do nó de destino e substituir o nó de destino por esse valor. Selecionar a substituição dessa maneira garante que ela seja maior que cada nó na subárvore esquerda, ela se torna o novo pai, mas também menos que cada nó na subárvore direita, ele se torna o novo pai de. Uma vez feita a substituição, o nó de substituição deve ser removido da subárvore direita. Até mesmo essa operação é complicada, porque a substituição pode ser uma folha ou ela mesma pode ser a mãe de uma subárvore direita. Se for uma folha, devemos remover a referência de seus pais para ela. Caso contrário, deve ser o filho certo do alvo. Nesse caso, devemos substituir o valor de destino pelo valor de substituição e fazer com que o destino faça referência ao filho certo da substituição. Instruções: Vamos terminar nosso método <code>remove</code> manipulando o terceiro caso. Nós fornecemos alguns códigos novamente para os dois primeiros casos. Adicione algum código agora para manipular nós de destino com dois filhos. Quaisquer casos de limites a ter em conta? E se a árvore tiver apenas três nós? Quando terminar, isso concluirá nossa operação de exclusão para árvores de pesquisa binária. Bom trabalho, este é um problema muito difícil! </section>

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
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == "function") ? (test.remove(100) == null) : false})(), "Trying to remove an element that does not exist returns <code>null</code>.");'
  - text: 'Se o nó raiz não tiver filhos, a exclusão definirá a raiz como <code>null</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; test.add(500); test.remove(500); return (typeof test.remove == "function") ? (test.inorder() == null) : false})(), "If the root node has no children, deleting it sets the root to <code>null</code>.");'
  - text: A <code>remove</code> método remove nós folha da árvore
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (typeof test.remove == "function") ? (test.inorder().join("") == "567") : false})(), "The <code>remove</code> method removes leaf nodes from the tree");'
  - text: A <code>remove</code> método remove os nós com uma criança.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join("") == "-1"); })(), "The <code>remove</code> method removes nodes with one child.");'
  - text: Remover a raiz de uma árvore com dois nós define o segundo como raiz.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join("") == "27"); })(), "Removing the root in a tree with two nodes sets the second to be the root.");'
  - text: 'A <code>remove</code> método remove os nós com dois filhos, mantendo a estrutura de árvore de busca binária.'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(1); test.add(4); test.add(3); test.add(7); test.add(9); test.add(11); test.add(14); test.add(15); test.add(19); test.add(50); test.remove(9); if (!test.isBinarySearchTree()) { return false; }; test.remove(11); if (!test.isBinarySearchTree()) { return false; }; test.remove(14); if (!test.isBinarySearchTree()) { return false; }; test.remove(19); if (!test.isBinarySearchTree()) { return false; }; test.remove(3); if (!test.isBinarySearchTree()) { return false; }; test.remove(50); if (!test.isBinarySearchTree()) { return false; }; test.remove(15); if (!test.isBinarySearchTree()) { return false; }; return (test.inorder().join("") == "147"); })(), "The <code>remove</code> method removes nodes with two children while maintaining the binary search tree structure.");'
  - text: A raiz pode ser removida em uma árvore de três nós.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(100); test.add(50); test.add(300); test.remove(100); return (test.inorder().join("") == 50300); })(), "The root can be removed on a tree of three nodes.");'

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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }).bind(this)();
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children = (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      }
      else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // case 2: target has one child
    else if (children == 1) {
      var newChild = (target.left !== null) ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // case 3: target has two children, change code below this line
  };
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
