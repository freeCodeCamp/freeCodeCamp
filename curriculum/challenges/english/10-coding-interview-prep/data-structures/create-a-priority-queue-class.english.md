---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
challengeType: 1
forumTopicId: 301630
---

## Description
<section id='description'>
In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.
For instance, let’s imagine we have a priority queue with three items:
<code>[['kitten', 2], ['dog', 2], ['rabbit', 2]]</code>
Here the second value (an integer) represents item priority. If we enqueue <code>['human', 1]</code> with a priority of <code>1</code> (assuming lower priorities are given precedence) it would then be the first item to be dequeued. The collection would look like this:
<code>[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]</code>.
We’ve started writing a <code>PriorityQueue</code> in the code editor. You will need to add an <code>enqueue</code> method for adding items with a priority, a <code>dequeue</code> method for removing and returning items, a <code>size</code> method to return the number of items in the queue, a <code>front</code> method to return the element at the front of the queue, and finally an <code>isEmpty</code> method that will return <code>true</code> if the queue is empty or <code>false</code> if it is not.
The <code>enqueue</code> should accept items with the format shown above (<code>['human', 1]</code>) where <code>1</code> represents the priority. <code>dequeue</code> and <code>front</code> should return only the item's name, not its priority.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>PriorityQueue</code> class should have a <code>enqueue</code> method.
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.enqueue === 'function')}()));
  - text: Your <code>PriorityQueue</code> class should have a <code>dequeue</code> method.
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.dequeue === 'function')}()));
  - text: Your <code>PriorityQueue</code> class should have a <code>size</code> method.
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.size === 'function')}()));
  - text: Your <code>PriorityQueue</code> class should have a <code>front</code> method.
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.front === 'function')}()));
  - text: Your <code>PriorityQueue</code> class should have an <code>isEmpty</code> method.
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.isEmpty === 'function')}()));
  - text: Your <code>PriorityQueue</code> class should correctly keep track of the current number of items using the <code>size</code> method as items are enqueued and dequeued.
    testString: assert((function(){var test = new PriorityQueue(); test.enqueue(['David Brown', 2]); test.enqueue(['Jon Snow', 1]); var size1 = test.size(); test.dequeue(); var size2 = test.size(); test.enqueue(['A', 3]); test.enqueue(['B', 3]); test.enqueue(['C', 3]); return (size1 === 2 && size2 === 1 && test.size() === 4)}()));
  - text: The <code>front</code> method should return the correct item at the front of the queue as items are enqueued and dequeued.
    testString: assert((function(){var test = new PriorityQueue(); test.enqueue(["David Brown", 2]); var front1 = test.front(); test.enqueue(["Jon Snow", 1]); var front2 = test.front(); test.dequeue(); test.enqueue(["A", 3]); var front3 = test.front(); test.enqueue(["B", 3]); test.enqueue(["C", 3]); test.dequeue(); var front4 = test.front(); return (front1 === "David Brown" && front2 === "Jon Snow" && front3 === "David Brown" && front4 === "A");})());
  - text: The <code>isEmpty</code> method should return <code>true</code> when the queue is empty.
    testString: assert((function(){var test = new PriorityQueue(); test.enqueue(['A', 1]); test.enqueue(['B', 1]); test.dequeue(); var first = test.isEmpty(); test.dequeue(); return (!first && test.isEmpty()); }()));
  - text: The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.
    testString: assert((function(){var test = new PriorityQueue(); test.enqueue(['A', 5]); test.enqueue(['B', 5]); test.enqueue(['C', 5]); test.enqueue(['D', 3]); test.enqueue(['E', 1]); test.enqueue(['F', 7]); var result = []; result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); return result.join('') === 'EDABCF';}()));

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
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}
```

</section>
