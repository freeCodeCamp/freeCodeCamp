---
id: 587d8257367417b2b2512c7d
title: Find the Minimum and Maximum Height of a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Найдите минимальную и максимальную высоту двоичного дерева поиска
---

## Description
<section id="description"> В последнем вызове мы описали сценарий, в котором дерево может стать неуравновешенным. Чтобы понять концепцию баланса, давайте посмотрим на другое свойство дерева: height. Высота в дереве представляет собой расстояние от корневого узла до любого заданного листового узла. Различные пути в сильно разветвленной структуре дерева могут иметь разную высоту, но для данного дерева будет минимальная и максимальная высота. Если дерево сбалансировано, эти значения будут отличаться не более чем на один. Это означает, что в сбалансированном дереве все листовые узлы существуют на одном уровне, или если они не находятся на одном уровне, они не более одного уровня друг от друга. Свойство баланса важно для деревьев, потому что именно это определяет эффективность древовидных операций. Как мы объяснили в последнем задаче, мы сталкиваемся с худшей временной сложностью для сильно неуравновешенных деревьев. Самобалансирующиеся деревья обычно используются для учета этой проблемы в деревьях с динамическими наборами данных. К общим примерам относятся деревья AVL, красно-черные деревья и B-деревья. Эти деревья содержат дополнительную внутреннюю логику, которая перебалансирует дерево, когда вставки или удаления создают состояние дисбаланса. Примечание. Аналогичным свойством высоты является глубина, которая относится к тому, насколько далеко данный узел находится от корневого узла. Инструкции: Напишите два метода для нашего двоичного дерева: <code>findMinHeight</code> и <code>findMaxHeight</code> . Эти методы должны возвращать целочисленное значение для минимальной и максимальной высоты в заданном двоичном дереве, соответственно. Если узел пуст, назначим ему высоту <code>-1</code> (это базовый случай). Наконец, добавьте третий метод <code>isBalanced</code> который возвращает <code>true</code> или <code>false</code> зависимости от того, сбалансировано ли дерево или нет. Вы можете использовать первые два метода, которые вы только что написали, чтобы определить это. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Существует структура данных <code>BinarySearchTree</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: Двоичное дерево поиска имеет метод под названием <code>findMinHeight</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMinHeight == "function")})(), "The binary search tree has a method called <code>findMinHeight</code>.");'
  - text: Дерево двоичного поиска имеет метод под названием <code>findMaxHeight</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMaxHeight == "function")})(), "The binary search tree has a method called <code>findMaxHeight</code>.");'
  - text: 'Двоичное дерево поиска имеет метод, называемый <code>isBalanced</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isBalanced == "function")})(), "The binary search tree has a method called <code>isBalanced</code>.");'
  - text: Метод <code>findMinHeight</code> возвращает минимальную высоту дерева.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMinHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMinHeight() == 1); })(), "The <code>findMinHeight</code> method returns the minimum height of the tree.");'
  - text: Метод <code>findMaxHeight</code> возвращает максимальную высоту дерева.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMaxHeight() == 5); })(), "The <code>findMaxHeight</code> method returns the maximum height of the tree.");'
  - text: Пустое дерево возвращает высоту <code>-1</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; return (test.findMaxHeight() == -1); })(), "An empty tree returns a height of <code>-1</code>.");'
  - text: 'Метод <code>isBalanced</code> возвращает true, если дерево является сбалансированным двоичным деревом поиска.'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isBalanced !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.isBalanced(); })(), "The <code>isBalanced</code> method returns true if the tree is a balanced binary search tree.");'

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
