---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
---

## Description
<section id='description'>
Let's add a few more useful methods to our linked list class. Wouldn't it be useful if we could tell if our list was empty or not, as with our <code>Stack</code> and <code>Queue</code> classes?
We should also be able to find specific elements in our linked list. Traversing through data structures is something you'll want to get a lot of practice with! Let's create an <code>indexOf</code> method that takes an <code>element</code> as an argument, and returns that element's <code>index</code> in the linked list. If the element is not found in the linked list, return <code>-1</code>.
Let's also implement a method that does the opposite: an <code>elementAt</code> method that takes an <code>index</code> as an argument and returns the <code>element</code> at the given <code>index</code>. If no <code>element</code> is found, return <code>undefined</code>.
</section>

## Instructions
<section id='instructions'>
Write an <code>isEmpty</code> method that checks if the linked list is empty, an <code>indexOf</code> method that returns the <code>index</code> of a given element, and an <code>elementAt</code> that returns an <code>element</code> at a given <code>index.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>indexOf</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.indexOf === 'function')}()), 'Your <code>LinkedList</code> class should have a <code>indexOf</code> method.');
  - text: Your <code>LinkedList</code> class should have a <code>elementAt</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.elementAt === 'function')}()), 'Your <code>LinkedList</code> class should have a <code>elementAt</code> method.');
  - text: Your <code>size</code> method should return the length of the linked list
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.size() === 3}()), 'Your <code>size</code> method should return the length of the linked list');
  - text: Your <code>indexOf</code> method should return the index of the given element.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.indexOf('kitten') === 2}()), 'Your <code>indexOf</code> method should return the index of the given element.');
  - text: Your <code>elementAt</code> method should return at element at a given index.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.elementAt(1) === 'dog'}()), 'Your <code>elementAt</code> method should return at element at a given index.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
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
        currentNode = head;

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

  // Only change code below this line

  // Only change code above this line
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
