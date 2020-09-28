---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
forumTopicId: 301710
localeTitle: Удалить элемент из максимальной кучи
---

## Description
<section id='description'>
Теперь, когда мы можем добавить элементы в нашу кучу, посмотрим, как мы можем удалить элементы. Для снятия и вставки элементов требуется аналогичная логика. В максимальной куче вы обычно хотите удалить наибольшую ценность, поэтому это требует просто извлечь ее из корня нашего дерева. Это разрушит свойство кучи нашего дерева, поэтому мы должны каким-то образом восстановить его. Как правило, для максимальной кучи это делается следующим образом: переместите последний элемент в куче в корневую позицию. Если любой корень корня больше, чем он, замените корень с дочерним значением большего значения. Продолжайте замену, пока родитель больше, чем оба ребенка, или вы достигнете последнего уровня в дереве. Инструкции: добавьте метод в нашу максимальную кучу, называемую remove. Этот метод должен вернуть наибольшее значение, которое было добавлено в нашу максимальную кучу и удалить его из кучи. Он также должен изменить порядок кучи, чтобы сохранить свойство кучи. После удаления элемента следующий главный элемент, оставшийся в куче, должен стать корнем. Здесь также добавьте свой метод вставки.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The MaxHeap data structure exists.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})());
  - text: MaxHeap has a method called print.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.print == 'function')})());
  - text: MaxHeap has a method called insert.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MaxHeap has a method called remove.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: The remove method removes the greatest element from the max heap while maintaining the max heap property.
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; test.insert(30); test.insert(300); test.insert(500); test.insert(10); let result = []; result.push(test.remove()); result.push(test.remove()); result.push(test.remove()); result.push(test.remove());  return (result.join('') == '5003003010') })());

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
// solution required
```

</section>
