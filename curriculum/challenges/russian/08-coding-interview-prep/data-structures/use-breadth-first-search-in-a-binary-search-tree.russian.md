---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301718
localeTitle: Использовать пятый поиск в двоичном дереве поиска
---

## Description
<section id='description'>
Здесь мы представим другой метод обхода дерева: поиск по ширине. В отличие от методов поиска по глубине из последней задачи, поиск по ширине исследует все узлы на заданном уровне внутри дерева, а затем переходит на следующий уровень. Как правило, очереди используются в качестве вспомогательных структур данных при разработке алгоритмов поиска по ширине. В этом методе мы начинаем с добавления корневого узла в очередь. Затем мы начинаем цикл, в котором мы деактивируем первый элемент в очереди, добавим его в новый массив и затем проверим оба его дочерних поддерева. Если его дочерние элементы не равны нулю, все они помещаются в очередь. Этот процесс продолжается до тех пор, пока очередь не будет пустой. Инструкции. Давайте создадим метод поиска ширины в нашем дереве, называемый <code>levelOrder</code> . Этот метод должен возвращать массив, содержащий значения всех узлов дерева, исследованных в широком смысле. Обязательно верните значения в массиве, а не сами узлы. Уровень должен пересекаться слева направо. Далее, давайте напишем аналогичный метод <code>reverseLevelOrder</code> который выполняет тот же поиск, но в обратном направлении (справа налево) на каждом уровне.
</section>

## Instructions
<section id='instructions'>
Let's create a breadth-first search method in our tree called <code>levelOrder</code>. This method should return an array containing the values of all the tree nodes, explored in a breadth-first manner. Be sure to return the values in the array, not the nodes themselves. A level should be traversed from left to right. Next, let's write a similar method called <code>reverseLevelOrder</code> which performs the same search but in the reverse direction (right to left) at each level.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>levelOrder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.levelOrder == 'function')})());
  - text: The binary search tree has a method called <code>reverseLevelOrder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.reverseLevelOrder == 'function')})());
  - text: The <code>levelOrder</code> method returns an array of the tree node values explored in level order.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.levelOrder().join('') == '719038102546'); })());
  - text: The <code>reverseLevelOrder</code> method returns an array of the tree node values explored in reverse level order.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.reverseLevelOrder().join('') == '791108305264'); })());
  - text: The <code>levelOrder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== 'function') { return false; }; return (test.levelOrder() == null); })());
  - text: The <code>reverseLevelOrder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== 'function') { return false; }; return (test.reverseLevelOrder() == null); })());

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
// solution required
```

</section>
