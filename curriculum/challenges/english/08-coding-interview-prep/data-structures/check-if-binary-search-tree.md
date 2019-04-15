---
id: 
title: Check If Tree Is Binary Search Tree
challengeType: 1
---

## Description
<section id='description'> 
</section>

## Instructions
<section id='instructions'>
In this challenge, we will create a utility for our tree. Write a method <code>isBinarySearchTree</code> which takes a tree as an input and returns a boolean value for whether the tree is a binary search tree or not
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>add</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.add === 'function')}()), 'Your <code>LinkedList</code> class should have a <code>add</code> method.');
  - text: Your <code>LinkedList</code> class should assign <code>head</code> to the first node added.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); return test.head().element === 'cat'}()), 'Your <code>LinkedList</code> class should assign <code>head</code> to the first node added.');
  - text: The previous <code>node</code> in your <code>LinkedList</code> class should have reference to the newest node created.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return test.head().next.element === 'dog'}()), 'The previous <code>node</code> in your <code>LinkedList</code> class should have reference to the newest node created.');
  - text: The  <code>size</code> of your <code>LinkedList</code> class should equal the amount of nodes in the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return test.size() === 2}()), 'The  <code>size</code> of your <code>LinkedList</code> class should equal the amount of nodes in the linked list.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

}
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

function isBinarySearchTree(root) {// root is an object of class Node
  if (root == null) {
    return null;
  } else {
    let isBST = true;
    function checkTree(node) {
      if (node.left != null) {
        const left = node.left;
        if (left.value > node.value) {
          isBST = false;
        } else {
          checkTree(left);
        }
      }
      if (node.right != null) {
        const right = node.right;
        if (right.value < node.value) {
          isBST = false;
        } else {
          checkTree(right);
        };
      };
    };
    checkTree(root);
    return isBST;
  }
}

```
</section>

