---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
challengeType: 1
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
- text: The <code>BinarySearchTree</code> data structure exists.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() }; return (typeof test == ''object'')})(), ''The <code>BinarySearchTree</code> data structure exists.'');'
- text: The binary search tree has a method called <code>invert</code>.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.invert == ''function'')})(), ''The binary search tree has a method called <code>invert</code>.'');'
- text: The <code>invert</code> method correctly inverts the tree structure.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== ''function'') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); test.invert(); return test.inorder().join('''') == ''877345348741''; })(), ''The <code>invert</code> method correctly inverts the tree structure.'');'
- text: Inverting an empty tree returns <code>null</code>.
  testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== ''function'') { return false; }; return (test.invert() == null); })(), ''Inverting an empty tree returns <code>null</code>.'');'

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
