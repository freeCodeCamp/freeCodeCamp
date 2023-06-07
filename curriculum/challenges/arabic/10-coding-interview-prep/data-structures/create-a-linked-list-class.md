---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
forumTopicId: 301628
dashedName: create-a-linked-list-class
---

# --description--

Let's create a `linked list` class. Every linked list should start out with a few basic properties: a `head` (the first item in your list) and a `length` (number of items in your list). Sometimes you'll see implementations of linked lists that incorporate a `tail` for the last element of the list, but for now we'll just stick with these two. Whenever we add an element to the linked list, our `length` property should be incremented by one.

We'll want to have a way to add items to our linked list, so the first method we'll want to create is the `add` method.

If our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a `Node` class, and we assign that node to the `head` of our linked list.

But what if our list already has one or more members? How do we add an element to the list? Recall that each node in a linked list has a `next` property. To add a node to the list, find the last node in the list, and point that last node's `next` property at our new node. (Hint: you know you've reached the end of a linked list when a node's `next` property is `null`.)

# --instructions--

Write an add method that assigns the first node you push to the linked list to the `head`; after that, whenever adding a node, every node should be referenced by the previous node's `next` property.

Note

Your list's `length` should increase by one every time an element is added to the linked list.

# --hints--

Your `LinkedList` class should have a `add` method.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

Your `LinkedList` class should assign `head` to the first node added.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

The previous `node` in your `LinkedList` class should have reference to the newest node created.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('fish');
    return test.head().next.element === 'dog' && test.head().next.next.element === 'fish';
  })()
);
```

The  `size` of your `LinkedList` class should equal the amount of nodes in the linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.size() === 2;
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line

    // Only change code above this line
  };
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    if (head == null) {
      head = new Node(element);
    } 
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        // currentNode.next will be last node of linked list after loop
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // Only change code above this line
  };
}
```
