---
id: 587d8258367417b2b2512c81
title: Delete a Node with One Child in a Binary Search Tree
challengeType: 1
forumTopicId: 301638
---

## Description
<section id='description'>

Now that we can delete leaf nodes let's move on to the second case: deleting a node with one child. For this case, say we have a tree with the following nodes 1 — 2 — 3 where 1 is the root. To delete 2, we simply need to make the right reference in 1 point to 3. More generally to delete a node with only one child, we make that node's parent reference the next node in the tree.
</section>

## Instructions
<section id='instructions'>

We've provided some code in our <code>remove</code> method that accomplishes the tasks from the last challenge. We find the target to delete and its parent and define the number of children the target node has. Let's add the next case here for target nodes with only one child. Here, we'll have to determine if the single child is a left or right branch in the tree and then set the correct reference in the parent to point to this node. In addition, let's account for the case where the target is the root node (this means the parent node will be <code>null</code>). Feel free to replace all the starter code with your own as long as it passes the tests.
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
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; return (test.remove(100) == null); })());
  - text: If the root node has no children, deleting it sets the root to <code>null</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(500); test.remove(500); return treeEquals(test, null); })());
  - text: The <code>remove</code> method removes leaf nodes from the tree
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return treeEquals(test, '5,6,7'); })());
  - text: The <code>remove</code> method removes nodes with one child.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return treeEquals(test, '-1'); })());
  - text: Removing the root in a tree with two nodes sets the second to be the root.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(15); test.add(27); test.remove(15); return treeEquals(test, '27'); })());
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
      // case 2: target has one child

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
    }
  }
}
```

</section>
