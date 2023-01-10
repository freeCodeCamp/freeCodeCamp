---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301718
dashedName: use-breadth-first-search-in-a-binary-search-tree
---

# --description--

這裏我們將介紹另一種樹遍歷方法：廣度優先搜索。 與上一次挑戰中的深度優先搜索方法相比，廣度優先搜索在繼續進入下一級別之前探索樹中給定級別中的所有節點。 通常，隊列在廣度優先搜索算法的設計中用作輔助數據結構。

在此方法中，我們首先將根節點添加到隊列中。 然後我們開始一個循環，我們將隊列中的第一個項目出列，將其添加到一個新數組，然後檢查它們的子子樹。 If its children are not null, they are each enqueued. 此過程將繼續，直到隊列爲空。

# --instructions--

Let's create a breadth-first search method in our tree called `levelOrder`. 此方法應返回一個包含所有樹節點值的數組，並以廣度優先的方式進行探索。 確保返回數組中的值，而不是節點本身。 應從左到右遍歷一個級別。 接下來，讓我們編寫一個名爲`reverseLevelOrder`的類似方法，它在每個級別執行相同的搜索，但是反向（從右到左）。

# --hints--

The `BinarySearchTree` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

The binary search tree should have a method called `levelOrder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.levelOrder == 'function';
  })()
);
```

The binary search tree should have a method called `reverseLevelOrder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.reverseLevelOrder == 'function';
  })()
);
```

The `levelOrder` method should return an array of the tree node values explored in level order.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.levelOrder().join('') == '719038102546';
  })()
);
```

The `reverseLevelOrder` method should return an array of the tree node values explored in reverse level order.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.reverseLevelOrder().join('') == '791108305264';
  })()
);
```

The `levelOrder` method should return `null` for an empty tree.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    return test.levelOrder() == null;
  })()
);
```

The `reverseLevelOrder` method should return `null` for an empty tree.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    return test.reverseLevelOrder() == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
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
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
      }
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.levelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [];
    while(queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return results;
  }

  this.reverseLevelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [] ;
    while ( queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.right) queue.push(node.right);
      if(node.left ) queue.push(node.left);
    }
    return results;
  }
  // Only change code above this line
}
```
