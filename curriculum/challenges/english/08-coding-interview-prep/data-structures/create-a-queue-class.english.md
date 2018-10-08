---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
---

## Description
<section id='description'>
Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.
We could use an array to represent a queue, but just like stacks, we want to limit the amount of control we have over our queues.
The two main methods of a queue class is the enqueue and the dequeue method. The enqueue method pushes an element to the tail of the queue, and the dequeue method removes and returns the element at the front of the queue. Other useful methods are the front, size, and isEmpty methods.
Instructions
Write an enqueue method that pushes an element to the tail of the queue, a dequeue method that removes and returns the front element, a front method that lets us see the front element, a size method that shows the length, and an isEmpty method to check if the queue is empty.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Queue</code> class should have a <code>enqueue</code> method.
    testString: 'assert((function(){var test = new Queue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: Your <code>Queue</code> class should have a <code>dequeue</code> method.
    testString: 'assert((function(){var test = new Queue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: Your <code>Queue</code> class should have a <code>front</code> method.
    testString: 'assert((function(){var test = new Queue();  return (typeof test.front === "function")}()), "Your <code>Queue</code> class should have a <code>front</code> method.");'
  - text: Your <code>Queue</code> class should have a <code>size</code> method.
    testString: 'assert((function(){var test = new Queue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: Your <code>Queue</code> class should have an <code>isEmpty</code> method.
    testString: 'assert((function(){var test = new Queue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: The <code>dequeue</code> method should remove and return the front element of the queue
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.dequeue() === "Smith")}()), "The <code>dequeue</code> method should remove and return the front element of the queue");'
  - text: The <code>front</code> method should return value of the front element of the queue
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); test.enqueue("John"); return (test.front() === "Smith")}()), "The <code>front</code> method should return value of the front element of the queue");'
  - text: The <code>size</code> method should return the length of the queue
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return (test.size() === 1)}()), "The <code>size</code> method should return the length of the queue");'
  - text: The <code>isEmpty</code> method should return <code>false</code> if there are elements in the queue
    testString: 'assert((function(){var test = new Queue();  test.enqueue("Smith"); return !(test.isEmpty())}()), "The <code>isEmpty</code> method should return <code>false</code> if there are elements in the queue");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue () {
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
// solution required
```
</section>
