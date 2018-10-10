---
id: 587d825a367417b2b2512c88
title: Reverse a Doubly Linked List
challengeType: 1
videoUrl: ''
localeTitle: Переверните двойной список ссылок
---

## Description
<section id="description"> Давайте создадим еще один метод для нашего дважды связанного списка, который называется reverse, который меняет список на месте. Как только метод выполняется, голова должна указывать на предыдущий хвост, а хвост должен указывать на предыдущую голову. Теперь, если мы пересекаем список от головы до хвоста, мы должны встретить узлы в обратном порядке по сравнению с исходным списком. Попытка изменить пустой список должна вернуть значение null. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Существует структура данных DoublyLinkedList.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (typeof test == "object")})(), "The DoublyLinkedList data structure exists.");'
  - text: 'У DoublyLinkedList есть метод, называемый add.'
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == "function")})(), "The DoublyLinkedList has a method called add.");'
  - text: 'У DoublyLinkedList есть метод, называемый обратным.'
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == "function")})(), "The DoublyLinkedList has a method called reverse.");'
  - text: Возврат пустого списка возвращает значение null.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (test.reverse() == null); })(), "Reversing an empty list returns null.");'
  - text: Обратный метод отменяет список.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join("") == "326158"); })(), "The reverse method reverses the list.");'
  - text: Следующая и предыдущая ссылки корректно сохраняются при перестановке списка.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(11); test.add(22); test.add(33); test.reverse(); return (test.printReverse().join("") == "112233"); })(), "The next and previous references are correctly maintained when a list is reversed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  // change code above this line
};

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
