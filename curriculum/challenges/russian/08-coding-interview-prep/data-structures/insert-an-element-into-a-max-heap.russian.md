---
id: 587d825a367417b2b2512c8a
title: Insert an Element into a Max Heap
challengeType: 1
forumTopicId: 301703
localeTitle: Вставка элемента в максимальную кучу
---

## Description
<section id='description'>
Теперь мы перейдем к другой структуре данных дерева, двоичной куче. Бинарная куча - частично упорядоченное двоичное дерево, которое удовлетворяет свойству кучи. Свойство heap указывает связь между родительским и дочерним узлами. У вас может быть максимальная куча, в которой все родительские узлы больше или равны их дочерним узлам или минимальная куча, в которой верно обратное. Двоичные кучи также являются полными бинарными деревьями. Это означает, что все уровни дерева полностью заполнены, и если последний уровень частично заполнен, он заполняется слева направо. Хотя двоичные кучи могут быть реализованы как древовидные структуры с узлами, которые содержат левую и правую ссылки, частичный порядок в соответствии с свойством кучи позволяет нам представлять кучу с массивом. Отношения родитель-дети - это то, что нас интересует, и с простой арифметикой мы можем вычислить дочерние элементы любого родителя и родителя любого дочернего узла. Например, рассмотрим это представление массива двоичной мини-кучи: <code>[ 6, 22, 30, 37, 63, 48, 42, 76 ]</code> Корневой узел - это первый элемент, 6. Его дети - 22 и 30. Если мы посмотрим при взаимосвязи между индексами массива этих значений для индекса i дети равны 2 * i + 1 и 2 * i + 2. Аналогично, элемент с индексом 0 является родителем этих двух детей по индексам 1 и 2. Подробнее Как правило, мы можем найти родительский узел узла в любом индексе со следующим: (i - 1) / 2. Эти шаблоны будут выполняться, поскольку бинарное дерево растет до любого размера. Наконец, мы можем сделать небольшую корректировку, чтобы сделать эту арифметику еще проще, пропустив первый элемент в массиве. Для этого создается следующее отношение для любого элемента в указанном индексе i: Пример Array: <code>[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]</code> Левый дочерний элемент: i * 2 Правильный дочерний элемент : i * 2 + 1 Родитель элемента: i / 2 После того, как вы обернете свою голову вокруг математики, использование представления массива очень полезно, потому что расположение узлов можно быстро определить с помощью этой арифметики, а использование памяти уменьшилось, потому что вам не нужно для поддержки ссылок на дочерние узлы. Инструкции: Здесь мы создадим максимальную кучу. Начните с создания метода insert, который добавляет элементы в нашу кучу. При вставке важно всегда сохранять свойство кучи. Для максимальной кучи это означает, что корневой элемент всегда должен иметь наибольшее значение в дереве, а все родительские узлы должны быть больше, чем их дети. Для реализации массива кучи это правило выполняется в три этапа: добавьте новый элемент в конец массива. Если элемент больше, чем его родители, переключите их. Продолжайте переключение до тех пор, пока новый элемент не станет меньше его родителя или вы не достигнете корня дерева. Наконец, добавьте метод печати, который возвращает массив всех элементов, которые были добавлены в кучу.
</section>

## Instructions
<section id='instructions'>
Instructions: Here we will create a max heap. Start by just creating an insert method which adds elements to our heap. During insertion, it is important to always maintain the heap property. For a max heap this means the root element should always have the greatest value in the tree and all parent nodes should be greater than their children. For an array implementation of a heap, this is typically accomplished in three steps:
Add the new element to the end of the array.
If the element is larger than its parents, switch them.
Continue switching until the new element is either smaller than its parent or you reach the root of the tree.
Finally, add a print method which returns an array of all the items that have been added to the heap.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The MaxHeap data structure exists.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})());
  - text: MaxHeap has a method called insert.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MaxHeap has a method called print.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.print == 'function')})());
  - text: The insert method adds elements according to the max heap property.
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== ''undefined'') { test = new MaxHeap() } else { return false; }; test.insert(50); test.insert(100); test.insert(700); test.insert(32); test.insert(51); let result = test.print(); return ((result.length == 5) ? result[0] == 700 : result[1] == 700) })());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var MaxHeap = function() {
  // change code below this line
  // change code above this line
};

```

</div>

</section>

## Solution
<section id='solution'>

```js
var MaxHeap = function() {
    // change code below this line
    this.heap = [undefined];
    this.insert = (ele) => {
        var index = this.heap.length;
        var arr = [...this.heap];
        arr.push(ele);
        while (ele > arr[Math.floor(index / 2)]) {
            arr[index] = arr[Math.floor(index / 2)];
            arr[Math.floor(index / 2)] = ele;
            index = arr[Math.floor(index / 2)];
        }
        this.heap = arr;
    }
    this.print = () => {
        return this.heap
    }
    // change code above this line
};
```

</section>
