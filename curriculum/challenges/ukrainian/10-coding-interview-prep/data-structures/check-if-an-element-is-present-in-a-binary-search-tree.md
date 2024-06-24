---
id: 587d8257367417b2b2512c7c
title: Перевірте, чи в бінарному дереві пошуку наявний елемент
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

У нас вже є загальне уявлення про бінарне дерево пошуку, тому поговоримо про нього детальніше. Бінарне дерево пошуку в середньому забезпечує логарифмічний час для виконання таких загальних операцій, як пошук, додавання і видалення, а в найгіршому випадку — лінійний час. Чому ж так? Кожна з цих базових операцій передбачає знаходження елемента в дереві (або, у випадку вставки елемента, його майбутнє розташування). Деревоподібна структура є причиною того, що на кожному батьківському вузлі є ліве та праве розгалуження, а це дозволяє нам практично виключити з розгляду половину дерева, що залишилося. Як наслідок, пошук є пропорційним логарифму кількості вузлів в дереві, що забезпечує логарифмічний час виконання цих операцій у середньому випадку. А як тоді щодо найгіршого випадку? Що ж, розглянемо створення дерева з таких значень, додаючи їх зліва направо: `10`, `12`, `17`, `25`. Відповідно до правил бінарного дерева пошуку, ми додамо `12` праворуч від `10`, `17` праворуч від них і наостанок `25` (також праворуч). Тепер наше дерево нагадує зв’язаний список, а знаходження в ньому числа `25` передбачатиме лінійний обхід усіх елементів. Таким чином, в найгіршому випадку — лінійний час. Проблема в тому, що дерево незбалансоване. У наступних завданнях розглянемо це детальніше.

# --instructions--

У цьому завданні ми створимо утиліту для нашого дерева. Напишіть метод `isPresent`, який приймає ціле число як вхідне значення і повертає булеве значення для наявності або відсутності цього значення у бінарному дереві пошуку.

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

Бінарне дерево пошуку повинне мати метод під назвою `isPresent`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isPresent == 'function';
  })()
);
```

Метод `isPresent` має правильно перевіряти наявність або відсутність елементів, доданих до дерева.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    test.add(4);
    test.add(7);
    test.add(411);
    test.add(452);
    return (
      test.isPresent(452) &&
      test.isPresent(411) &&
      test.isPresent(7) &&
      !test.isPresent(100)
    );
  })()
);
```

Метод `isPresent` також має опрацьовувати випадки, коли дерево порожнє.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    return test.isPresent(5) == false;
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
