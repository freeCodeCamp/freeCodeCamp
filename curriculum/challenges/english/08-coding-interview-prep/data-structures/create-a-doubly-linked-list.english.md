---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
challengeType: 1
---

## Description
<section id='description'>
All of the linked lists we've created so far are singly linked lists. Here, we'll create a <dfn>doubly linked list</dfn>. As the name implies, nodes in a doubly linked list have references to the next and previous node in the list.
This allows us to traverse the list in both directions but it also requires more memory to be used because every node must contain an additional reference to the previous node in the list.
</section>

## Instructions
<section id='instructions'>
We've provided a <code>Node</code> object and started our <code>DoublyLinkedList</code>. Let's add two methods to our doubly linked list called <code>add</code> and <code>remove</code>. The <code>add</code> method should add the given element to the list while the <code>remove</code> method should remove all occurrences of a given element in the list.
Be careful to handle any possible edge cases when writing these methods, such as deletions for the first or last element. Also, removing any item on an empty list should return <code>null</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The DoublyLinkedList data structure exists.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})(), 'The DoublyLinkedList data structure exists.');
  - text: The DoublyLinkedList has a method called add.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})(), 'The DoublyLinkedList has a method called add.');
  - text: The DoublyLinkedList has a method called remove.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == 'function')})(), 'The DoublyLinkedList has a method called remove.');
  - text: Removing an item from an empty list returns null.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.remove(100) == null); })(), 'Removing an item from an empty list returns null.');
  - text: The add method adds items to the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return (test.print().join('') == '56723'); })(), 'The add method adds items to the list.');
  - text: Each node keeps track of the previous node.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return (test.printReverse().join('') == '736850'); })(), 'Each node keeps track of the previous node.');
  - text: The first item can be removed from the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( test.print().join('') == '3560' ) })(), 'The first item can be removed from the list.');
  - text: The last item can be removed from the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(60); return ( test.print().join('') == '2535' ) })(), 'The last item can be removed from the list.');

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
