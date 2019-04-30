---
title: Find the Minimum and Maximum Height of a Binary Search Tree
---
## Find the Minimum and Maximum Height of a Binary Search Tree

### Solution

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
    this.findMinHeight = function(root = this.root) {
        // empty tree.
        if(root === null) {
            return -1;
        }
        // leaf node.
        if(root.left === null && root.right === null) {
            return 0;
        }
        if(root.left === null){
            return this.findMinHeight(root.right) + 1;
        }
        if(root.right === null){
            return this.findMinHeight(root.left) + 1;
        }
        const lHeight = this.findMinHeight(root.left);
        const rHeight = this.findMinHeight(root.right);
        return Math.min(lHeight, rHeight) + 1;
    };
    this.findMaxHeight = function(root = this.root) {
        // empty tree.
        if(root === null) {
            return -1;
        }
        // leaf node.
        if(root.left === null && root.right === null) {
            return 0;
        }
        if(root.left === null){
            return this.findMaxHeight(root.right) + 1;
        }
        if(root.right === null){
            return this.findMaxHeight(root.left) + 1;
        }
        const lHeight = this.findMaxHeight(root.left);
        const rHeight = this.findMaxHeight(root.right);
        return Math.max(lHeight, rHeight) + 1;
    };
    this.isBalanced = function(root = this.root) {

        if(root === null) {
            return true;
        }

        if(root.left === null && root.right === null){
            return true;
        }

        if(root.left === null) {
            return this.findMaxHeight(root.right) <= 0; 
        }

        if(root.right === null) {
             return this.findMaxHeight(root.left) <= 0; 
        }

        const lHeight = this.findMaxHeight(root.left);
        const rHeight = this.findMaxHeight(root.right);
        if(Math.abs(lHeight - rHeight) > 1){
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    };
}
```




