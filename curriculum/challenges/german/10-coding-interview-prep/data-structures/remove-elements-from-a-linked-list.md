---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

The next important method that any implementation of a linked list will need is a `remove` method. This method should take the element we want to remove as an argument, and then search the list to find and remove the node that contains that element.

Whenever we remove a node from a linked list, it's important that we don't accidentally orphan the rest of the list in doing so. Recall that every node's `next` property points to the node that follows it in the list. If we're removing the middle element, say, we'll want to make sure that we have a connection from that element's previous node's `next` property to the middle element's `next` property (which is the next node in the list!)

This might sound really confusing, so let's return to the conga line example so we have a good conceptual model. Picture yourself in a conga line, and the person directly in front of you leaves the line. The person who just left the line no longer has her hands on anyone in line--and you no longer have your hands on the person that left. You step forward and put your hands on next person you see.

If the element we wish to remove is the `head` element, we reassign the `head` to the second node of the linked list.

# --instructions--

Write a `remove` method that takes an element and removes it from the linked list.

**Note:** The `length` of the list should decrease by one every time an element is removed from the linked list.

# --hints--

Your `LinkedList` class should have a `remove` method.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

Your `remove` method should reassign `head` to the second node when the first node is removed.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.remove('cat');
    return test.head().element === 'dog';
  })()
);
```

Your `remove` method should decrease the `length` of the linked list by one for every node removed.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('hamster');
    test.remove('cat');
    test.remove('fish');
    return test.size() === 2;
  })()
);
```

Your `remove` method should reassign the reference of the previous node of the removed node to the removed node's `next` reference.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('snake');
    test.add('kitten');
    test.remove('snake');
    return test.head().next.next.element === 'kitten';
  })()
);
```

Your `remove` method should not change the linked list if the element does not exist in the linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.remove('elephant');
    return (
      JSON.stringify(test.head()) ===
      '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
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

  this.size = function(){
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

  this.size = function(){
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
    if (head === null) {
      return;
    }
    var previous;
    var currentNode = head;

    while (currentNode.next !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.next === null && currentNode.element !== element) {
      return;
    }
    else if (previous) {
      previous.next = currentNode.next;
    } else {
      head = currentNode.next;
    }

    length--;
  };
} 
```
