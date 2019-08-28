---
id: 587d8257367417b2b2512c7d
title: Find the Minimum and Maximum Height of a Binary Search Tree
challengeType: 1
forumTopicId: 301641
localeTitle: Найдите минимальную и максимальную высоту двоичного дерева поиска
---

## Description
<section id='description'>
В последнем вызове мы описали сценарий, в котором дерево может стать неуравновешенным. Чтобы понять концепцию баланса, давайте посмотрим на другое свойство дерева: height. Высота в дереве представляет собой расстояние от корневого узла до любого заданного листового узла. Различные пути в сильно разветвленной структуре дерева могут иметь разную высоту, но для данного дерева будет минимальная и максимальная высота. Если дерево сбалансировано, эти значения будут отличаться не более чем на один. Это означает, что в сбалансированном дереве все листовые узлы существуют на одном уровне, или если они не находятся на одном уровне, они не более одного уровня друг от друга. Свойство баланса важно для деревьев, потому что именно это определяет эффективность древовидных операций. Как мы объяснили в последнем задаче, мы сталкиваемся с худшей временной сложностью для сильно неуравновешенных деревьев. Самобалансирующиеся деревья обычно используются для учета этой проблемы в деревьях с динамическими наборами данных. К общим примерам относятся деревья AVL, красно-черные деревья и B-деревья. Эти деревья содержат дополнительную внутреннюю логику, которая перебалансирует дерево, когда вставки или удаления создают состояние дисбаланса. Примечание. Аналогичным свойством высоты является глубина, которая относится к тому, насколько далеко данный узел находится от корневого узла. Инструкции: Напишите два метода для нашего двоичного дерева: <code>findMinHeight</code> и <code>findMaxHeight</code> . Эти методы должны возвращать целочисленное значение для минимальной и максимальной высоты в заданном двоичном дереве, соответственно. Если узел пуст, назначим ему высоту <code>-1</code> (это базовый случай). Наконец, добавьте третий метод <code>isBalanced</code> который возвращает <code>true</code> или <code>false</code> зависимости от того, сбалансировано ли дерево или нет. Вы можете использовать первые два метода, которые вы только что написали, чтобы определить это.
</section>

## Instructions
<section id='instructions'>
Write two methods for our binary tree: <code>findMinHeight</code> and <code>findMaxHeight</code>. These methods should return an integer value for the minimum and maximum height within a given binary tree, respectively. If the node is empty let's assign it a height of <code>-1</code> (that's the base case). Finally, add a third method <code>isBalanced</code> which returns <code>true</code> or <code>false</code> depending on whether the tree is balanced or not. You can use the first two methods you just wrote to determine this.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>findMinHeight</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMinHeight == 'function')})());
  - text: The binary search tree has a method called <code>findMaxHeight</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMaxHeight == 'function')})());
  - text: The binary search tree has a method called <code>isBalanced</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.isBalanced == 'function')})());
  - text: The <code>findMinHeight</code> method returns the minimum height of the tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMinHeight !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMinHeight() == 1); })());
  - text: The <code>findMaxHeight</code> method returns the maximum height of the tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMaxHeight() == 5); })());
  - text: An empty tree returns a height of <code>-1</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== 'function') { return false; }; return (test.findMaxHeight() == -1); })());
  - text: The <code>isBalanced</code> method returns true if the tree is a balanced binary search tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isBalanced !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return !test.isBalanced(); })());

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
  add: function(value) {
    var node = this.root;
    if (node == null) {
      this.root = new Node(value);
      return;
    } else {
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
      return searchTree(node);
    }
  }
};

```

</div>

</section>

## Solution
<section id='solution'>

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
  this.findMinHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMinHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMinHeight(root.left) + 1;
    }
    const lHeight = this.findMinHeight(root.left);
    const rHeight = this.findMinHeight(root.right);
    return Math.min(lHeight, rHeight) + 1;
  };
  this.findMaxHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMaxHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMaxHeight(root.left) + 1;
    }
    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    return Math.max(lHeight, rHeight) + 1;
  };
  this.isBalanced = function(root = this.root) {
    if (root === null) {
      return true;
    }

    if (root.left === null && root.right === null) {
      return true;
    }

    if (root.left === null) {
      return this.findMaxHeight(root.right) <= 0;
    }

    if (root.right === null) {
      return this.findMaxHeight(root.left) <= 0;
    }

    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    if (Math.abs(lHeight - rHeight) > 1) {
      return false;
    }
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  };
}
```

</section>
