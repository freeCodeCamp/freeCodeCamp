---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: 'Проверьте, присутствует ли элемент в дереве двоичного поиска'
---

## Description
<section id="description"> Теперь, когда у нас есть общее представление о том, какое бинарное дерево поиска давайте поговорим об этом чуть подробнее. Двоичные деревья поиска предоставляют логарифмическое время для общих операций поиска, вставки и удаления в среднем случае и линейного времени в худшем случае. Почему это? Каждая из этих основных операций требует от нас найти элемент в дереве (или в случае вставки, чтобы найти, куда он должен идти), и из-за древовидной структуры каждого родительского узла мы разветвляемся влево или вправо и фактически исключаем половину размера оставшегося дерева. Это делает поиск пропорциональным логарифму числа узлов в дереве, что создает логарифмическое время для этих операций в среднем случае. Хорошо, но как насчет худшего случая? Ну, подумайте о построении дерева из следующих значений, добавив их слева направо: <code>10</code> , <code>12</code> , <code>17</code> , <code>25</code> . Следуя нашим правилам для двоичного дерева поиска, мы добавим <code>12</code> справа от <code>10</code> , <code>17</code> справа от него и <code>25</code> справа от него. Теперь наше дерево напоминает связанный список и, пройдя его, чтобы найти <code>25</code> , потребовало бы, чтобы мы проходили все элементы линейным способом. Следовательно, линейное время в худшем случае. Проблема здесь в том, что дерево неуравновешено. Мы рассмотрим немного больше, что это означает в следующих задачах. Инструкции: В этой задаче мы создадим утилиту для нашего дерева. Напишите метод <code>isPresent</code> который принимает целочисленное значение в качестве входных данных и возвращает логическое значение для наличия или отсутствия этого значения в двоичном дереве поиска. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Существует структура данных <code>BinarySearchTree</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: 'Двоичное дерево поиска имеет метод, называемый <code>isPresent</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == "function")})(), "The binary search tree has a method called <code>isPresent</code>.");'
  - text: 'Метод <code>isPresent</code> корректно проверяет наличие или отсутствие элементов, добавленных в дерево.'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })(), "The <code>isPresent</code> method correctly checks for the presence or absence of elements added to the tree.");'
  - text: '<code>isPresent</code> обрабатывает случаи, когда дерево пусто.'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; return test.isPresent(5) == false; })(), "<code>isPresent</code> handles cases where the tree is empty.");'

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
