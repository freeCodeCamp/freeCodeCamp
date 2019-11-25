---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
forumTopicId: 301715
---

## Description
<section id='description'>
Let's add a few more useful methods to our linked list class. Wouldn't it be useful if we could tell if our list was empty or not, as with our <code>Stack</code> and <code>Queue</code> classes?
We should also be able to find specific elements in our linked list. Traversing through data structures is something you'll want to get a lot of practice with! Let's create an <code>indexOf</code> method that takes an <code>element</code> as an argument, and returns that element's <code>index</code> in the linked list. If the element is not found in the linked list, return <code>-1</code>.
Let's also implement a method that does the opposite: an <code>elementAt</code> method that takes an <code>index</code> as an argument and returns the <code>element</code> at the given <code>index</code>. If no <code>element</code> is found, return <code>undefined</code>.
</section>

## Instructions
<section id='instructions'>
Write an <code>isEmpty</code> method that checks if the linked list is empty, an <code>indexOf</code> method that returns the <code>index</code> of a given element, and an <code>elementAt</code> that returns an <code>element</code> at a given <code>index</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>indexOf</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.indexOf === 'function')}()));
  - text: Your <code>LinkedList</code> class should have a <code>elementAt</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.elementAt === 'function')}()));
  - text: Your <code>size</code> method should return the size of the linked list
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.size === 3}()));
  - text: Your <code>indexOf</code> method should return the index of the given element.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.indexOf('kitten') === 2}()));
  - text: Your <code>elementAt</code> method should return at element at a given index.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.elementAt(1) === 'dog'}()));

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
  // Add isEmpty method here

  // Add indexOf method here

  // Add elementAt method here

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
}
```

</section>
