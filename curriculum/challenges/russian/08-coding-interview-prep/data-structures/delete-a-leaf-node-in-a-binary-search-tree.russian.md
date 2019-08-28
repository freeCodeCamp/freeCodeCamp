---
id: 587d8258367417b2b2512c80
title: Delete a Leaf Node in a Binary Search Tree
challengeType: 1
forumTopicId: 301637
localeTitle: Удалить узел листа в двоичном дереве поиска
---

## Description
<section id='description'>
Это первая из трех задач, когда мы будем выполнять более сложную операцию в двоичных деревьях поиска: удаление. Удаление затруднено, поскольку удаление узлов ломает ссылки в дереве. Эти ссылки должны быть тщательно восстановлены для обеспечения сохранения структуры двоичного дерева. Для некоторых исключений это означает, что дерево должно быть перестроено. В общем случае вы столкнетесь с одним из трех случаев, когда пытаетесь удалить узел: Leaf Node: цель для удаления имеет ноль детей. Один ребенок: у цели для удаления только один ребенок. Двое детей: цель для удаления имеет два дочерних узла. Удаление листового узла легко, мы просто удалим его. Удаление узла одним ребенком также относительно просто, мы просто удалим его и связаем его родительский с дочерним узлом удаляемого узла. Однако удалить узел с двумя детьми сложнее, поскольку это создает два дочерних узла, которые необходимо переподключить к родительскому дереву. Мы посмотрим, как справиться с этим делом в третьем вызове. Кроме того, вы должны помнить о некоторых случаях при обработке удаления. Что делать, если дерево пустое? Что делать, если удаляемый узел является корневым узлом? Что делать, если в дереве есть только два элемента? Теперь давайте рассмотрим первый случай, когда мы удаляем листовой узел. Инструкции: Создайте метод на нашем двоичном дереве, который называется <code>remove</code> . Здесь мы построим логику для операции удаления. Во-первых, вам нужно создать функцию в удалении, которая находит узел, который мы пытаемся удалить в текущем дереве. Если узел отсутствует в дереве, <code>remove</code> должен вернуть значение <code>null</code> . Теперь, если целевой узел является листовым узлом без детей, то родительская ссылка на него должна быть установлена ​​в <code>null</code> . Это эффективно удаляет узел из дерева. Для этого вам нужно будет отслеживать родительский узел узла, который мы также пытаемся удалить. Также будет полезно создать способ отслеживания числа дочерних узлов целевого узла, так как это определит, к какому случаю относится наше удаление. Мы рассмотрим второй и третий случаи в следующих задачах. Удачи!
</section>

## Instructions
<section id='instructions'>
Create a method on our binary tree called <code>remove</code>. We'll build the logic for our deletion operation in here. First, you'll want to create a function within remove that finds the node we are trying to delete in the current tree. If the node is not present in the tree, <code>remove</code> should return <code>null</code>. Now, if the target node is a leaf node with no children, then the parent reference to it should be set to <code>null</code>. This effectively deletes the node from the tree. To do this, you will have to keep track of the parent of the node we are trying to delete as well. It will also be useful to create a way to track the number of children the target node has, as this will determine which case our deletion falls under.
We will handle the second and third cases in the next challenges. Good luck!
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
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(500); test.remove(500); return (test.inorder() == null); })());
  - text: The <code>remove</code> method removes leaf nodes from the tree
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (test.inorder().join('') == '567'); })());

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
  // case 1: target has no children, change code below this line
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
  },
  inorder: function() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        if (node.left != null) {
          traverseInOrder(node.left);
        }
        result.push(node.value);
        if (node.right != null) {
          traverseInOrder(node.right);
        }
      }
      traverseInOrder(this.root);
      return result;
    }
  },
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

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
