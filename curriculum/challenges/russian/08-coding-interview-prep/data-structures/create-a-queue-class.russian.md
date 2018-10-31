---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
videoUrl: ''
localeTitle: Создание класса очереди
---

## Description
<section id="description"> Как и стеки, очереди представляют собой набор элементов. Но, в отличие от стеков, очереди следуют принципу FIFO (First-In First-Out). Элементы, добавленные в очередь, помещаются в хвост или конец очереди, и только элемент в передней части очереди разрешен для удаления. Мы могли бы использовать массив для представления очереди, но точно так же, как стеки, мы хотим ограничить количество контроля над нашими очередями. Двумя основными методами класса очереди являются метод enqueue и dequeue. Метод enqueue подталкивает элемент к хвосту очереди, а метод dequeue удаляет и возвращает элемент в передней части очереди. Другими полезными методами являются методы front, size и isEmpty. Инструкции. Напишите метод enqueue, который подталкивает элемент к хвосту очереди, метод dequeue, который удаляет и возвращает передний элемент, передний метод, который позволяет нам видеть передний элемент, метод размера, который показывает длину, и метод isEmpty чтобы проверить, пуста ли очередь. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>Queue</code> должен иметь метод <code>enqueue</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: Класс <code>Queue</code> должен иметь метод <code>dequeue</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: Класс <code>Queue</code> должен иметь <code>front</code> метод.
    testString: 'assert((function(){var test = new Queue();  return (typeof test.front === "function")}()), "Your <code>Queue</code> class should have a <code>front</code> method.");'
  - text: Класс <code>Queue</code> должен иметь метод <code>size</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: Класс <code>Queue</code> должен иметь метод <code>isEmpty</code> .
    testString: 'assert((function(){var test = new Queue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: Метод <code>dequeue</code> должен удалять и возвращать передний элемент очереди
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.dequeue() === "Smith")}()), "The <code>dequeue</code> method should remove and return the front element of the queue");'
  - text: ''
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); test.enqueue("John"); return (test.front() === "Smith")}()), "The <code>front</code> method should return value of the front element of the queue");'
  - text: Метод <code>size</code> должен возвращать длину очереди
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.size() === 1)}()), "The <code>size</code> method should return the length of the queue");'
  - text: Метод <code>isEmpty</code> должен возвращать <code>false</code> если в очереди есть элементы
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return !(test.isEmpty())}()), "The <code>isEmpty</code> method should return <code>false</code> if there are elements in the queue");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue () {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    // Only change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
