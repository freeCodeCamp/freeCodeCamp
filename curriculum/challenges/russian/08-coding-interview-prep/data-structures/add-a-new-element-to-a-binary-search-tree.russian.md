---
id: 587d8257367417b2b2512c7b
title: Add a New Element to a Binary Search Tree
challengeType: 1
forumTopicId: 301618
localeTitle: Добавление нового элемента в двоичное дерево поиска
---

## Description
<section id='description'>
Теперь, когда у нас есть идея об основах, давайте напишем более сложный метод. В этой задаче мы создадим метод добавления новых значений в наше дерево двоичного поиска. Метод следует называть <code>add</code> и он должен принимать целочисленное значение для добавления в дерево. Позаботьтесь о сохранении инварианта двоичного дерева поиска: значение в каждом левом ребне должно быть меньше или равно родительскому значению, а значение в каждом правом дочернем случае должно быть больше или равно родительскому значению. Здесь давайте сделаем так, чтобы наше дерево не могло хранить повторяющиеся значения. Если мы попытаемся добавить значение, которое уже существует, метод должен вернуть значение <code>null</code> . В противном случае, если добавление будет успешным, <code>undefined</code> должен быть возвращен. Подсказка: деревья - это, естественно, рекурсивные структуры данных!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>add</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.add == 'function')})());
  - text: The add method adds elements according to the binary search tree rules.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); const expectedResult = [ 1, 4, 7, 8, 34, 45, 73, 87 ]; const result = test.inOrder(); return (expectedResult.toString() === result.toString()); })());
  - text: Adding an element that already exists returns <code>null</code>
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); return test.add(4) == null; })());

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

### After Tests
<div id='js-teardown'>

```js
BinarySearchTree.prototype = {
  isBinarySearchTree() {
    if (this.root == null) {
      return null;
    } else {
      var check = true;
      function checkTree(node) {
        if (node.left != null) {
          var left = node.left;
          if (left.value > node.value) {
            check = false;
          } else {
            checkTree(left);
          }
        }
        if (node.right != null) {
          var right = node.right;
          if (right.value < node.value) {
            check = false;
          } else {
            checkTree(right);
          }
        }
      }
      checkTree(this.root);
      return check;
    }
  }
};
BinarySearchTree.prototype = {
  inOrder() {
    if (!this.root) {
      return null;
    }
    var result = new Array();
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.value);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }
};

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
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            //si existe
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}
```

</section>
