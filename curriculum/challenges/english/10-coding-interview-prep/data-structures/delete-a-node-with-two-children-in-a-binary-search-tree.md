---
id: 587d8258367417b2b2512c82
title: Delete a Node with Two Children in a Binary Search Tree
challengeType: 1
forumTopicId: 301639
dashedName: delete-a-node-with-two-children-in-a-binary-search-tree
---

# --description--

Removing nodes that have two children is the hardest case to implement. Removing a node like this produces two subtrees that are no longer connected to the original tree structure. How can we reconnect them? One method is to find the smallest value in the right subtree of the target node and replace the target node with this value. Selecting the replacement in this way ensures that it is greater than every node in the left subtree it becomes the new parent of but also less than every node in the right subtree it becomes the new parent of. Once this replacement is made the replacement node must be removed from the right subtree. Even this operation is tricky because the replacement may be a leaf or it may itself be the parent of a right subtree. If it is a leaf we must remove its parent's reference to it. Otherwise, it must be the right child of the target. In this case, we must replace the target value with the replacement value and make the target reference the replacement's right child.

# --instructions--

Let's finish our `remove` method by handling the third case. We've provided some code again for the first two cases. Add some code now to handle target nodes with two children. Any edge cases to be aware of? What if the tree has only three nodes? Once you are finished this will complete our deletion operation for binary search trees. Nice job, this is a pretty hard problem!

# --hints--

The `BinarySearchTree` data structure should exist.

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

The binary search tree should have a method called `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Trying to remove an element that does not exist should return `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.remove == 'function' ? test.remove(100) == null : false;
  })()
);
```

If the root node has no children, deleting it should set the root to `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.add(500);
    test.remove(500);
    return typeof test.remove == 'function' ? test.inorder() == null : false;
  })()
);
```

The `remove` method should remove leaf nodes from the tree.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.add(5);
    test.add(3);
    test.add(7);
    test.add(6);
    test.add(10);
    test.add(12);
    test.remove(3);
    test.remove(12);
    test.remove(10);
    return typeof test.remove == 'function'
      ? test.inorder().join('') == '567'
      : false;
  })()
);
```

The `remove` method should remove nodes with one child.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(-1);
    test.add(3);
    test.add(7);
    test.add(16);
    test.remove(16);
    test.remove(7);
    test.remove(3);
    return test.inorder().join('') == '-1';
  })()
);
```

Removing the root in a tree with two nodes should set the second to be the root.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(15);
    test.add(27);
    test.remove(15);
    return test.inorder().join('') == '27';
  })()
);
```

The `remove` method should remove nodes with two children while maintaining the binary search tree structure.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(1);
    test.add(4);
    test.add(3);
    test.add(7);
    test.add(9);
    test.add(11);
    test.add(14);
    test.add(15);
    test.add(19);
    test.add(50);
    test.remove(9);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(11);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(14);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(19);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(3);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(50);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(15);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    return test.inorder().join('') == '147';
  })()
);
```

The root should be removable on a tree of three nodes.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(100);
    test.add(50);
    test.add(300);
    test.remove(100);
    return test.inorder().join('') == 50300;
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
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
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
        return searchTree(node);
      }
    },
    inorder: function() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {
          if (node.left != null) {
            traverseInOrder(node.left);
          }
          result.push(node.value);
          if (node.right != null) {
            traverseInOrder(node.right);
          }
        }
        traverseInOrder(this.root);
        return result;
      }
    },
    isBinarySearchTree() {
      if (this.root == null) {
        return null;
      } else {
        var check = true;
        function checkTree(node) {
          if (node.left != null) {
            var left = node.left;
            if (left.value > node.value) {
              check = false;
            } else {
              checkTree(left);
            }
          }
          if (node.right != null) {
            var right = node.right;
            if (right.value < node.value) {
              check = false;
            } else {
              checkTree(right);
            }
          }
        }
        checkTree(this.root);
        return check;
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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
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
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
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
    // Case 3: Target has two children
    // Only change code below this line
  };
}
```

# --solutions--

```js
// solution required
```
