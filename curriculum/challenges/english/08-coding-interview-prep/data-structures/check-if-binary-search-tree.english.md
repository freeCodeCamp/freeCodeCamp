---
id: 5cc0c1b32479e176caf3b422
title: Check if Tree is Binary Search Tree
challengeType: 1
forumTopicId: 301624
---

## Description

<section id='description'>
Since you already know what a binary search tree is, this challenge will establish how it is you can tell that a tree is a binary search tree or not.
The main distinction of a binary search tree is that the nodes are ordered in an organized fashion. Nodes have at most 2 child nodes (placed to the right and/or left) based on if the child node's value is greater than or equal to (right) or less than (left) the parent node.
</section>

## Instructions

<section id='instructions'>
In this challenge, you will create a utility for your tree. Write a JavaScript method <code>isBinarySearchTree</code> which takes a tree as an input and returns a boolean value for whether the tree is a binary search tree or not. Use recursion whenever possible.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: A Binary Search Tree should return true when checked with <code>isBinarySearchTree()</code>.
    testString: assert((function() { var test = new BinarySearchTree(); test.add(5); test.add(3); test.add(4); return isBinarySearchTree(test) === true})());
  - text: A Non-Binary Search Tree should return false when checked with <code>isBinarySearchTree()</code>.
    testString: assert((function() { var test = new NonBinarySearchTree(); test.add(5); test.add(3); test.add(4); return isBinarySearchTree(test) === false})());
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function isBinarySearchTree(tree) {
  // change code below this line

  // change code above this line
}
```

</div>

### After Test
<div id='js-teardown'>

```js
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
}

class NonBinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(element) {
    if (this.root === null) {
      this.root = new Node(element);
      return;
    }

    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    current.left = new Node(element);
  }
}
```

</div>

</section>

## Solution

<section id='solution'>

```js
function isBinarySearchTree(tree) {
  if (tree.root === null) {
    return null;
  }

  function isBST(node) {
    if (node.left !== null) {
      if (node.left.value > node.value || !isBST(node.left)) {
        return false;
      }
    }
    if (node.right !== null) {
      if (node.right.value < node.value || !isBST(node.right)) {
        return false;
      }
    }
    return true;
  }
  return isBST(tree.root);
}
```

</section>
