---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == "function")})(), "The binary search tree has a method called <code>inorder</code>.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == "function")})(), "The binary search tree has a method called <code>preorder</code>.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == "function")})(), "The binary search tree has a method called <code>postorder</code>.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join("") == "012345678910"); })(), "The <code>inorder</code> method returns an array of the node values that result from an inorder traversal.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join("") == "710325469810"); })(), "The <code>preorder</code> method returns an array of the node values that result from a preorder traversal.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join("") == "024653181097"); })(), "The <code>postorder</code> method returns an array of the node values that result from a postorder traversal.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== "function") { return false; }; return (test.inorder() == null); })(), "The <code>inorder</code> method returns <code>null</code> for an empty tree.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== "function") { return false; }; return (test.preorder() == null); })(), "The <code>preorder</code> method returns <code>null</code> for an empty tree.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== "function") { return false; }; return (test.postorder() == null); })(), "The <code>postorder</code> method returns <code>null</code> for an empty tree.");'

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
