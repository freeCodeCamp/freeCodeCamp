---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Использовать пятый поиск в двоичном дереве поиска
---

## Description
<section id="description"> Здесь мы представим другой метод обхода дерева: поиск по ширине. В отличие от методов поиска по глубине из последней задачи, поиск по ширине исследует все узлы на заданном уровне внутри дерева, а затем переходит на следующий уровень. Как правило, очереди используются в качестве вспомогательных структур данных при разработке алгоритмов поиска по ширине. В этом методе мы начинаем с добавления корневого узла в очередь. Затем мы начинаем цикл, в котором мы деактивируем первый элемент в очереди, добавим его в новый массив и затем проверим оба его дочерних поддерева. Если его дочерние элементы не равны нулю, все они помещаются в очередь. Этот процесс продолжается до тех пор, пока очередь не будет пустой. Инструкции. Давайте создадим метод поиска ширины в нашем дереве, называемый <code>levelOrder</code> . Этот метод должен возвращать массив, содержащий значения всех узлов дерева, исследованных в широком смысле. Обязательно верните значения в массиве, а не сами узлы. Уровень должен пересекаться слева направо. Далее, давайте напишем аналогичный метод <code>reverseLevelOrder</code> который выполняет тот же поиск, но в обратном направлении (справа налево) на каждом уровне. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Существует структура данных <code>BinarySearchTree</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.levelOrder == "function")})(), "The binary search tree has a method called <code>levelOrder</code>.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.reverseLevelOrder == "function")})(), "The binary search tree has a method called <code>reverseLevelOrder</code>.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.levelOrder().join("") == "719038102546"); })(), "The <code>levelOrder</code> method returns an array of the tree node values explored in level order.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.reverseLevelOrder().join("") == "791108305264"); })(), "The <code>reverseLevelOrder</code> method returns an array of the tree node values explored in reverse level order.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; return (test.levelOrder() == null); })(), "The <code>levelOrder</code> method returns <code>null</code> for an empty tree.");'
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; return (test.reverseLevelOrder() == null); })(), "The <code>reverseLevelOrder</code> method returns <code>null</code> for an empty tree.");'

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
