---
id: 587d825a367417b2b2512c88
title: Reverse a Doubly Linked List
challengeType: 1
---

## Description
<section id='description'>
Let's create one more method for our doubly linked list called reverse which reverses the list in place. Once the method is executed the head should point to the previous tail and the tail should point to the previous head. Now, if we traverse the list from head to tail we should meet the nodes in a reverse order compared to the original list. Trying to reverse an empty list should return null.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The DoublyLinkedList data structure exists.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (typeof test == "object")})(), "The DoublyLinkedList data structure exists.");'
  - text: The DoublyLinkedList has a method called add.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == "function")})(), "The DoublyLinkedList has a method called add.");'
  - text: The DoublyLinkedList has a method called reverse.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == "function")})(), "The DoublyLinkedList has a method called reverse.");'
  - text: Reversing an empty list returns null.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; return (test.reverse() == null); })(), "Reversing an empty list returns null.");'
  - text: The reverse method reverses the list.
    testString: 'assert((function() { var test = false; if (typeof DoublyLinkedList !== "undefined") { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join("") == "326158"); })(), "The reverse method reverses the list.");'
  - text: The next and previous references are correctly maintained when a list is reversed.
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
