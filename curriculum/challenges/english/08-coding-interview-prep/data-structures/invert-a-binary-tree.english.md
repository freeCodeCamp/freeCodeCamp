---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
challengeType: 1
forumTopicId: 301704
---

## Description
<section id='description'>
Here will we create a function to invert a binary tree. Given a binary tree, we want to produce a new tree that is equivalently the mirror image of this tree. Running an inorder traversal on an inverted tree will explore the nodes in reverse order when compared to the inorder traversal of the original tree. Write a method to do this called <code>invert</code> on our binary tree. Calling this method should invert the current tree structure. Ideally, we would like to do this in-place in linear time. That is, we only visit each node once and we modify the existing tree structure as we go, without using any additional memory. Good luck!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>invert</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.invert == 'function')})());
  - text: The <code>invert</code> method correctly inverts the tree structure.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); test.invert(); return treeEquals(test, '87,73,45,34,8,7,4,1'); })());
  - text: Inverting an empty tree returns <code>null</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== 'function') { return false; }; return (test.invert() == null); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function displayTree(tree) { console.log(JSON.stringify(tree, null, 2)); }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(element) {
    if (this.root === null) {
      this.root = new Node(element);
      return;
    }

    function searchTree(current) {
      if (current.value > element) {
        if (current.left) {
          return searchTree(current.left);
        }
        current.left = new Node(element);
        return;
      }

      if (current.value < element) {
        if (current.right) {
          return searchTree(current.right);
        }
        current.right = new Node(element);
        return;
      }

      return null;
    }

    return searchTree(this.root);
  }
  // Add invert method here

}
```

</div>


### After Test
<div id='js-teardown'>

```js
function treeEquals(tree, string) {
  if (tree.root === null) {
    return string === null;
  }

  const values = [];
  function traverseInOrder(node) {
    if (node.left != null) {
      traverseInOrder(node.left);
    }
    values.push(node.value);
    if (node.right != null) {
      traverseInOrder(node.right);
    }
  }
  traverseInOrder(tree.root);
  return values.join(",") === string;
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function displayTree(tree) { console.log(JSON.stringify(tree, null, 2)); }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(element) {
    if (this.root === null) {
      this.root = new Node(element);
      return;
    }

    function searchTree(current) {
      if (current.value > element) {
        if (current.left) {
          return searchTree(current.left);
        }
        current.left = new Node(element);
        return;
      }

      if (current.value < element) {
        if (current.right) {
          return searchTree(current.right);
        }
        current.right = new Node(element);
        return;
      }

      return null;
    }

    return searchTree(this.root);
  }

  invert() {
    if (this.root === null) {
      return null;
    }

    function switchChildren(node) {
      [node.left, node.right] = [node.right, node.left];

      if (node.left) {
        switchChildren(node.left);
      }
      if (node.right) {
        switchChildren(node.right);
      }
    }
    switchChildren(this.root);
  }
}
```

</section>
