---
id: 587d8258367417b2b2512c80
title: Видалення листового вузла у двійковому дереві пошуку
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

Це, власне, перше з трьох завдань, де ми реалізуємо складнішу операцію у двійковому дереві пошуку, а саме - видалення. Операція "видалення" є складною, оскільки шляхом вилучення вузлів руйнуються зв'язки в дереві. Щоб переконатися, що структура двійкового дерева пошуку зберігається, ці зв'язки потрібно ретельно перевстановити. Деякі видалення передбачають зміни в дереві. Загалом є три випадки, з якими ви можете зіткнутися при видаленні вузлів: Листовий Вузол: Ціль видалення не має дочірніх елементів. Один дочірній елемент: Ціль видалення має лише один дочірній елемент. Два дочірніх елементи: Ціль видалення має два дочірніх елементи. Видалити листовий вузол легко: ми просто вилучаємо його. Видалити вузол з одним дочірнім елементом теж відносно легко: ми просто вилучаємо його та з'єднуємо батьківську вершину з дочірнім елементом вилученого вузла. Видалити ж вузол з двома дочірніми елементами трохи складніше, оскільки в такому разі потрібно з'єднати два дочірні вузли з батьківським деревом. Як саме впоратися з таким випадком, розглянемо у третьому завданні. Крім того, при видаленні варто пам'ятати про ребра. А що робити, якщо дерево порожнє? Чи якщо ціль видалення - кореневий вузол? Чи якщо дерево складається лише з двох елементів? Наразі зосередимося на першому випадку, тобто видаленні листового вузла.

# --instructions--

Створіть у нашому двійковому дереві метод під назвою `remove`. Тут побудуємо алгоритм для нашої операції видалення. Спершу в межах видалення створіть функцію, що знаходить той вузол, який ми хочемо видалити в поточному дереві. Якщо у дереві немає цього вузла, то метод `remove` повинен повернути `null`. Якщо цільовий вузол є листовим (без дочірніх елементів), то посилання на нього у батьківському елементі має бути `null`. Таким чином можемо вилучити вузол з дерева. Для цього вам також доведеться слідкувати за батьком вузла, який ми намагаємося видалити. А ще варто створити спосіб, аби відстежувати кількість дітей цільового вузла: це допоможе визначити, з яким з трьох випадків ми маємо справу. Другий та третій випадки ми опрацюємо в наступних завданнях. Бажаємо успіхів!

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

Двійкове дерево пошуку повинне містити метод під назвою `remove`.

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

Спроба видалити елемент з порожнього дерева повинна повертати `null`.

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
    test.add(15);
    test.add(30);
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
  // Only change code below this line
}
```

# --solutions--

```js
// solution required
```
