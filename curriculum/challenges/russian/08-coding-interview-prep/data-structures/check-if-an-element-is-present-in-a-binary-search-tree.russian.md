---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
forumTopicId: 301623
localeTitle: Проверьте, присутствует ли элемент в дереве двоичного поиска
---

## Description
<section id='description'>
Теперь, когда у нас есть общее представление о том, какое бинарное дерево поиска давайте поговорим об этом чуть подробнее. Двоичные деревья поиска предоставляют логарифмическое время для общих операций поиска, вставки и удаления в среднем случае и линейного времени в худшем случае. Почему так? Каждая из этих основных операций требует от нас найти элемент в дереве (или в случае вставки, чтобы найти, куда он должен идти), и из-за древовидной структуры каждого родительского узла мы разветвляемся влево или вправо и фактически исключаем половину размера оставшегося дерева. Это делает поиск пропорциональным логарифму числа узлов в дереве, что создает логарифмическое время для этих операций в среднем случае. Хорошо, но как насчет худшего случая? Ну, подумайте о построении дерева из следующих значений, добавив их слева направо: <code>10</code> , <code>12</code> , <code>17</code> , <code>25</code> . Следуя нашим правилам для двоичного дерева поиска, мы добавим <code>12</code> справа от <code>10</code> , <code>17</code> справа от него и <code>25</code> справа от него. Теперь наше дерево напоминает связанный список и, пройдя его, чтобы найти <code>25</code> , потребовало бы, чтобы мы проходили все элементы линейным способом. Следовательно, линейное время в худшем случае. Проблема здесь в том, что дерево неуравновешено. Мы рассмотрим немного больше, что это означает в следующих задачах. Инструкции: В этой задаче мы создадим утилиту для нашего дерева. Напишите метод <code>isPresent</code> который принимает целочисленное значение в качестве входных данных и возвращает логическое значение для наличия или отсутствия этого значения в двоичном дереве поиска.
</section>

## Instructions
<section id='instructions'>
In this challenge, we will create a utility for our tree. Write a method <code>isPresent</code> which takes an integer value as input and returns a boolean value for the presence or absence of that value in the binary search tree.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>BinarySearchTree</code> data structure exists.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: The binary search tree has a method called <code>isPresent</code>.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == 'function')})());
  - text: The <code>isPresent</code> method correctly checks for the presence or absence of elements added to the tree.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })());
  - text: <code>isPresent</code> handles cases where the tree is empty.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; return test.isPresent(5) == false; })());

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
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.isPresent = function (value) {
    var current = this.root
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}
```

</section>
