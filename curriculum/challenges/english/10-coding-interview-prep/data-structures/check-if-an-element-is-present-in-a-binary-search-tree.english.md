---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
isHidden: false
forumTopicId: 301623
---

## Description
<section id='description'>

Now that we have a general sense of what a binary search tree is let's talk about it in a little more detail. Binary search trees provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case, and linear time in the worst case. Why is this? Each of those basic operations requires us to find an item in the tree (or in the case of insertion to find where it should go) and because of the tree structure at each parent node we are branching left or right and effectively excluding half the size of the remaining tree. This makes the search proportional to the logarithm of the number of nodes in the tree, which creates logarithmic time for these operations in the average case.
Ok, but what about the worst case? Well, consider constructing a tree from the following values, adding them left to right: <code>10</code>, <code>12</code>, <code>17</code>, <code>25</code>. Following our rules for a binary search tree, we will add <code>12</code> to the right of <code>10</code>, <code>17</code> to the right of this, and <code>25</code> to the right of this. Now our tree resembles a linked list and traversing it to find <code>25</code> would require us to traverse all the items in linear fashion. Hence, linear time in the worst case. The problem here is that the tree is unbalanced. We'll look a little more into what this means in the following challenges.
</section>

## Instructions
<section id='instructions'>

In this challenge, we will create a utility for our tree. Write a method <code>isPresent</code> which takes an integer value as input and returns a boolean value for the presence or absence of that value in the binary search tree.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure should exist.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree should have a method called <code>isPresent</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == 'function')})());
  - text: The <code>isPresent</code> method should correctly check for the presence or absence of elements added to the tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })());
  - text: <code>isPresent</code> should handle cases where the tree is empty.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; return test.isPresent(5) == false; })());
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
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
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        function searchTree(node) {
          if (value < node.value) {
            if (node.left == null) {
              node.left = new Node(value);
              return;
            } else if (node.left != null) {
              return searchTree(node.left);
            }
          } else if (value > node.value) {
            if (node.right == null) {
              node.right = new Node(value);
              return;
            } else if (node.right != null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        }
        return searchTree(node);
      }
    }
  }
);
```

</div>
</section>

## Solution
<section id='solution'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.isPresent = function (value) {
    var current = this.root
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}
```

</section>
