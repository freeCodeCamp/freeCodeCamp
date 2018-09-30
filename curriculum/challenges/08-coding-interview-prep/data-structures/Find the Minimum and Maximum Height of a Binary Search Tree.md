---
id: 587d8257367417b2b2512c7d
title: Find the Minimum and Maximum Height of a Binary Search Tree
challengeType: 1
---

## Description
<section id='description'>
In the last challenge we described a scenario in which a tree could become unbalanced. To understand the concept of balance, let's take a look at another tree property: height. Height in a tree represents the distance from the root node to any given leaf node. Different paths in a highly branched tree structure may have different heights, but for a given tree there will be a minimum and maximum height. If the tree is balanced, these values will differ at most by one. This means that in a balanced tree, all the leaf nodes exist within the same level, or if they are not within the same level they are at most one level apart.
The property of balance is important for trees because it is what determines the efficiency of tree operations. As we explained in the last challenge, we face worst case time complexity for heavily unbalanced trees. Self-balancing trees are commonly used to account for this issue in trees with dynamic data sets. Common examples of these include AVL trees, red-black trees, and B-trees. These trees all contain additional internal logic which re-balance the tree when insertions or deletions create a state of imbalance.
Note: A similar property to height is depth, which refers to how far a given node is from the root node.
Instructions: Write two methods for our binary tree: <code>findMinHeight</code> and <code>findMaxHeight</code>. These methods should return an integer value for the minimum and maximum height within a given binary tree, respectively. If the node is empty let's assign it a height of <code>-1</code> (that's the base case). Finally, add a third method <code>isBalanced</code> which returns <code>true</code> or <code>false</code> depending on whether the tree is balanced or not. You can use the first two methods you just wrote to determine this.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: The <code>BinarySearchTree</code> data structure exists.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
- text: The binary search tree has a method called <code>findMinHeight</code>.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMinHeight == "function")})(), "The binary search tree has a method called <code>findMinHeight</code>.");'
- text: The binary search tree has a method called <code>findMaxHeight</code>.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMaxHeight == "function")})(), "The binary search tree has a method called <code>findMaxHeight</code>.");'
- text: The binary search tree has a method called <code>isBalanced</code>.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isBalanced == "function")})(), "The binary search tree has a method called <code>isBalanced</code>.");'
- text: The <code>findMinHeight</code> method returns the minimum height of the tree.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMinHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMinHeight() == 1); })(), "The <code>findMinHeight</code> method returns the minimum height of the tree.");'
- text: The <code>findMaxHeight</code> method returns the maximum height of the tree.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMaxHeight() == 5); })(), "The <code>findMaxHeight</code> method returns the maximum height of the tree.");'
- text: An empty tree returns a height of <code>-1</code>.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; return (test.findMaxHeight() == -1); })(), "An empty tree returns a height of <code>-1</code>.");'
- text: The <code>isBalanced</code> method returns true if the tree is a balanced binary search tree.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isBalanced !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.isBalanced(); })(), "The <code>isBalanced</code> method returns true if the tree is a balanced binary search tree.");'

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
