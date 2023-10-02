---
id: 5cc0c1b32479e176caf3b422
title: Verificar se a árvore é uma árvore binária de busca
challengeType: 1
forumTopicId: 301624
dashedName: check-if-tree-is-binary-search-tree
---

# --description--

Como você já sabe o que é uma árvore binária de busca, este desafio vai estabelecer como você pode dizer que uma árvore é uma árvore binária de busca ou não.

A principal distinção está no fato de que uma árvore binária de busca tem os nós ordenados de maneira organizada. Os nós têm no máximo 2 nós filhos (colocados à direita e/ou à esquerda) com base no valor do nó filho ser maior ou igual a (à direita) ou menor que (à esquerda) o valor do nó pai.

# --instructions--

Neste desafio, você criará um utilitário para a árvore. Escreva um método `isBinarySearchTree` em JavaScript que receba uma árvore como entrada e retorne um valor booleano para saber se a árvore é ou não uma árvore binária de busca. Use recursão sempre que possível.

# --hints--

A árvore binária de busca deve retornar true quando verificada com `isBinarySearchTree()`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.push(1);
    test.push(5);
    test.push(3);
    test.push(2);
    test.push(4);
    return isBinarySearchTree(test) == true;
  })()
);
```

`isBinarySearchTree()` deve retornar false quando verificado com uma árvore que não seja uma árvore binária de busca.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.push(1);
    test.root.left = new Node(1);
    return isBinarySearchTree(test) == false;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};
```

## --seed-contents--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  if (tree.root == null) {
    return null;
  } else {
    let isBST = true;
    function checkTree(node) {
      if (node.left != null) {
        const left = node.left;
        if (left.value >= node.value) {
          isBST = false;
        } else {
          checkTree(left);
        }
      }
      if (node.right != null) {
        const right = node.right;
        if (right.value < node.value) {
          isBST = false;
        } else {
          checkTree(right);
        }
      }
    }
    checkTree(tree.root);
    return isBST;
  }
};
```
