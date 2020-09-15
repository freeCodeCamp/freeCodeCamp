---
id: 587d825a367417b2b2512c88
title: Reverse a Doubly Linked List
challengeType: 1
forumTopicId: 301714
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
  - text: The DoublyLinkedList data structure should exist.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})());
  - text: The DoublyLinkedList should have a method called reverse.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == 'function')})());
  - text: Reversing an empty list should return null.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.reverse() == null); })());
  - text: The reverse method should reverse the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join('') == '326158'); })());
  - text: The next and previous references should be correctly maintained when a list is reversed.
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
  // Only change code below this line
  
  // Only change code above this line
};
```

</div>


### After Test
<div id='js-teardown'>

```js
DoublyLinkedList.prototype = Object.assign(
  DoublyLinkedList.prototype,
  {
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
  }
);
```

</div>

</section>

## Solution
<section id='solution'>

```js
  var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;

    this.reverse = function() {
      if (!this.head || !this.head.next) {
        return this.head
      }

      let tail;
      let temp;
      let current = this.head;
      while(current !== null) {
        if(!tail) tail = current;
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }

      this.head = temp.prev;
      this.tail = tail
    }
  };
```

</section>
