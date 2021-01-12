---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

Let's add a few more useful methods to our linked list class. Wouldn't it be useful if we could tell if our list was empty or not, as with our `Stack` and `Queue` classes?

We should also be able to find specific elements in our linked list. Traversing through data structures is something you'll want to get a lot of practice with! Let's create an `indexOf` method that takes an `element` as an argument, and returns that element's `index` in the linked list. If the element is not found in the linked list, return `-1`.

Let's also implement a method that does the opposite: an `elementAt` method that takes an `index` as an argument and returns the `element` at the given `index`. If no `element` is found, return `undefined`.

# --instructions--

Write an `isEmpty` method that checks if the linked list is empty, an `indexOf` method that returns the `index` of a given element, and an `elementAt` that returns an `element` at a given `index.`

# --hints--

Your `LinkedList` class should have an `isEmpty` method.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

Your `isEmpty` method should return `false` when there is at least one element in linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.isEmpty() === false;
  })()
);
```

Your `isEmpty` method should return `true` when there are no elements in linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

Your `LinkedList` class should have an `indexOf` method.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

Your `indexOf` method should return the index of a given element found in linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('cat') === 0;
  })()
);
```

Your `indexOf` method should return `-1` if the given element is not found in linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('pony') === -1;
  })()
);
```

Your `LinkedList` class should have an `elementAt` method.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

Your `elementAt` method should return the element found at a given index in linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(1) === 'dog';
  })()
);
```

Your `elementAt` method should return `undefined` if the given element is not found at a given index in linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(5) === undefined;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf = function(element) {
    if (head === null) return -1

    let current = head;
    let index = 0;

    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }

    if (current.element !== element && current.next === null) {
      return -1
    }

    return index;
  }

  this.elementAt = function(index) {
    if (head === null) return undefined;

    let current = head;
    let currentIndex = 0;

    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }

    if (currentIndex !== index && current.next === null) {
      return undefined;
    }

    return current.element;
  }

  this.isEmpty = function() {
    return length === 0;
  }
}
```
