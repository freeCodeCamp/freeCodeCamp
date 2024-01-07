---
id: 587d8257367417b2b2512c7c
title: Перевірка наявності елементу у двійковому дереві пошуку
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

Тепер, коли ми маємо загальне уявлення про двійкове дерево пошуку, поговорімо про нього більш детально. Двійкове дерево пошуку забезпечує логарифмічний час для виконання таких загальних операцій, як пошук, додавання і видалення, в середньому випадку складності та лінійний час у найгіршому випадку. Чому ж це так? Кожна з цих базових операцій передбачає знаходження елемента в дереві (або під час вставляння елемента - пошуку його місця в дереві). Деревоподібна структура є причиною того, що на кожному батьківському вузлі є ліве та праве розгалуження, а це дозволяє нам практично виключити з розгляду половину дерева, що залишилося. Як наслідок, пошук є пропорційним логарифму кількості вузлів в дереві, що забезпечує логарифмічний час виконання цих операцій у середньому випадку. А як тоді щодо найгіршого випадку? Що ж, розгляньте можливість створення дерева з таких значень, додаючи їх зліва направо: `10` `12`, `17`, `25`. Відповідно до правил двійкового дерева пошуку, ми додамо `12` праворуч від `10`, `17` праворуч від них і наостанок `25` - також праворуч. Тепер наше дерево нагадує зв'язаний список, і знаходження в ньому числа `25` передбачатиме лінійний обхід усіх елементів. Таким чином, у найгіршому випадку - лінійний час. Проблема тут в тому, що дерево не збалансоване. Ми розглянемо це детальніше в наступних завданнях.

# --instructions--

У цьому завданні ми створимо сервісну програму для нашого дерева. Напишіть метод `isPresent`, який приймає ціле число як вхідне значення і повертає логічне значення для наявності або відсутності цього значення у двійковому дереві пошуку.

# --hints--

Повинна існувати структура даних `BinarySearchTree`.

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

Двійкове дерево пошуку повинне мати метод під назвою `isPresent`.

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

Метод `isPresent` повинен правильно перевіряти наявність або відсутність елементів, доданих дерева.

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

Метод `isPresent` повинен також опрацьовувати випадки, коли дерево є порожнім.

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
