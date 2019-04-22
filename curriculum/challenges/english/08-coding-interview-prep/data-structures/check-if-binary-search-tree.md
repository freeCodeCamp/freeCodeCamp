---
id: 587d8257367417b2b2512c9a
title: Check if Tree is Binary Search Tree
challengeType: 1
---

## Description
<section id='description'>
Since you already know what a binary search tree is, this challenge will establish how it is you can tell that a tree is a binary search tree or not.
The main distinction of a binary search tree is that the nodes are ordered in an organized fashion. Nodes have at most 2 child nodes that are placed to the right and the left based on if the node's value is greater than or equal to (right) or less than (left) the parent node.
</section>

## Instructions
<section id='instructions'>
In this challenge, you will create a utility for your tree. Write a JavaScript method <code>isBinarySearchTree</code> which takes a tree as an input and returns a boolean value for whether the tree is a binary search tree or not. Use recursion whenever possible.
</section>

## Tests
<section id='tests'>

```yml
  - text: Your Binary Search Tree should return true when checked with <code>isBinarySearchTree()</code>.
    testString: assert((function(){var test = new BinarySearchTree(); test.push(3); test.push(4); test.push(5); return iBinarySearchTree(test)}()), 'Your Binary Search Tree should return true when cheked with <code>isBinarySearchTree()</code>.');

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
}
function isBinarySearchTree(tree) {
    this.root = null;
    // change code below this line
}

// Do not edit below. For testing purposes.
BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

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
function BinarySearchTree() {
    this.root = null;
}
function isBinarySearchTree(tree) {
    if (this.root == null) {
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
      checkTree(this.root);
      return isBST;
    }
  }

```
</section>

