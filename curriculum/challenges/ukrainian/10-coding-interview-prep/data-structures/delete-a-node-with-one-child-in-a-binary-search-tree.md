---
id: 587d8258367417b2b2512c81
title: Видалення вузла з одним дочірнім елементом у двійковому дереві пошуку
challengeType: 1
forumTopicId: 301638
dashedName: delete-a-node-with-one-child-in-a-binary-search-tree
---

# --description--

Оскільки ми вже навчилися видаляти листові вузли з дерева, то зараз розглянемо другий випадок: видалення вузла з одним дочірнім елементом. Скажімо, у нас задане дерево з вузлами 1 — 2 — 3, де 1 - це кореневий вузол. Щоб видалити вузол 2, нам потрібно з'єднати вершину 1 з вершиною 3. Тобто для того, щоб видалити вузол, який має лише один дочірній елемент, ми робимо так, аби батьківський вузол посилався на наступний вузол у дереві.

# --instructions--

До методу `remove` ми внесли певний код, який виконує задачі з останнього завдання. Ми знаходимо цільовий вузол для видалення, а також його батька, і визначаємо кількість дочірніх елементів нашого цільового вузла. Додамо наступний випадок для цільових вузлів з одним дочірнім елементом. Тепер нам доведеться визначити, на якій гілці знаходиться дочірній елемент: лівій чи правій. Після цього ми повинні встановити правильне посилання на цей вузол у батьківському елементі. Крім того, врахуємо такий випадок, коли ціль видалення є кореневим вузлом (це означає, що батьківський вузол буде `null`). Можете сміливо змінювати початковий код на свій власний, але перевіряйте, чи він успішно проходить тестування.

# --hints--

Має існувати структура даних `BinarySearchTree`.

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

Двійкове дерево пошуку повинне мати метод під назвою `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Спроба видалити елемент, якого не існує, повинна повертати `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    return test.remove(100) == null;
  })()
);
```

Якщо кореневий вузол не має дочірніх елементів, його видалення має встановити кореневе значення `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(500);
    test.remove(500);
    return test.inorder() == null;
  })()
);
```

Метод `remove` повинен видалити листові вузли з дерева.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(5);
    test.add(3);
    test.add(7);
    test.add(6);
    test.add(10);
    test.add(12);
    test.remove(3);
    test.remove(12);
    test.remove(10);
    return test.inorder().join('') == '567';
  })()
);
```

Метод `remove` повинен видалити вузли з одним дочірнім елементом.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(1);
    test.add(4);
    test.add(3);
    test.add(2);
    test.add(6);
    test.add(8);
    test.remove(6);
    test.remove(3);
    return test.inorder().join('') == '1248';
  })()
);
```

У дереві з двома вузлами спроба видалити корінь має встановити коренем другий вузол.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(15);
    test.add(27);
    test.remove(15);
    return test.inorder().join('') == '27';
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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // Find the target value and its parent
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
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
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
    // Case 2: Target has one child
    // Only change code below this line
  };
}
```

# --solutions--

```js
// solution required
```
