---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
challengeType: 1
videoUrl: ''
localeTitle: Создать двойной список
---

## Description
<section id="description"> Все связанные списки, которые мы создали до сих пор, представляют собой отдельные списки. Здесь мы создадим <dfn>двусвязный список</dfn> . Как следует из названия, узлы в двусвязном списке имеют ссылки на следующий и предыдущий узел в списке. Это позволяет нам перемещаться по списку в обоих направлениях, но для этого требуется больше памяти, потому что каждый узел должен содержать дополнительную ссылку на предыдущий узел в списке. </section>

## Instructions
<section id="instructions"> Мы предоставили объект <code>Node</code> и запустили наш <code>DoublyLinkedList</code> . Давайте добавим два метода в наш дважды связанный список, называемый <code>add</code> и <code>remove</code> . <code>add</code> метод должен добавить данный элемент в список , а <code>remove</code> метод должен удалить все вхождения данного элемента в списке. Будьте внимательны при обработке этих возможных случаев, например, для удаления первого или последнего элемента. Кроме того, удаление любого элемента в пустом списке должно возвращать значение <code>null</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Существует структура данных DoublyLinkedList.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (typeof test == "object")})(), "The DoublyLinkedList data structure exists.");'
  - text: 'У DoublyLinkedList есть метод, называемый add.'
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == "function")})(), "The DoublyLinkedList has a method called add.");'
  - text: 'У DoublyLinkedList есть метод, называемый remove.'
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == "function")})(), "The DoublyLinkedList has a method called remove.");'
  - text: Удаление элемента из пустого списка возвращает null.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (test.remove(100) == null); })(), "Removing an item from an empty list returns null.");'
  - text: Метод добавления добавляет элементы в список.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return (test.print().join("") == "56723"); })(), "The add method adds items to the list.");'
  - text: Каждый узел отслеживает предыдущий узел.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return (test.printReverse().join("") == "736850"); })(), "Each node keeps track of the previous node.");'
  - text: Первый элемент можно удалить из списка.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( test.print().join("") == "3560" ) })(), "The first item can be removed from the list.");'
  - text: Последний элемент можно удалить из списка.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(60); return ( test.print().join("") == "2535" ) })(), "The last item can be removed from the list.");'

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
