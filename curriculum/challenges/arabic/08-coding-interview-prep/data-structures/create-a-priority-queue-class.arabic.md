---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.enqueue === "function")}()), "Your <code>Queue</code> class should have a <code>enqueue</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.dequeue === "function")}()), "Your <code>Queue</code> class should have a <code>dequeue</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.size === "function")}()), "Your <code>Queue</code> class should have a <code>size</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new PriorityQueue();  return (typeof test.isEmpty === "function")}()), "Your <code>Queue</code> class should have an <code>isEmpty</code> method.");'
  - text: ''
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["David Brown", 2]); test.enqueue(["Jon Snow", 1]); var size1 = test.size(); test.dequeue(); var size2 = test.size(); test.enqueue(["A", 3]); test.enqueue(["B", 3]); test.enqueue(["C", 3]); return (size1 === 2 && size2 === 1 && test.size() === 4)}()), "Your PriorityQueue should correctly keep track of the current number of items using the <code>size</code> method as items are enqueued and dequeued.");'
  - text: ''
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 1]); test.enqueue(["B", 1]); test.dequeue(); var first = test.isEmpty(); test.dequeue(); return (!first && test.isEmpty()); }()), "The <code>isEmpty</code> method should return <code>true</code> when the queue is empty.");'
  - text: ''
    testString: 'assert((function(){var test = new PriorityQueue(); test.enqueue(["A", 5]); test.enqueue(["B", 5]); test.enqueue(["C", 5]); test.enqueue(["D", 3]); test.enqueue(["E", 1]); test.enqueue(["F", 7]); var result = []; result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); return result.join("") === "EDABCF";}()), "The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
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
