---
title: Check if an Element is Present in a Binary Search Tree
---
## Check if an Element is Present in a Binary Search Tree

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/coding-interview-prep/data-structures/check-if-an-element-is-present-in-a-binary-search-tree/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Method
- The BinarySearchTree data structure is recursive in nature.</li>
- Define a recursive function within privileged method isPresent() to traverse all branches of the binary search tree.</li>
- Exit recursive loop if base condition (match found) is satisfied or if search tree is empty.</li>
### Solution:
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
    this.isPresent = function(value) {        
      let search = function(branch) {
        if (value === branch.value) {
          return true;
        } else {
          if (value < branch.value && branch.left !== null) {
            return search(branch.left);
          }
          if (value > branch.value && branch.right !== null) {
            return search(branch.right);
          }
          return false;
        }
      }
      return search(this.root);  
    }
    // change code above this line
}
```
- [Run Code](https://repl.it/@nwin/check-if-an-element-is-present-in-a-binary-search-tree?language=javascript)
### Reference:
- [Wikipedia](https://en.wikipedia.org/wiki/Recursive_data_type)
