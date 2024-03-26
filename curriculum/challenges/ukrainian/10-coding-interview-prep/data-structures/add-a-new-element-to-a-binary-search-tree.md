---
id: 587d8257367417b2b2512c7b
title: Додавання нового елементу до двійкового дерева пошуку
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

Цей ряд завдань ознайомить вас з деревоподібною структурою даних. Дерева є важливими та універсальними структурами даних в галузі інформатики. Очевидно, вони мають саме таку назву, оскільки своїм виглядом нагадують справжні дерева. Деревоподібна структура даних починається з одного вузла (його ще називають коренем), який розгалужується на додаткові вузли, причому кожен з них може мати й свої дочірні елементи і т. д. Зазвичай кореневий вузол такої структури даних знаходиться зверху, тому вона схожа на справжнє дерево, тільки перевернуте.

Спершу опишімо загальну термінологію, яка знадобиться нам при роботі з деревами. Кореневий вузол - це верхівка дерева. Точки даних у дереві називають вузлами або вершинами. Батьківські вузли - це ті, гілки яких ведуть до інших вузлів. Останні називаються дочірніми вузлами. Інші складніші сімейні терміни використовуються так, як цього й можна було очікувати. Піддеревом називаються всі нащадки певного вузла, гілки можуть ще зватися ребрами, а листові вузли - це кінцеві вузли дерева, які не мають дочірніх елементів. Нарешті, зверніть увагу, що дерева за своєю суттю є рекурсивними структурами даних. Тобто будь-які дочірні елементи вузла є одночасно батьківськими для власного піддерева і т. д. Важливо розуміти рекурсивний характер дерев при розробці алгоритмів для загальних операцій з цими структурами даних.

To begin, we will discuss a particular type of tree, the binary tree. А точніше, ми розглянемо двійкове дерево пошуку. Опишімо його суть. В той час, як у деревоподібній структурі даних від одного вузла може відходити будь-яка кількість гілок, двійкове дерево може мати лише дві гілки для кожного вузла. Крім того, двійкове дерево пошуку впорядковане стосовно дочірніх піддерев таким чином, що значення кожного вузла в лівому піддереві є меншим за значення батьківського вузла, або ж рівним йому; а значення кожного вузла в правому піддереві є більшим від значення батьківського вузла чи рівним йому. Для кращого розуміння варто уявляти такий зв'язок:

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img alt="an example of a binairy search tree" style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

Тепер цей впорядкований зв'язок легко помітити. Зверніть увагу, що кожне значення ліворуч від 8 (кореневого вузла) - менше за 8, а кожне значення праворуч - більше за 8. Також варто зауважити, що цей зв'язок стосується і кожного з піддерев. Наприклад, перший дочірній елемент зліва - це піддерево. 3 - це батьківська вершина, і, за правилами двійкових дерев пошуку, вона має рівно два дочірніх вузли. Ми вже знаємо, що лівий дочірній вузол цієї вершини (власне, як і кожен з його дочірніх елементів) буде меншим за 3, а правий дочірній вузол (так само як і кожен з його дочірніх елементів) буде більшим за 3 (але водночас меншим, ніж значення кореня структури) і т. д.

Двійкові дерева пошуку є дуже поширеними та потрібними структурами даних, оскільки в середньому випадку складності вони забезпечують логарифмічний час для виконання таких операцій як пошук, вставляння та видалення.

# --instructions--

Розпочнемо з простого. Ми окреслили основу структури двійкового дерева пошуку разом з функцією створення вузлів для нашого дерева. Зауважте, що кожен вузол може мати ліве та праве значення. Вони будуть призначатися дочірнім піддеревам за умови їх існування. In our binary search tree, you will create a method to add new values to the tree. Метод повинен називатися `add` і приймати ціле значення, яке буде додане до дерева. Необхідно зберігати інваріантність двійкового дерева пошуку: значення кожного лівого дочірнього елемента повинно бути меншим за батьківське значення або рівним йому, а значення кожного правого дочірнього елемента - більшим за батьківське значення або дорівнювати йому. Зробімо так, щоб наше дерево не містило повторюваних значень. Якщо ми спробуємо додати значення, яке вже існує, метод повинен повернути `null`. Успішне додавання повернеться як `undefined`.

**Підказка:** дерева за своєю суттю є рекурсивними структурами даних!

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

Двійкове дерево пошуку повинне мати метод під назвою `add`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

Метод додавання повинен додавати елементи відповідно до правил двійкових дерев пошуку.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    const expectedResult = [1, 4, 7, 8, 34, 45, 73, 87];
    const result = test.inOrder();
    return expectedResult.toString() === result.toString();
  })()
);
```

Спроба додати елемент, який вже існує, повинна повернутися як `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    return test.add(4) == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    inOrder() {
      if (!this.root) {
        return null;
      }
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
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
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}
```
