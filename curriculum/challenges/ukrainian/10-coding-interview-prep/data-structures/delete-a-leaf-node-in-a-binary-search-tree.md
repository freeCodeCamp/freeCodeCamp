---
id: 587d8258367417b2b2512c80
title: Видаліть листовий вузол з бінарного дерева пошуку
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

Це перше з трьох завдань, де ми реалізуємо складнішу операцію на бінарному дереві пошуку, а саме — видалення. Видалення складне, оскільки шляхом вилучення вузлів руйнуються зв’язки в дереві. Щоб переконатися, що структура бінарного дерева пошуку зберігається, ці зв’язки потрібно ретельно перевстановити. Деякі видалення передбачають зміни в дереві. Загалом є три випадки, з якими ви можете зіткнутися при видаленні вузлів: 1) вузол, який потрібно видалити, не має дітей; 2) вузол, який потрібно видалити, має одну дитину; 3) вузол, який потрібно видалити, має двох дітей. Видалити листовий вузол легко: ми просто вилучаємо його. Видалити вузол з одним дочірнім елементом теж відносно легко: ми просто вилучаємо його та з’єднуємо батьківський і дочірній елементи видаленого вузла. Видалити ж вузол з двома дочірніми елементами трохи складніше, оскільки в такому разі потрібно з’єднати два дочірні вузли з батьківським деревом. Як саме впоратися з таким випадком розглянемо у третьому завданні. Крім того, при видаленні варто пам’ятати про ребра. А що робити, якщо дерево порожнє? Або потрібно видалити кореневий вузол? А якщо дерево складається лише з двох елементів? Наразі зосередимося на першому випадку, тобто видаленні листового вузла.

# --instructions--

Створіть метод під назвою `remove` на нашому бінарному дереві. У ньому ми будуватимемо логіку для операції видалення. Спочатку в межах `remove` створіть функцію, що знаходить той вузол, який ми хочемо видалити в поточному дереві. Якщо у дереві немає цього вузла, то метод `remove` має повернути `null`. Якщо цільовий вузол є листовим (без дочірніх елементів), то посиланням на нього у батьківському елементі має бути `null`. Таким чином можна видалити вузол з дерева. Для цього вам також доведеться слідкувати за батьком вузла, який ми намагаємося видалити. А ще варто створити спосіб для відстеження кількість дітей цільового вузла: це допоможе визначити, з яким з трьох випадків ми маємо справу. Другий та третій випадки ми опрацюємо в наступних завданнях. Бажаємо успіхів!

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

Бінарне дерево пошуку повинне мати метод під назвою `remove`.

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

Метод має повернути `null` при спробі видалити елемент з порожнього дерева.

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

Метод має повернути `null` при спробі видалити елемент, якого не існує.

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

Якщо кореневий вузол не має дочірніх елементів, його видалення має встановити кореневе значення на `null`.

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

Метод `remove` має видалити листові вузли з дерева.

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
