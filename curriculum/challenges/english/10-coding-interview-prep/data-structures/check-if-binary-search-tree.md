---
id: 5cc0c1b32479e176caf3b422
title: Check if Tree is Binary Search Tree
challengeType: 1
forumTopicId: 301624
dashedName: check-if-tree-is-binary-search-tree
---

# --description--

Since you already know what a binary search tree is, this challenge will establish how it is you can tell that a tree is a binary search tree or not.

The main distinction of a binary search tree is that the nodes are ordered in an organized fashion. Nodes have at most 2 child nodes (placed to the right and/or left) based on if the child node's value is greater than or equal to (right) or less than (left) the parent node.

# --instructions--

In this challenge, you will create a utility for your tree. Write a JavaScript method `isBinarySearchTree` which takes a tree as an input and returns a boolean value for whether the tree is a binary search tree or not. Use recursion whenever possible.

# --hints--

Your Binary Search Tree should return true when checked with `isBinarySearchTree()`.

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

`isBinarySearchTree()` should return false when checked with a tree that is not a binary search tree.

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
