---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301719
localeTitle: Использовать глубину первого поиска в двоичном дереве поиска
---

## Description
<section id='description'>
Мы знаем, как искать двоичное дерево поиска для определенного значения. Но что, если мы просто хотим исследовать все дерево? Или что, если у нас нет упорядоченного дерева, и нам нужно просто искать значение? Здесь мы представим некоторые методы обхода дерева, которые можно использовать для изучения структур древовидных данных. Сначала - поиск по глубине. При поиске по глубине, заданное поддерево рассматривается как можно глубже, прежде чем поиск продолжит переход к другому поддереву. Это можно сделать тремя способами: In-order: Начать поиск на самом левом узле и завершить на самом правом узле. Предварительный порядок: исследуйте все корни перед листьями. Post-order: Исследуйте все листья перед корнями. Как вы можете догадаться, вы можете выбрать различные методы поиска в зависимости от того, какие данные хранят ваше дерево и что вы ищете. Для двоичного дерева поиска обход ордера возвращает узлы в отсортированном порядке. Инструкции: Здесь мы создадим эти три метода поиска в нашем двоичном дереве поиска. Поиск по глубине - это неотъемлемая рекурсивная операция, которая продолжает исследовать дальнейшие поддеревья, пока присутствуют дочерние узлы. Как только вы поймете эту базовую концепцию, вы можете просто изменить порядок, в котором вы исследуете узлы и поддеревья, чтобы произвести любой из трех поисков выше. Например, в post-order search мы хотели бы перечислить весь путь до листового узла, прежде чем мы начнем возвращать любой из самих узлов, тогда как в предварительном поиске мы хотели бы сначала вернуть узлы, а затем продолжить рекурсию вниз по дереву. Определение <code>inorder</code> , <code>preorder</code> , и <code>postorder</code> метода на нашем дереве. Каждый из этих методов должен возвращать массив элементов, которые представляют обход дерева. Обязательно верните целые значения в каждом узле массива, а не сами узлы. Наконец, возвращаем значение <code>null</code> если дерево пусто.
</section>

## Instructions
<section id='instructions'>
Here we will create these three search methods on our binary search tree. Depth-first search is an inherently recursive operation which continues to explore further subtrees so long as child nodes are present. Once you understand this basic concept, you can simply rearrange the order in which you explore the nodes and subtrees to produce any of the three searches above. For example, in post-order search we would want to recurse all the way to a leaf node before we begin to return any of the nodes themselves, whereas in pre-order search we would want to return the nodes first, and then continue recursing down the tree.
Define <code>inorder</code>, <code>preorder</code>, and <code>postorder</code> methods on our tree. Each of these methods should return an array of items which represent the tree traversal. Be sure to return the integer values at each node in the array, not the nodes themselves. Finally, return <code>null</code> if the tree is empty.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>inorder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == 'function')})());
  - text: The binary search tree has a method called <code>preorder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == 'function')})());
  - text: The binary search tree has a method called <code>postorder</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == 'function')})());
  - text: The <code>inorder</code> method returns an array of the node values that result from an inorder traversal.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join('') == '012345678910'); })());
  - text: The <code>preorder</code> method returns an array of the node values that result from a preorder traversal.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join('') == '710325469810'); })());
  - text: The <code>postorder</code> method returns an array of the node values that result from a postorder traversal.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join('') == '024653181097'); })());
  - text: The <code>inorder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; return (test.inorder() == null); })());
  - text: The <code>preorder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; return (test.preorder() == null); })());
  - text: The <code>postorder</code> method returns <code>null</code> for an empty tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; return (test.postorder() == null); })());

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
  this.result = [];

  this.inorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.inorder(node.left);
    this.result.push(node.value);
    if (node.right) this.inorder(node.right);
    return this.result;
  };
  this.preorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    this.result.push(node.value);
    if (node.left) this.preorder(node.left);
    if (node.right) this.preorder(node.right);
    return this.result;
  };
  this.postorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.postorder(node.left);
    if (node.right) this.postorder(node.right);
    this.result.push(node.value);

    return this.result;
  };
}
```

</section>
