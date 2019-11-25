---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
challengeType: 1
forumTopicId: 301626
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
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})());
  - text: The DoublyLinkedList has a method called add.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})());
  - text: The DoublyLinkedList has a method called remove.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == 'function')})());
  - text: Removing an item from an empty list returns null.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return ( test.remove(100) == null ); })());
  - text: The add method adds items to the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return ( print(test) == '5,6,723' ); })());
  - text: Each node keeps track of the previous node.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return ( printReverse(test) == '73,68,50' ); })());
  - text: The first item can be removed from the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( print(test) == '35,60' ) })());
  - text: The last item can be removed from the list.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(60); return ( print(test) == '25,35' ) })());
  - text: The removed method removes all items that match.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(25); test.remove(25); return ( print(test) == '35' ) })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // Add add method here

  // Add remove method here

}
```

</div>


### After Test
<div id='js-teardown'>

```js
function print(list) {
  if (list.head === null) {
    return null;
  }
  const result = [];
  let node = list.head;
  while (node !== null) {
    result.push(node.data);
    node = node.next;
  }
  return result.join(',');
}
function printReverse(list) {
  if (list.tail === null) {
    return null;
  }
  const result = [];
  let node = list.tail;
  while (node !== null) {
    result.push(node.data);
    node = node.prev;
  }
  return result.join(',');
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const newNode = new Node(data, null);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  remove(data) {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        if (this.head === currentNode) {
          this.head = currentNode.next;
        } else {
          currentNode.prev.next = currentNode.next;
        }

        if (this.tail === currentNode) {
          this.tail = currentNode.prev;
        } else {
          currentNode.next.prev = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
  }
}
```

</section>
