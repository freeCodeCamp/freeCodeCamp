---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301719
---

## Description
<section id='description'>

We know how to search a binary search tree for a specific value. But what if we just want to explore the entire tree? Or what if we don't have an ordered tree and we need to just search for a value? Here we will introduce some tree traversal methods which can be used to explore tree data structures. First up is depth-first search. In depth-first search, a given subtree is explored as deeply as possible before the search continues on to another subtree. There are three ways this can be done:
In-order: Begin the search at the left-most node and end at the right-most node.
Pre-order: Explore all the roots before the leaves.
Post-order: Explore all the leaves before the roots.
As you may guess, you may choose different search methods depending on what type of data your tree is storing and what you are looking for. For a binary search tree, an In-order traversal returns the nodes in sorted order.
</section>

## Instructions
<section id='instructions'>

Here we will create these three search methods on our binary search tree. Depth-first search is an inherently recursive operation which continues to explore further subtrees so long as child nodes are present. Once you understand this basic concept, you can simply rearrange the order in which you explore the nodes and subtrees to produce any of the three searches above. For example, in post-order search we would want to recurse all the way to a leaf node before we begin to return any of the nodes themselves, whereas in pre-order search we would want to return the nodes first, and then continue recursing down the tree.
Define <code>inorder</code>, <code>preorder</code>, and <code>postorder</code> methods on our tree. Each of these methods should return an array of items which represent the tree traversal. Be sure to return the integer values at each node in the array, not the nodes themselves. Finally, return <code>null</code> if the tree is empty.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>inorder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == 'function')})());
  - text: The binary search tree has a method called <code>preorder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == 'function')})());
  - text: The binary search tree has a method called <code>postorder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == 'function')})());
  - text: The <code>inorder</code> method returns an array of the node values that result from an inorder traversal.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join('') == '012345678910'); })());
  - text: The <code>preorder</code> method returns an array of the node values that result from a preorder traversal.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join('') == '710325469810'); })());
  - text: The <code>postorder</code> method returns an array of the node values that result from a postorder traversal.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join('') == '024653181097'); })());
  - text: The <code>inorder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; return (test.inorder() == null); })());
  - text: The <code>preorder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; return (test.preorder() == null); })());
  - text: The <code>postorder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; return (test.postorder() == null); })());
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
  // Add inorder method here

  // Add preorder method here

  // Add postorder method here

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

  inorder() {
    if (this.root === null) {
      return null;
    }

    const results = [];
    function order(node) {
      if (node.left) order(node.left);
      results.push(node.value);
      if (node.right) order(node.right);
    }
    order(this.root);
    return results;
  }

  preorder() {
    if (this.root === null) {
      return null;
    }

    const results = [];
    function order(node) {
      results.push(node.value);
      if (node.left) order(node.left);
      if (node.right) order(node.right);
    }
    order(this.root);
    return results;
  }

  postorder() {
    if (this.root === null) {
      return null;
    }

    const results = [];
    function order(node) {
      if (node.left) order(node.left);
      if (node.right) order(node.right);
      results.push(node.value);
    }
    order(this.root);
    return results;
  }
}
```

</section>
