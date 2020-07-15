---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
isHidden: false
forumTopicId: 301631
---

## Description
<section id='description'>
Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.
We could use an array to represent a queue, but just like stacks, we want to limit the amount of control we have over our queues.
The two main methods of a queue class is the enqueue and the dequeue method. The enqueue method pushes an element to the tail of the queue, and the dequeue method removes and returns the element at the front of the queue. Other useful methods are the front, size, and isEmpty methods.
</section>

## Instructions
<section id='instructions'>
Write an <code>enqueue</code> method that pushes an element to the tail of the queue, a <code>dequeue</code> method that removes and returns the front element, a <code>front</code> method that lets us see the front element, a <code>size</code> method that shows the length, and an <code>isEmpty</code> method to check if the queue is empty.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Queue</code> class should have a <code>enqueue</code> method.
    testString: assert((function(){var test = new Queue();  return (typeof test.enqueue === 'function')}()));
  - text: Your <code>Queue</code> class should have a <code>dequeue</code> method.
    testString: assert((function(){var test = new Queue();  return (typeof test.dequeue === 'function')}()));
  - text: Your <code>Queue</code> class should have a <code>front</code> method.
    testString: assert((function(){var test = new Queue();  return (typeof test.front === 'function')}()));
  - text: Your <code>Queue</code> class should have a <code>size</code> method.
    testString: assert((function(){var test = new Queue();  return (typeof test.size === 'function')}()));
  - text: Your <code>Queue</code> class should have an <code>isEmpty</code> method.
    testString: assert((function(){var test = new Queue();  return (typeof test.isEmpty === 'function')}()));
  - text: The <code>dequeue</code> method should remove and return the front element of the queue
    testString: assert((function(){var test = new Queue();  test.enqueue('Smith'); test.enqueue('John'); return (test.dequeue() === 'Smith')}()));
  - text: The <code>front</code> method should return value of the front element of the queue
    testString: assert((function(){var test = new Queue();  test.enqueue('Smith'); test.enqueue('John'); return (test.front() === 'Smith')}()));
  - text: The <code>size</code> method should return the length of the queue
    testString: assert((function(){var test = new Queue();  test.enqueue('Smith'); return (test.size() === 1)}()));
  - text: The <code>isEmpty</code> method should return <code>false</code> if there are elements in the queue
    testString: assert((function(){var test = new Queue();  test.enqueue('Smith'); return !(test.isEmpty())}()));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
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
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0 ? true : false;
    }
    // Only change code above this line
}
```

</section>
