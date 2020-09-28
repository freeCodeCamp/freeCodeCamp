---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
challengeType: 1
forumTopicId: 301643
localeTitle: Выполнение сортировки кучи с помощью Min Heap
---

## Description
<section id='description'>
Теперь, когда мы можем добавлять и удалять элементы, давайте посмотрим, как можно использовать некоторые кучи приложений. Кучи обычно используются для реализации очередей приоритетов, поскольку они всегда хранят элемент наибольшего или наименьшего значения в первой позиции. Кроме того, они используются для реализации алгоритма сортировки, называемого сортировкой кучи. Посмотрим, как это сделать. Сортировка кучи использует минимальную кучу, обратную к максимальной куче. Минимальная куча всегда сохраняет элемент наименьшего значения в корневой позиции. Heap sort работает, беря несортированный массив, добавляя каждый элемент в массив в кучу минут, а затем извлекает каждый элемент из кучи min в новый массив. Структура минимальной кучи гарантирует, что новый массив будет содержать исходные элементы по крайней мере до наибольшего порядка. Это один из наиболее эффективных алгоритмов сортировки со средней и наихудшей производительностью O (nlog (n)). Инструкции: Давайте реализуем кучу сортировки с минимальной кучей. Не стесняйтесь адаптировать свой максимальный код кучи. Создайте объект MinHeap с помощью методов вставки, удаления и сортировки. Метод sort должен возвращать массив из всех элементов в куче минимальной сортировки от минимального до самого большого.
</section>

## Instructions
<section id='instructions'>
Let's implement heap sort with a min heap. Feel free to adapt your max heap code here. Create an object <code>MinHeap</code> with <code>insert</code>, <code>remove</code>, and <code>sort</code> methods. The <code>sort</code> method should return an array of all the elements in the min heap sorted from smallest to largest.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The MinHeap data structure exists.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() }; return (typeof test == 'object')})());
  - text: MinHeap has a method called insert.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MinHeap has a method called remove.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: MinHeap has a method called sort.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.sort == 'function')})());
  - text: The sort method returns an array containing all items added to the min heap in sorted order.
    testString: assert((function() { var test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; test.insert(3); test.insert(12); test.insert(5); test.insert(10); test.insert(1); test.insert(27); test.insert(42); test.insert(57); test.insert(5); var result = test.sort(); return (isSorted(result)); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// check if array is sorted
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
  // change code below this line
  // change code above this line
};

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
