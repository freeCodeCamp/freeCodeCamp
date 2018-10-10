---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
challengeType: 1
videoUrl: ''
localeTitle: Инвертировать двоичное дерево
---

## Description
<section id="description"> Здесь мы создадим функцию инвертирования двоичного дерева. Учитывая двоичное дерево, мы хотим создать новое дерево, эквивалентное зеркальному изображению этого дерева. Выполнение обхода порядка на инвертированном дереве будет исследовать узлы в обратном порядке по сравнению с обходным порядком исходного дерева. Напишите метод для этого, который называется <code>invert</code> на нашем двоичном дереве. Вызов этого метода должен инвертировать текущую древовидную структуру. В идеале мы хотели бы сделать это на месте в линейном времени. То есть мы только посещаем каждый узел один раз, и мы изменяем существующую древовидную структуру, когда мы идем, без использования дополнительной памяти. Удачи! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Существует структура данных <code>BinarySearchTree</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: Двоичное дерево поиска имеет метод <code>invert</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.invert == "function")})(), "The binary search tree has a method called <code>invert</code>.");'
  - text: Метод <code>invert</code> корректно инвертирует древовидную структуру.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); test.invert(); return test.inorder().join("") == "877345348741"; })(), "The <code>invert</code> method correctly inverts the tree structure.");'
  - text: Инвертирование пустого дерева возвращает <code>null</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== "function") { return false; }; return (test.invert() == null); })(), "Inverting an empty tree returns <code>null</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    // change code above this line
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
