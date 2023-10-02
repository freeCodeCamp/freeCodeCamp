---
id: 5cc0c1b32479e176caf3b422
title: Перевірка, чи дерево є двійковим деревом пошуку
challengeType: 1
forumTopicId: 301624
dashedName: check-if-tree-is-binary-search-tree
---

# --description--

Ви вже знаєте, що таке двійкове дерево пошуку, а тому це завдання покаже, як можна з'ясувати, чи дерево є двійковим деревом пошуку.

Основною відмінністю двійкового дерева пошуку є те, що його вузли є чітко впорядкованими. Кожен вузол такого дерева має не більше 2-х дочірніх вузлів (розміщених праворуч та/або ліворуч). Це залежить від значення дочірнього вузла: воно може або бути більшим від батьківського вузла чи дорівнювати йому (праворуч) або бути меншим від нього (ліворуч).

# --instructions--

У цьому завданні ви створите сервісну програму для свого дерева. Напишіть метод JavaScript `isBinarySearchTree`, який приймає вхідне дерево і повертає значення логічного типу щодо того, чи це дерево є двійковим деревом пошуку. За можливості використайте рекурсію.

# --hints--

Ваше двійкове дерево пошуку повинне повернути true при перевірці методом `isBinarySearchTree()`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.push(1);
    test.push(5);
    test.push(3);
    test.push(2);
    test.push(4);
    return isBinarySearchTree(test) == true;
  })()
);
```

`isBinarySearchTree()` should return false when checked with a tree that is not a binary search tree.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.push(1);
    test.root.left = new Node(1);
    return isBinarySearchTree(test) == false;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};
```

## --seed-contents--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  if (tree.root == null) {
    return null;
  } else {
    let isBST = true;
    function checkTree(node) {
      if (node.left != null) {
        const left = node.left;
        if (left.value >= node.value) {
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
        }
      }
    }
    checkTree(tree.root);
    return isBST;
  }
};
```
