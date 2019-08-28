---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
challengeType: 1
forumTopicId: 301626
localeTitle: Создать двойной список
---

## Description
<section id='description'>
Все связанные списки, которые мы создали до сих пор, представляют собой отдельные списки. Здесь мы создадим <dfn>двусвязный список</dfn> . Как следует из названия, узлы в двусвязном списке имеют ссылки на следующий и предыдущий узел в списке. Это позволяет нам перемещаться по списку в обоих направлениях, но для этого требуется больше памяти, потому что каждый узел должен содержать дополнительную ссылку на предыдущий узел в списке.
</section>

## Instructions
<section id='instructions'>
Мы предоставили объект <code>Node</code> и запустили наш <code>DoublyLinkedList</code> . Давайте добавим два метода в наш дважды связанный список, называемый <code>add</code> и <code>remove</code> . <code>add</code> метод должен добавить данный элемент в список , а <code>remove</code> метод должен удалить все вхождения данного элемента в списке. Будьте внимательны при обработке этих возможных случаев, например, для удаления первого или последнего элемента. Кроме того, удаление любого элемента в пустом списке должно возвращать значение <code>null</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The DoublyLinkedList data structure exists.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})());
  - text: The DoublyLinkedList has a method called add.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})());
  - text: The DoublyLinkedList has a method called remove.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == 'function')})());
  - text: Removing an item from an empty list returns null.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.remove(100) == null); })());
  - text: The add method adds items to the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return (test.print().join('') == '56723'); })());
  - text: Each node keeps track of the previous node.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return (test.printReverse().join('') == '736850'); })());
  - text: The first item can be removed from the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( test.print().join('') == '3560' ) })());
  - text: The last item can be removed from the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(60); return ( test.print().join('') == '2535' ) })());

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

### After Tests
<div id='js-teardown'>

```js
DoublyLinkedList.prototype = {
  print() {
    if (this.head == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.head;
      while (node.next != null) {
        result.push(node.data);
        node = node.next;
      };
      result.push(node.data);
      return result;
    };
  },
  printReverse() {
    if (this.tail == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.tail;
      while (node.prev != null) {
        result.push(node.data);
        node = node.prev;
      };
      result.push(node.data);
      return result;
    };
  } 
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
