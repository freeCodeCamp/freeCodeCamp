---
id: 587d8256367417b2b2512c7a
title: Encontrar o valor mínimo e o máximo de uma árvore binária de busca
challengeType: 1
forumTopicId: 301642
dashedName: find-the-minimum-and-maximum-value-in-a-binary-search-tree
---

# --description--

Neste desafio, você vai definir dois métodos, `findMin` e `findMax`. Estes métodos devem retornar o valor mínimo e o máximo mantidos na árvore binária de busca (não se preocupe em adicionar valores à árvore por enquanto, porque já acrescentamos alguns em segundo plano). Se você ficar preso, pense sobre aquilo que deve ser verdadeiro e imutável em árvores binárias de busca: cada subárvore à esquerda é menor ou igual a seu pai e cada subárvore à direita é maior ou igual a seu pai. Digamos também que nossa árvore só pode armazenar valores inteiros. Se a árvore estiver vazia, qualquer método deve retornar `null`.

# --hints--

A estrutura de dados `BinarySearchTree` deve existir.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

A árvore binária de busca deve ter um método chamado `findMin`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMin == 'function';
  })()
);
```

A árvore binária de busca deve ter um método chamado `findMax`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMax == 'function';
  })()
);
```

O método `findMin` deve retornar o valor mínimo da árvore binária de busca.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMin !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMin() == 1;
  })()
);
```

O método `findMax` deve retornar o valor máximo da árvore binária de busca.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMax !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMax() == 87;
  })()
);
```

Os métodos `findMin` e `findMax` devem retornar `null` para uma árvore vazia.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMin !== 'function') {
      return false;
    }
    if (typeof test.findMax !== 'function') {
      return false;
    }
    return test.findMin() == null && test.findMax() == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
      function searchTree(node) {
        if (value < node.value) {
          if (node.left == null) {
            node.left = new Node(value);
            return;
          } else if (node.left != null) {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right == null) {
            node.right = new Node(value);
            return;
          } else if (node.right != null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
      }
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.findMin = function() {
    // Empty tree.
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  };
  this.findMax = function() {
    // Empty tree.
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  };
  this.add = function(value) {
    // Empty tree.
    if (!this.root) {
      this.root = new Node(value);
      return undefined;
    }
    return this.addNode(this.root, value);
  };
  this.addNode = function(node, value) {
    // Check if value already exists.
    if (node.value === value) return null;
    if (value < node.value) {
      if (node.left) {
        return this.addNode(node.left, value);
      } else {
        node.left = new Node(value);
        return undefined;
      }
    } else {
      if (node.right) {
        return this.addNode(node.right, value);
      } else {
        node.right = new Node(value);
        return undefined;
      }
    }
  };
  this.isPresent = function(value) {
    if (!this.root) {
      return null;
    }
    return this.isNodePresent(this.root, value);
  };
  this.isNodePresent = function(node, value) {
    if (node.value === value) return true;
    if (value < node.value) {
      return node.left ? this.isNodePresent(node.left, value) : false;
    } else {
      return node.right ? this.isNodePresent(node.right, value) : false;
    }
    return false;
  };
  this.findMinHeight = function() {
    if (!this.root) {
      return -1;
    }
    let heights = {};
    let height = 0;
    this.traverseTree(this.root, height, heights);
    return Math.min(...Object.keys(heights));
  };
  this.findMaxHeight = function() {
    if (!this.root) {
      return -1;
    }
    let heights = {};
    let height = 0;
    this.traverseTree(this.root, height, heights);
    return Math.max(...Object.keys(heights));
  };
  this.traverseTree = function(node, height, heights) {
    if (node.left === null && node.right === null) {
      return (heights[height] = true);
    }
    if (node.left) {
      this.traverseTree(node.left, height + 1, heights);
    }
    if (node.right) {
      this.traverseTree(node.right, height + 1, heights);
    }
  };
  this.isBalanced = function() {
    return this.findMaxHeight() > this.findMinHeight() + 1;
  };
  // DFS tree traversal.
  this.inorder = function() {
    if (!this.root) return null;
    let result = [];

    function traverseInOrder(node) {
      if (node.left) traverseInOrder(node.left);
      result.push(node.value);
      if (node.right) traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  };
  this.preorder = function() {
    if (!this.root) return null;
    let result = [];

    function traverseInOrder(node) {
      result.push(node.value);
      if (node.left) traverseInOrder(node.left);
      if (node.right) traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  };
  this.postorder = function() {
    if (!this.root) return null;
    let result = [];

    function traverseInOrder(node) {
      if (node.left) traverseInOrder(node.left);
      if (node.right) traverseInOrder(node.right);
      result.push(node.value);
    }
    traverseInOrder(this.root);
    return result;
  };
  // BFS tree traversal.
  this.levelOrder = function() {
    if (!this.root) return null;
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  };
  this.reverseLevelOrder = function() {
    if (!this.root) return null;
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return result;
  };
  // Delete a leaf node.
}
let bst = new BinarySearchTree();
```
