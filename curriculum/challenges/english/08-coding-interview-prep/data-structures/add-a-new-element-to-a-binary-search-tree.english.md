---
id: 587d8257367417b2b2512c7b
title: Add a New Element to a Binary Search Tree
challengeType: 1
---

## Description
<section id='description'>
Now that we have an idea of the basics lets write a more complex method.
In this challenge, we will create a method to add new values to our binary search tree. The method should be called <code>add</code> and it should accept an integer value to add to the tree. Take care to maintain the invariant of a binary search tree: the value in each left child should be less than or equal to the parent value, and the value in each right child should be greater than or equal to the parent value. Here, let's make it so our tree cannot hold duplicate values. If we try to add a value that already exists, the method should return <code>null</code>. Otherwise, if the addition is successful, <code>undefined</code> should be returned.
Hint: trees are naturally recursive data structures!
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
  - text: The binary search tree has a method called <code>add</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.add == ''function'')})(), ''The binary search tree has a method called <code>add</code>.'');'
  - text: The add method adds elements according to the binary search tree rules.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== ''function'') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); const expectedResult = [ 1, 4, 7, 8, 34, 45, 73, 87 ]; const result = test.inOrder(); return (expectedResult.toString() === result.toString()); })(), ''The add method adds elements according to the binary search tree rules.'');'
  - text: Adding an element that already exists returns <code>null</code>
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== ''function'') { return false; }; test.add(4); return test.add(4) == null; })(), ''Adding an element that already exists returns <code>null</code>'');'

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
function Node(value) { 
 this.value = value; 
 this.left = null; 
 this.right = null; 
 } 
 function BinarySearchTree() { 
 this.root = null; 
 this.add = function (element) { 
 let current = this.root; 
 if (!current) { 
 this.root = new Node(element) 
 return; 
 } else { 
 const searchTree = function (current) { 
 if (current.value > element) { 
 if (current.left) { //si existe 
 return searchTree(current.left) 
 } else { 
 current.left = new Node(element); 
 return; 
 } 
 } else if (current.value < element) { 
  if (current.right) { 
 return searchTree(current.right) 
 } else { 
 current.right = new Node(element) 
 return; 
 } 
 } else { 
 return null; 
 } 
 } 
 return searchTree(current); 
 } 
 } 
 }
```

</section>
