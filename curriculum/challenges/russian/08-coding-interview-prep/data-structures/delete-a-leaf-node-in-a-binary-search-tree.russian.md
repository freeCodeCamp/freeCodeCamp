---
id: 587d8258367417b2b2512c80
title: Delete a Leaf Node in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Удалить узел листа в двоичном дереве поиска
---

## Description
<section id="description"> Это первая из трех задач, когда мы будем выполнять более сложную операцию в двоичных деревьях поиска: удаление. Удаление затруднено, поскольку удаление узлов ломает ссылки в дереве. Эти ссылки должны быть тщательно восстановлены для обеспечения сохранения структуры двоичного дерева. Для некоторых исключений это означает, что дерево должно быть перестроено. В общем случае вы столкнетесь с одним из трех случаев, когда пытаетесь удалить узел: Leaf Node: цель для удаления имеет ноль детей. Один ребенок: у цели для удаления только один ребенок. Двое детей: цель для удаления имеет два дочерних узла. Удаление листового узла легко, мы просто удалим его. Удаление узла одним ребенком также относительно просто, мы просто удалим его и связаем его родительский с дочерним узлом удаляемого узла. Однако удалить узел с двумя детьми сложнее, поскольку это создает два дочерних узла, которые необходимо переподключить к родительскому дереву. Мы посмотрим, как справиться с этим делом в третьем вызове. Кроме того, вы должны помнить о некоторых случаях при обработке удаления. Что делать, если дерево пустое? Что делать, если удаляемый узел является корневым узлом? Что делать, если в дереве есть только два элемента? Теперь давайте рассмотрим первый случай, когда мы удаляем листовой узел. Инструкции: Создайте метод на нашем двоичном дереве, который называется <code>remove</code> . Здесь мы построим логику для операции удаления. Во-первых, вам нужно создать функцию в удалении, которая находит узел, который мы пытаемся удалить в текущем дереве. Если узел отсутствует в дереве, <code>remove</code> должен вернуть значение <code>null</code> . Теперь, если целевой узел является листовым узлом без детей, то родительская ссылка на него должна быть установлена ​​в <code>null</code> . Это эффективно удаляет узел из дерева. Для этого вам нужно будет отслеживать родительский узел узла, который мы также пытаемся удалить. Также будет полезно создать способ отслеживания числа дочерних узлов целевого узла, так как это определит, к какому случаю относится наше удаление. Мы рассмотрим второй и третий случаи в следующих задачах. Удачи! </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: 'Двоичное дерево поиска имеет метод, называемый <code>remove</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == "function")})(), "The binary search tree has a method called <code>remove</code>.");'
  - text: 'Попытка удалить элемент, который не существует, возвращает <code>null</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; return (test.remove(100) == null); })(), "Trying to remove an element that does not exist returns <code>null</code>.");'
  - text: 'Если корневой узел не имеет дочерних элементов, его удаление устанавливает корень в <code>null</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(500); test.remove(500); return (test.inorder() == null); })(), "If the root node has no children, deleting it sets the root to <code>null</code>.");'
  - text: Метод <code>remove</code> удаляет листовые узлы из дерева
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (test.inorder().join("") == "567"); })(), "The <code>remove</code> method removes leaf nodes from the tree");'

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
    // case 1: target has no children, change code below this line
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
