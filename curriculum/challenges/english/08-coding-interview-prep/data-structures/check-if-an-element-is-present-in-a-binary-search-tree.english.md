---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
---

## Description
<section id='description'>
Now that we have a general sense of what a binary search tree is let's talk about it in a little more detail. Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case, and linear time in the worst case. Why is this? Each of those basic operations requires us to find an item in the tree (or in the case of insertion to find where it should go) and because of the tree structure at each parent node we are branching left or right and effectively excluding half the size of the remaining tree. This makes the search proportional to the logarithm of the number of nodes in the tree, which creates logarithmic time for these operations in the average case.
Ok, but what about the worst case? Well, consider constructing a tree from the following values, adding them left to right: <code>10</code>, <code>12</code>, <code>17</code>, <code>25</code>. Following our rules for a binary search tree, we will add <code>12</code> to the right of <code>10</code>, <code>17</code> to the right of this, and <code>25</code> to the right of this. Now our tree resembles a linked list and traversing it to find <code>25</code> would require us to traverse all the items in linear fashion. Hence, linear time in the worst case. The problem here is that the tree is unbalanced. We'll look a little more into what this means in the following challenges.
Instructions: In this challenge, we will create a utility for our tree. Write a method <code>isPresent</code> which takes an integer value as input and returns a boolean value for the presence or absence of that value in the binary search tree.
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
  - text: The binary search tree has a method called <code>isPresent</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == "function")})(), "The binary search tree has a method called <code>isPresent</code>.");'
  - text: The <code>isPresent</code> method correctly checks for the presence or absence of elements added to the tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })(), "The <code>isPresent</code> method correctly checks for the presence or absence of elements added to the tree.");'
  - text: <code>isPresent</code> handles cases where the tree is empty.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; return test.isPresent(5) == false; })(), "<code>isPresent</code> handles cases where the tree is empty.");'

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
