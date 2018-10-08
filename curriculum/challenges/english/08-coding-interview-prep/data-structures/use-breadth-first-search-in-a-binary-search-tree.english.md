---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
---

## Description
<section id='description'>
Here we will introduce another tree traversal method: breadth-first search. In contrast to the depth-first search methods from the last challenge, breadth-first search explores all the nodes in a given level within a tree before continuing on to the next level. Typically, queues are utilized as helper data structures in the design of breadth-first search algorithms.
In this method, we start by adding the root node to a queue. Then we begin a loop where we dequeue the first item in the queue, add it to a new array, and then inspect both its child subtrees. If its children are not null, they are each enqueued. This process continues until the queue is empty.
Instructions: Let's create a breadth-first search method in our tree called <code>levelOrder</code>. This method should return an array containing the values of all the tree nodes, explored in a breadth-first manner. Be sure to return the values in the array, not the nodes themselves. A level should be traversed from left to right. Next, let's write a similar method called <code>reverseLevelOrder</code> which performs the same search but in the reverse direction (right to left) at each level.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: The binary search tree has a method called <code>levelOrder</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.levelOrder == "function")})(), "The binary search tree has a method called <code>levelOrder</code>.");'
  - text: The binary search tree has a method called <code>reverseLevelOrder</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.reverseLevelOrder == "function")})(), "The binary search tree has a method called <code>reverseLevelOrder</code>.");'
  - text: The <code>levelOrder</code> method returns an array of the tree node values explored in level order.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.levelOrder().join("") == "719038102546"); })(), "The <code>levelOrder</code> method returns an array of the tree node values explored in level order.");'
  - text: The <code>reverseLevelOrder</code> method returns an array of the tree node values explored in reverse level order.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.reverseLevelOrder().join("") == "791108305264"); })(), "The <code>reverseLevelOrder</code> method returns an array of the tree node values explored in reverse level order.");'
  - text: The <code>levelOrder</code> method returns <code>null</code> for an empty tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; return (test.levelOrder() == null); })(), "The <code>levelOrder</code> method returns <code>null</code> for an empty tree.");'
  - text: The <code>reverseLevelOrder</code> method returns <code>null</code> for an empty tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; return (test.reverseLevelOrder() == null); })(), "The <code>reverseLevelOrder</code> method returns <code>null</code> for an empty tree.");'

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
