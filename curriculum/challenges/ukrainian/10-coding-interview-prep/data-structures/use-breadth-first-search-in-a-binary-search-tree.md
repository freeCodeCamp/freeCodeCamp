---
id: 587d8258367417b2b2512c7f
title: Використайте пошук в ширину на бінарному дереві пошуку
challengeType: 1
forumTopicId: 301718
dashedName: use-breadth-first-search-in-a-binary-search-tree
---

# --description--

Зараз ознайомимось з ще одним методом обходу дерева — пошук у ширину. На відміну від пошуку в глибину, пошук у ширину відвідує всі вузли на даному рівні дерева, а потім переходить до наступного рівня. Зазвичай допоміжними структурами даних в розробці алгоритмів пошуку в ширину є черги.

У цьому методі ми спочатку додамо кореневий вузол до черги. Потім почнемо цикл, в якому перший елемент черги вилучається, додається до нового масиву, а тоді перевіряються обидва дочірні піддерева. Якщо дочірні елементи не є нулями, то вони додаються до черги. Цей процес повторюється, допоки черга не стає порожньою.

# --instructions--

Створимо в нашому дереві метод пошуку в ширину під назвою `levelOrder`. Він має повернути масив, який містить значення всіх вузлів дерева, досліджених під час пошуку в ширину. Переконайтеся, що в масиві повернулися не самі вузли, а їхні значення. Обхід рівня відбувається зліва направо. Потім напишіть подібний метод під назвою `reverseLevelOrder`, який на кожному рівні здійснює такий самий пошук, але у зворотному напрямку (тобто справа наліво).

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

Бінарне дерево пошуку повинне мати метод під назвою `levelOrder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.levelOrder == 'function';
  })()
);
```

Бінарне дерево пошуку повинне мати метод під назвою `reverseLevelOrder`.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.reverseLevelOrder == 'function';
  })()
);
```

Метод `levelOrder` має повернути масив зі значеннями вузлів дерева, досліджених в рівневому порядку.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
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
    return test.levelOrder().join('') == '719038102546';
  })()
);
```

Метод `reverseLevelOrder` має повернути масив зі значеннями вузлів дерева, досліджених в зворотному рівневому порядку.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
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
    return test.reverseLevelOrder().join('') == '791108305264';
  })()
);
```

Метод `levelOrder` має повернути `null`, якщо дерево порожнє.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    return test.levelOrder() == null;
  })()
);
```

Метод `reverseLevelOrder` має повернути `null`, якщо дерево порожнє.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    return test.reverseLevelOrder() == null;
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
  this.levelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [];
    while(queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return results;
  }

  this.reverseLevelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [] ;
    while ( queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.right) queue.push(node.right);
      if(node.left ) queue.push(node.left);
    }
    return results;
  }
  // Only change code above this line
}
```
