---
id: 587d8257367417b2b2512c7d
title: Знайдіть мінімальну та максимальну висоту в бінарному дереві пошуку
challengeType: 1
forumTopicId: 301641
dashedName: find-the-minimum-and-maximum-height-of-a-binary-search-tree
---

# --description--

У попередньому завданні ми описали ситуацію, коли бінарне дерево пошуку може стати незбалансованим. Щоб зрозуміти поняття балансу, розглянемо ще одну властивість дерева: його висоту. Висота дерева — це відстань від кореневого вузла до будь-якого заданого листового вузла. Різні шляхи в структурі дерева з великою кількістю гілок можуть мати неоднакову висоту, однак для наданого дерева існує мінімальна та максимальна висота. Якщо дерево збалансоване, ці значення будуть відрізнятися максимум на одиницю. Це означає, що у збалансованому дереві всі листові вузли або існують в межах одного рівня, або, якщо вони на різних рівнях, відрізняються щонайбільше на один рівень.

Баланс важливий для дерев, оскільки саме він визначає ефективність операцій на дереві. Згідно з поясненням в попередньому завданні, через незбалансовані дерева виникає найгірша часова складність. З цієї причини до дерев з динамічними даними часто використовують самозбалансовані дерева. До таких належать АВЛ-дерева, червоно-чорні дерева та Б-дерева. Усі ці типи дерев містять додаткову внутрішню логіку, яка перебалансовує дерево, коли вставка чи видалення елементів призводять до порушення балансу.

**Примітка:** існує схожа властивість — глибина, яка позначає відстань від кореня до даного вузла.

# --instructions--

Напишіть два методи для нашого бінарного дерева: `findMinHeight` та `findMaxHeight`. Ці методи відповідно мають повернути ціле значення для мінімальної та максимальної висоти в наданому бінарному дереві. Якщо вузол порожній, призначте до нього висоту `-1` (базовий випадок). Вкінці додайте третій метод `isBalanced`, який повертає `true` або `false` залежно від того, чи дерево збалансоване. Щоб це визначити, можна застосувати перші два методи, які ви щойно написали.

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

Бінарне дерево пошуку повинне мати метод під назвою `findMinHeight`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMinHeight == 'function';
  })()
);
```

Бінарне дерево пошуку повинне мати метод під назвою `findMaxHeight`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMaxHeight == 'function';
  })()
);
```

Бінарне дерево пошуку повинне мати метод під назвою `isBalanced`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isBalanced == 'function';
  })()
);
```

Метод `findMinHeight` має повернути мінімальну висоту дерева.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMinHeight !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMinHeight() == 1;
  })()
);
```

Метод `findMaxHeight` має повернути максимальну висоту дерева.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMaxHeight() == 5;
  })()
);
```

Порожнє дерево має повернути висоту `-1`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
      return false;
    }
    return test.findMaxHeight() == -1;
  })()
);
```

Метод `isBalanced` має повернути `false`, якщо дерево є незбалансованим бінарним деревом пошуку.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.isBalanced() === false;
  })()
);
```

Метод `isBalanced` має повернути `true`, якщо дерево є збалансованим бінарним деревом пошуку.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
      return false;
    }
    test.add(10);
    test.add(3);
    test.add(22);
    test.add(1);
    test.add(4);
    test.add(17);
    test.add(32);
    return test.isBalanced() === true;
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

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
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

  // Only change code above this line
}
```

# --solutions--

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

  // Only change code above this line
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
