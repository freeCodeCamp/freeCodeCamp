---
id: 587d8258367417b2b2512c82
title: Delete a Node with Two Children in a Binary Search Tree
challengeType: 1
forumTopicId: 301639
localeTitle: Удаление узла с двумя детьми в двоичном дереве поиска
---

## Description
<section id='description'>
Удаление узлов, имеющих двух детей, является самым сложным для реализации. Удаление такого узла приводит к двум поддеревьям, которые больше не связаны с исходной древовидной структурой. Как мы можем их восстановить? Один из методов заключается в том, чтобы найти наименьшее значение в правом поддереве целевого узла и заменить целевой узел на это значение. Выбор замены таким образом гарантирует, что он больше, чем каждый узел в левом поддереве, он становится новым родителем, но также меньше, чем каждый узел в правом поддереве, он становится новым родителем. После этой замены узел замены должен быть удален из правого поддерева. Даже эта операция сложна, потому что замена может быть листом, или она сама может быть родителем правильного поддерева. Если это лист, мы должны удалить ссылку на родителя. В противном случае это должен быть правильный ребенок цели. В этом случае мы должны заменить целевое значение значением замены и сделать целевую ссылку правильным ребенком замены. Инструкции: Закончим наш метод <code>remove</code> , обработав третий случай. Мы снова предоставили код для первых двух случаев. Добавьте код для обработки целевых узлов двумя детьми. Любые случаи краев, о которых нужно знать? Что, если дерево имеет только три узла? По завершении этого будет завершена операция удаления двоичных деревьев поиска. Хорошая работа, это довольно сложная проблема!
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
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == ''function'') ? (test.remove(100) == null) : false})());'
  - text: If the root node has no children, deleting it sets the root to <code>null</code>.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; test.add(500); test.remove(500); return (typeof test.remove == ''function'') ? (test.inorder() == null) : false})());'
  - text: The <code>remove</code> method removes leaf nodes from the tree
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== ''undefined'') { test = new BinarySearchTree() } else { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (typeof test.remove == ''function'') ? (test.inorder().join('''') == ''567'') : false})());'
  - text: The <code>remove</code> method removes nodes with one child.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join('') == '-1'); })());
  - text: Removing the root in a tree with two nodes sets the second to be the root.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join('') == '27'); })());
  - text: The <code>remove</code> method removes nodes with two children while maintaining the binary search tree structure.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(1); test.add(4); test.add(3); test.add(7); test.add(9); test.add(11); test.add(14); test.add(15); test.add(19); test.add(50); test.remove(9); if (!test.isBinarySearchTree()) { return false; }; test.remove(11); if (!test.isBinarySearchTree()) { return false; }; test.remove(14); if (!test.isBinarySearchTree()) { return false; }; test.remove(19); if (!test.isBinarySearchTree()) { return false; }; test.remove(3); if (!test.isBinarySearchTree()) { return false; }; test.remove(50); if (!test.isBinarySearchTree()) { return false; }; test.remove(15); if (!test.isBinarySearchTree()) { return false; }; return (test.inorder().join('') == '147'); })());
  - text: The root can be removed on a tree of three nodes.
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(100); test.add(50); test.add(300); test.remove(100); return (test.inorder().join('') == 50300); })());

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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // case 2: target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // case 3: target has two children, change code below this line
  };
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
