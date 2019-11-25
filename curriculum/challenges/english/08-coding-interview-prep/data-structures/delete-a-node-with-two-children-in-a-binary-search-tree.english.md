---
id: 587d8258367417b2b2512c82
title: Delete a Node with Two Children in a Binary Search Tree
challengeType: 1
forumTopicId: 301639
---

## Description
<section id='description'>

Removing nodes that have two children is the hardest case to implement. Removing a node like this produces two subtrees that are no longer connected to the original tree structure. How can we reconnect them? One method is to find the smallest value in the right subtree of the target node and replace the target node with this value. Selecting the replacement in this way ensures that it is greater than every node in the left subtree it becomes the new parent of but also less than every node in the right subtree it becomes the new parent of.
Once this replacement is made the replacement node must be removed from the right subtree. Even this operation is tricky because the replacement may be a leaf or it may itself be the parent of a right subtree. If it is a leaf we must remove its parent's reference to it. Otherwise, it must be the right child of the target. In this case, we must replace the target value with the replacement value and make the target reference the replacement's right child.
</section>

## Instructions
<section id='instructions'>

Let's finish our <code>remove</code> method by handling the third case. We've provided some code again for the first two cases. Add some code now to handle target nodes with two children. Any edge cases to be aware of? What if the tree has only three nodes? Once you are finished this will complete our deletion operation for binary search trees. Nice job, this is a pretty hard problem!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>remove</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: Trying to remove an element that does not exist returns <code>null</code>.
    testString: "assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == 'function') ? (test.remove(100) == null) : false})());"
  - text: If the root node has no children, deleting it sets the root to <code>null</code>.
    testString: "assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; test.add(500); test.remove(500); return (typeof test.remove == 'function') ? treeEquals(test, null) : false})());"
  - text: The <code>remove</code> method removes leaf nodes from the tree
    testString: "assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (typeof test.remove == 'function') ? treeEquals(test, '5,6,7') : false})());"
  - text: The <code>remove</code> method removes nodes with one child.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return treeEquals(test, '-1'); })());
  - text: Removing the root in a tree with two nodes sets the second to be the root.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(15); test.add(27); test.remove(15); return treeEquals(test, '27'); })());
  - text: The <code>remove</code> method removes nodes with two children while maintaining the binary search tree structure.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(1); test.add(4); test.add(3); test.add(7); test.add(9); test.add(11); test.add(14); test.add(15); test.add(19); test.add(50); test.remove(9); if (!isBinarySearchTree(test)) { return false; }; test.remove(11); if (!isBinarySearchTree(test)) { return false; }; test.remove(14); if (!isBinarySearchTree(test)) { return false; }; test.remove(19); if (!isBinarySearchTree(test)) { return false; }; test.remove(3); if (!isBinarySearchTree(test)) { return false; }; test.remove(50); if (!isBinarySearchTree(test)) { return false; }; test.remove(15); if (!isBinarySearchTree(test)) { return false; }; return treeEquals(test, '1,4,7'); })());
  - text: The root can be removed on a tree of three nodes.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(100); test.add(50); test.add(300); test.remove(100); return treeEquals(test, '50,300'); })());
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function displayTree(tree) { console.log(JSON.stringify(tree, null, 2)); }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(element) {
    if (this.root === null) {
      this.root = new Node(element);
      return;
    }

    function searchTree(current) {
      if (current.value > element) {
        if (current.left) {
          return searchTree(current.left);
        }
        current.left = new Node(element);
        return;
      }

      if (current.value < element) {
        if (current.right) {
          return searchTree(current.right);
        }
        current.right = new Node(element);
        return;
      }

      return null;
    }

    return searchTree(this.root);
  }

  remove(value) {
    let parent = null;
    let target = this.root;
    while (target && target.value !== value) {
      if (value < target.value) {
        parent = target;
        target = target.left;
      } else {
        parent = target;
        target = target.right;
      }
    }
    if (target === null) {
      return null
    }
    // count number of children
    const children = (target.left === null ? 0 : 1) + (target.right === null ? 0 : 1);

    if (children === 0) {
      if (parent === null) {
        this.root = null;
      } else if (parent.left === target) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (children === 1) {
      const child = (target.left || target.right);
      if (parent === null) {
        this.root = child;
      } else if (parent.left === target) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    } else {
      // case 3: target has two children

    }
  }
}
```

</div>

### After Test
<div id='js-teardown'>

```js
function treeEquals(tree, string) {
  if (tree.root === null) {
    return string === null;
  }

  const values = [];
  function traverseInOrder(node) {
    if (node.left != null) {
      traverseInOrder(node.left);
    }
    values.push(node.value);
    if (node.right != null) {
      traverseInOrder(node.right);
    }
  }
  traverseInOrder(tree.root);
  return values.join(",") === string;
}
function isBinarySearchTree(tree) {
  if (tree.root === null) {
    return null;
  }

  function isBST(node) {
    if (node.left !== null) {
      if (node.left.value > node.value || !isBST(node.left)) {
        return false;
      }
    }
    if (node.right !== null) {
      if (node.right.value < node.value || !isBST(node.right)) {
        return false;
      }
    }
    return true;
  }
  return isBST(tree.root);
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function displayTree(tree) { console.log(JSON.stringify(tree, null, 2)); }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(element) {
    if (this.root === null) {
      this.root = new Node(element);
      return;
    }

    function searchTree(current) {
      if (current.value > element) {
        if (current.left) {
          return searchTree(current.left);
        }
        current.left = new Node(element);
        return;
      }

      if (current.value < element) {
        if (current.right) {
          return searchTree(current.right);
        }
        current.right = new Node(element);
        return;
      }

      return null;
    }

    return searchTree(this.root);
  }

  remove(value) {
    let parent = null;
    let target = this.root;
    while (target && target.value !== value) {
      if (value < target.value) {
        parent = target;
        target = target.left;
      } else {
        parent = target;
        target = target.right;
      }
    }
    if (target === null) {
      return null
    }
    // count number of children
    const children = (target.left === null ? 0 : 1) + (target.right === null ? 0 : 1);

    if (children === 0) {
      if (parent === null) {
        this.root = null;
      } else if (parent.left === target) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (children === 1) {
      const child = (target.left || target.right);
      if (parent === null) {
        this.root = child;
      } else if (parent.left === target) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    } else {
      let leastParent = target;
      let leastOnRight = target.right;
      while (leastOnRight.left !== null) {
        leastParent = leastOnRight;
        leastOnRight = leastOnRight.left;
      }
      if (leastParent !== target) {
        leastParent.left = leastOnRight.right;
        leastOnRight.right = target.right;
      }
      leastOnRight.left = target.left;

      if (parent === null) {
        this.root = leastOnRight;
      } else if (parent.left === target) {
        parent.left = leastOnRight;
      } else {
        parent.right = leastOnRight;
      }
    }
  }
}
```

</section>
