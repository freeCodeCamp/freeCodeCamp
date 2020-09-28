---
id: 587d825a367417b2b2512c88
title: Reverse a Doubly Linked List
challengeType: 1
forumTopicId: 301714
localeTitle: Переверните двойной список ссылок
---

## Description
<section id='description'>
Давайте создадим еще один метод для нашего дважды связанного списка, который называется reverse, который меняет список на месте. Как только метод выполняется, голова должна указывать на предыдущий хвост, а хвост должен указывать на предыдущую голову. Теперь, если мы пересекаем список от головы до хвоста, мы должны встретить узлы в обратном порядке по сравнению с исходным списком. Попытка изменить пустой список должна вернуть значение null.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The DoublyLinkedList data structure exists.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})());
  - text: The DoublyLinkedList has a method called add.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})());
  - text: The DoublyLinkedList has a method called reverse.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == 'function')})());
  - text: Reversing an empty list returns null.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.reverse() == null); })());
  - text: The reverse method reverses the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join('') == '326158'); })());
  - text: The next and previous references are correctly maintained when a list is reversed.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(11); test.add(22); test.add(33); test.reverse(); return (test.printReverse().join('') == '112233'); })());

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
  add(data) {
    if (this.head == null) {
      this.head = new Node(data, null);
      this.tail = this.head;
    } else {
      var node = this.head;
      var prev = null;
      while (node.next != null) {
        prev = node;
        node = node.next;
      };
      var newNode = new Node(data, node);
      node.next = newNode;
      this.tail = newNode;
    };
  },
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
