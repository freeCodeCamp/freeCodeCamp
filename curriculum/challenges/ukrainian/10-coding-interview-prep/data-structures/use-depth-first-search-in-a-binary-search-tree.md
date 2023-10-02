---
id: 587d8257367417b2b2512c7e
title: Використання пошуку в глибину у двійковому дереві пошуку
challengeType: 1
forumTopicId: 301719
dashedName: use-depth-first-search-in-a-binary-search-tree
---

# --description--

Нам уже відомо, як у двійковому дереві пошуку знайти певне значення. А якщо ми хочемо обійти дерево повністю? Або якщо нам потрібно просто знайти якесь значення, але при цьому ми не маємо впорядкованого дерева? Саме тому ми познайомимо вас з деякими методами обходу дерева, які використовуються для дослідження деревоподібних структур даних. Спершу розглянемо пошук у глибину. Цей метод дозволяє дослідити дане піддерево настільки глибоко, наскільки це можливо, перед тим, як продовжити пошук на іншому піддереві. Пошук може здійснюватися трьома різними способами. Серединний порядок (inorder): з крайнього лівого вузла до крайнього правого вузла. Прямий порядок (pre-order): обхід всіх кореневих, а потім листових вузлів. Зворотний порядок (post-order): обхід всіх листових, а потім кореневих вузлів. Нескладно здогадатися, що можна обирати різні пошукові методи залежно від того, які дані зберігає дерево і що ви шукаєте. Для двійкового дерева пошуку серединний обхід повертає вузли у сортованому порядку.

# --instructions--

Створімо в нашому двійковому дереві пошуку вищезгадані три методи. Пошук у глибину має за основу рекурсивну операцію, яка продовжує досліджувати наступні піддерева за умови, що є дочірні вузли. Коли ви зрозумієте основні поняття, то зможете легко змінювати порядок обходу вузлів та піддерев, щоб реалізувати будь-який з вищезгаданих пошуків. До прикладу, під час зворотного пошуку ми захотіли б рекурсувати весь шлях до листового вузла перед тим, як повернути всі вузли. А під час прямого пошуку ми б хотіли спочатку повернути вузли, а тоді продовжити обходити дерево далі вниз. Визначте в нашому дереві методи `inorder`, `preorder` і `postorder`. Кожен з них повинен повернути масив елементів, які представляють обхід дерева. Переконайтеся, що в масиві повернулися цілі значення кожного вузла, а не самі вузли. Якщо дерево порожнє, повинен повертатися `null`.

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

Двійкове дерево пошуку повинне мати метод під назвою `inorder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.inorder == 'function';
  })()
);
```

Двійкове дерево пошуку повинне мати метод під назвою `preorder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.preorder == 'function';
  })()
);
```

Двійкове дерево пошуку повинне мати метод під назвою `postorder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.postorder == 'function';
  })()
);
```

Метод `inorder` повинен повернути масив зі значеннями вузлів, які отримуються в результаті серединного обходу.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.inorder().join('') == '012345678910';
  })()
);
```

Метод `preorder` повинен повертати масив зі значеннями вузлів, які отримуються в результаті прямого обходу.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.preorder().join('') == '710325469810';
  })()
);
```

Метод `postorder` повинен повернути масив зі значеннями вузлів, які отримуються в результаті зворотного обходу.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.postorder().join('') == '024653181097';
  })()
);
```

Для порожнього дерева метод `inorder` повинен повернути `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
      return false;
    }
    return test.inorder() == null;
  })()
);
```

Для порожнього дерева метод `preorder` повинен повернути `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
      return false;
    }
    return test.preorder() == null;
  })()
);
```

Для порожнього дерева метод `postorder` повинен повернути `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
      return false;
    }
    return test.postorder() == null;
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
  this.result = [];

  this.inorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.inorder(node.left);
    this.result.push(node.value);
    if (node.right) this.inorder(node.right);
    return this.result;
  };
  this.preorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    this.result.push(node.value);
    if (node.left) this.preorder(node.left);
    if (node.right) this.preorder(node.right);
    return this.result;
  };
  this.postorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.postorder(node.left);
    if (node.right) this.postorder(node.right);
    this.result.push(node.value);

    return this.result;
  };
}
```
