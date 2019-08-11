---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
forumTopicId: 301628
---

## Description
<section id='description'>
Let's create a <code>linked list</code> class. Every linked list should start out with a few basic properties: a <code>head</code> (the first item in your list) and a <code>length</code> (number of items in your list). Sometimes you'll see implementations of linked lists that incorporate a <code>tail</code> for the last element of the list, but for now we'll just stick with these two. Whenever we add an element to the linked list, our <code>length</code> property should be incremented by one.
We'll want to have a way to add items to our linked list, so the first method we'll want to create is the <code>add</code> method.
If our list is empty, adding an element to our linked list is straightforward enough: we just wrap that element in a <code>Node</code> class, and we assign that node to the <code>head</code> of our linked list.
But what if our list already has one or more members? How do we add an element to the list? Recall that each node in a linked list has a <code>next</code> property. To add a node to the list, find the last node in the list, and point that last node's <code>next</code> property at our new node. (Hint: you know you've reached the end of a linked list when a node's <code>next</code> property is <code>null</code>.)
</section>

## Instructions
<section id='instructions'>
Write an add method that assigns the first node you push to the linked list to the <code>head</code>; after that, whenever adding a node, every node should be referenced by the previous node's <code>next</code> property.
Note
Your list's <code>length</code> should increase by one every time an element is added to the linked list.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>add</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.add === 'function')}()));
  - text: Your <code>LinkedList</code> class should assign <code>head</code> to the first node added.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); return test.head().element === 'cat'}()));
  - text: The previous <code>node</code> in your <code>LinkedList</code> class should have reference to the newest node created.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return test.head().next.element === 'dog'}()));
  - text: The  <code>size</code> of your <code>LinkedList</code> class should equal the amount of nodes in the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return test.size() === 2}()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>
