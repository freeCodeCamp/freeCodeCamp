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
Add a method called <code>reverse</code> that reverses the list. Trying to reverse an empty list should return <code>null</code>.
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
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (print(test) == '32,61,58'); })());
  - text: The next and previous references are correctly maintained when a list is reversed.
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(11); test.add(22); test.add(33); test.reverse(); return (printReverse(test) == '11,22,33'); })());

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
  // Add reverse method here

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

  reverse() {
    if (this.head === null) {
      return null;
    }

    [this.head, this.tail] = [this.tail, this.head];
    let currentNode = this.head;
    while (currentNode !== null) {
      [currentNode.next, currentNode.prev] = [currentNode.prev, currentNode.next];
      currentNode = currentNode.next;
    }
  }
}
```

</section>
