---
id: 587d8256367417b2b2512c7a
title: Find the Minimum and Maximum Value in a Binary Search Tree
challengeType: 1
---

## Description
<section id='description'>
This series of challenges will introduce the tree data structure. Trees are an important and versatile data structure in computer science. Of course, their name comes from the fact that when visualized they look much like the trees we are familiar with in the natural world. A tree data structure begins with one node, typically referred to as the root, and from here branches out to additional nodes, each of which may have more child nodes, and so on and so forth. The data structure is usually visualized with the root node at the top; you can think of it as a natural tree flipped upside down.
First, let's describe some common terminology we will encounter with trees. The root node is the top of the tree. Data points in the tree are called nodes. Nodes with branches leading to other nodes are referred to as the parent of the node the branch leads to (the child). Other more complicated familial terms apply as you might expect. A subtree refers to all the descendants of a particular node, branches may be referred to as edges, and leaf nodes are nodes at the end of the tree that have no children. Finally, note that trees are inherently recursive data structures. That is, any children of a node are parents of their own subtree, and so on. The recursive nature of trees is important to understand when designing algorithms for common tree operations.
To begin, we will discuss a particular type of a tree, the binary tree. In fact, we will actually discuss a particular binary tree, a binary search tree. Let's describe what this means. While the tree data structure can have any number of branches at a single node, a binary tree can only have two branches for every node. Furthermore, a binary search tree is ordered with respect to the child subtrees, such that the value of each node in the left subtree is less than or equal to the value of the parent node, and the value of each node in the right subtree is greater than or equal to the value of the parent node. It's very helpful to visualize this relationship in order to understand it better:
<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px;' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>
Now this ordered relationship is very easy to see. Note that every value to the left of 8, the root node, is less than 8, and every value to the right is greater than 8. Also notice that this relationship applies to each of the subtrees as well. For example, the first left child is a subtree. 3 is the parent node, and it has exactly two child nodes &mdash; by the rules governing binary search trees, we know without even looking that the left child of this node (and any of its children) will be less than 3, and the right child (and any of its children) will be greater than 3 (but also less than the structure's root value), and so on.
Binary search trees are very common and useful data structures because they provide logarithmic time in the average case for several common operations such as lookup, insertion, and deletion.
Instructions: We'll start simple. We've defined the skeleton of a binary search tree structure here in addition to a function to create nodes for our tree. Observe that each node may have a left and right value. These will be assigned child subtrees if they exist. In our binary search tree, define two methods, <code>findMin</code> and <code>findMax</code>. These methods should return the minimum and maximum value held in the binary search tree (don't worry about adding values to the tree for now, we have added some in the background). If you get stuck, reflect on the invariant that must be true for binary search trees: each left subtree is less than or equal to its parent and each right subtree is greater than or equal to its parent. Let's also say that our tree can only store integer values. If the tree is empty, either method should return <code>null</code>.
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
  - text: The binary search tree has a method called <code>findMin</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMin == ''function'')})(), ''The binary search tree has a method called <code>findMin</code>.'');'
  - text: The binary search tree has a method called <code>findMax</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMax == ''function'')})(), ''The binary search tree has a method called <code>findMax</code>.'');'
  - text: The <code>findMin</code> method returns the minimum value in the binary search tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== ''function'') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMin() == 1; })(), ''The <code>findMin</code> method returns the minimum value in the binary search tree.'');'
  - text: The <code>findMax</code> method returns the maximum value in the binary search tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMax !== ''function'') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMax() == 87; })(), ''The <code>findMax</code> method returns the maximum value in the binary search tree.'');'
  - text: The <code>findMin</code> and <code>findMax</code> methods return <code>null</code> for an empty tree.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== ''function'') { return false; }; if (typeof test.findMax !== ''function'') { return false; }; return (test.findMin() == null && test.findMax() == null) })(), ''The <code>findMin</code> and <code>findMax</code> methods return <code>null</code> for an empty tree.'');'

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
