---
id: 587d8256367417b2b2512c7a
title: Trovare i valori minimo e massimo di un albero binario di ricerca
challengeType: 1
forumTopicId: 301642
dashedName: find-the-minimum-and-maximum-value-in-a-binary-search-tree
---

# --description--

In questa sfida definirai due metodi, `findMin` e `findMax`. Questi metodi dovrebbero restituire il valore minimo e massimo contenuto nell'albero binario di ricerca (non preoccuparti di aggiungere valori all'albero per ora, ne abbiamo aggiunti alcuni in background). Se si rimani bloccato, rifletti sull'invariante che deve essere vera per gli alberi di ricerca binari: ogni sottoalbero sinistro è inferiore o uguale al suo genitore e ogni sottoalbero destro è maggiore o uguale al suo genitore. Diciamo anche che il nostro albero può memorizzare solo valori interi. Se l'albero è vuoto, uno dei due metodi dovrebbe restituire `null`.

# --hints--

La struttura di dati `BinarySearchTree` dovrebbe esistere.

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

L'albero binario di ricerca dovrebbe avere un metodo chiamato `findMin`.

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

L'albero di ricerca binario dovrebbe avere un metodo chiamato `findMax`.

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

Il metodo `findMin` dovrebbe restituire il valore minimo nell'albero binario di ricerca.

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

Il metodo `findMax` dovrebbe restituire il valore massimo nell'albero binario di ricerca.

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

I metodi `findMin` e `findMax` dovrebbero restituire `null` per un albero vuoto.

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
