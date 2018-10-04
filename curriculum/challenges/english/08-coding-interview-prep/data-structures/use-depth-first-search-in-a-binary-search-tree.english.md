---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
---

## Description
<section id='description'>
We know how to search a binary search tree for a specific value. But what if we just want to explore the entire tree? Or what if we don't have an ordered tree and we need to just search for a value? Here we will introduce some tree traversal methods which can be used to explore tree data structures. First up is depth-first search. In depth-first search, a given subtree is explored as deeply as possible before the search continues on to another subtree. There are three ways this can be done:
In-order: Begin the search at the left-most node and end at the right-most node.
Pre-order: Explore all the roots before the leaves.
Post-order: Explore all the leaves before the roots.
As you may guess, you may choose different search methods depending on what type of data your tree is storing and what you are looking for. For a binary search tree, an inorder traversal returns the nodes in sorted order.
Instructions: Here we will create these three search methods on our binary search tree. Depth-first search is an inherently recursive operation which continues to explore further subtrees so long as child nodes are present. Once you understand this basic concept, you can simply rearrange the order in which you explore the nodes and subtrees to produce any of the three searches above. For example, in post-order search we would want to recurse all the way to a leaf node before we begin to return any of the nodes themselves, whereas in pre-order search we would want to return the nodes first, and then continue recursing down the tree.
Define <code>inorder</code>, <code>preorder</code>, and <code>postorder</code> methods on our tree. Each of these methods should return an array of items which represent the tree traversal. Be sure to return the integer values at each node in the array, not the nodes themselves. Finally, return <code>null</code> if the tree is empty.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() }; return (typeof test == ''object'')})(), ''The <code>BinarySearchTree</code> data structure exists.'');'
  - text: The binary search tree has a method called <code>inorder</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == ''function'')})(), ''The binary search tree has a method called <code>inorder</code>.'');'
  - text: The binary search tree has a method called <code>preorder</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == ''function'')})(), ''The binary search tree has a method called <code>preorder</code>.'');'
  - text: The binary search tree has a method called <code>postorder</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == ''function'')})(), ''The binary search tree has a method called <code>postorder</code>.'');'
  - text: The <code>inorder</code> method returns an array of the node values that result from an inorder traversal.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== ''function'') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join('''') == ''012345678910''); })(), ''The <code>inorder</code> method returns an array of the node values that result from an inorder traversal.'');'
  - text: The <code>preorder</code> method returns an array of the node values that result from a preorder traversal.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== ''function'') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join('''') == ''710325469810''); })(), ''The <code>preorder</code> method returns an array of the node values that result from a preorder traversal.'');'
  - text: The <code>postorder</code> method returns an array of the node values that result from a postorder traversal.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== ''function'') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join('''') == ''024653181097''); })(), ''The <code>postorder</code> method returns an array of the node values that result from a postorder traversal.'');'
  - text: The <code>inorder</code> method returns <code>null</code> for an empty tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== ''function'') { return false; }; return (test.inorder() == null); })(), ''The <code>inorder</code> method returns <code>null</code> for an empty tree.'');'
  - text: The <code>preorder</code> method returns <code>null</code> for an empty tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== ''function'') { return false; }; return (test.preorder() == null); })(), ''The <code>preorder</code> method returns <code>null</code> for an empty tree.'');'
  - text: The <code>postorder</code> method returns <code>null</code> for an empty tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== ''function'') { return false; }; return (test.postorder() == null); })(), ''The <code>postorder</code> method returns <code>null</code> for an empty tree.'');'

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
