---
title: Invert a Binary Tree
---
# Invert a Binary Tree


---
## Hints

### Hint 1

Create a invert(node = this.root) method in the BinarySearchTree constructor function.

##  Hint: 2

Try to use recursion and think of a base case.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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
  this.invert = function(node = this.root) {
    if (node) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      this.invert(node.left);
      this.invert(node.right);
    }
    return node;
  };
  // change code above this line
}
```

<a href='https://repl.it/repls/SereneScholarlyAnalyst' target='_blank' rel='nofollow'>Run Code</a>
#### Code Explanation
* Using recursion will allow you to traverse each node once and the only extra memory used is the auxiliary temp variable that enables you to swap.  You keep swapping the left and right pointers of a node until you reach the leaves which will not do anything as the left and right of them are null references.
</details>

