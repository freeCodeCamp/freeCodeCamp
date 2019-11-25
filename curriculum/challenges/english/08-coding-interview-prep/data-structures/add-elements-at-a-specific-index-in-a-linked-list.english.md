---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
forumTopicId: 301619
---

## Description
<section id='description'>

Let's create an <code>addAt(index, element)</code> method that adds an element at a given index.
Just like how we remove elements at a given index, we need to keep track of the currentIndex as we traverse the linked list. When the currentIndex matches the given index, we would need to reassign the previous node's next property to reference the new added node. And the new node should reference the next node in the currentIndex.
Returning to the conga line example, a new person wants to join the line, but he wants to join in the middle. You are in the middle of the line, so you take your hands off of the person ahead of you. The new person walks over and puts his hands on the person you once had hands on, and you now have your hands on the new person.
</section>

## Instructions
<section id='instructions'>

Create an <code>addAt(index, element)</code> method that adds an element at a given index. Return false if an element could not be added.
<strong>Note:</strong> Remember to check if the given index is a negative or is longer than the length of the linked list.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.addAt(0,'cat'); return test.head.element === 'cat'}()));
  - text: Your <code>addAt</code> method should increase the <code>size</code> of the linked list by one for each new node added to the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.addAt(0,'cat'); return test.size === 3}()));
  - text: Your <code>addAt</code> method should return <code>false</code> if a node was unable to be added.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return (test.addAt(4,'cat') === false); }()));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  add(element){
    if (this.head === null) {
      this.head = new Node(element);
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    this.size++;
  }

  remove(element) {
    let previous;
    let currentNode = this.head;

    while (currentNode !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return;
    } else if (previous) {
      previous.next = currentNode.next;
    } else {
      this.head = currentNode.next;
    }

    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }

  indexOf(element) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null && currentNode.element !== element) {
      currentNode = currentNode.next;
      index++;
    }

    if (currentNode === null) {
      return -1;
    }

    return index;
  }

  elementAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.element;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let previousNode;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode) {
      previousNode.next = currentNode.next;
    } else {
      this.head = currentNode.next;
    }
    this.size--;

    return currentNode.element;
  }
  // Add addAt method here

}
```

</div>
</section>

## Solution
<section id='solution'>

```js
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  add(element){
    if (this.head === null) {
      this.head = new Node(element);
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    this.size++;
  }

  remove(element) {
    let previous;
    let currentNode = this.head;

    while (currentNode !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) {
      return;
    } else if (previous) {
      previous.next = currentNode.next;
    } else {
      this.head = currentNode.next;
    }

    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }

  indexOf(element) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null && currentNode.element !== element) {
      currentNode = currentNode.next;
      index++;
    }

    if (currentNode === null) {
      return -1;
    }

    return index;
  }

  elementAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode.element;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let previousNode;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (previousNode) {
      previousNode.next = currentNode.next;
    } else {
      this.head = currentNode.next;
    }
    this.size--;

    return currentNode.element;
  }

  addAt(index, element) {
    if (index < 0 || index >= this.size) {
      return false;
    }

    let previousNode;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const newNode = new Node(element);
    newNode.next = currentNode;

    if (previousNode) {
      previousNode.next = newNode;
    } else {
      this.head = newNode
    }
    this.size++;
  }
}
```

</section>
