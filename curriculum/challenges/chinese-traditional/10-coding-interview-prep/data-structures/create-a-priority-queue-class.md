---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. This could be simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher priority is enqueued after items with lower priority, the higher priority item will be dequeued before all the others.

For instance, let’s imagine we have a priority queue with three items:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

Here the second value (an integer) represents item priority. If we enqueue `['human', 1]` with a priority of `1` (assuming lower priorities are given precedence) it would then be the first item to be dequeued. The collection would look like this:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

We’ve started writing a `PriorityQueue` in the code editor. You will need to add an `enqueue` method for adding items with a priority, a `dequeue` method for removing and returning items, a `size` method to return the number of items in the queue, a `front` method to return the element at the front of the queue, and finally an `isEmpty` method that will return `true` if the queue is empty or `false` if it is not.

The `enqueue` should accept items with the format shown above (`['human', 1]`) where `1` represents the priority. `dequeue` and `front` should return only the item's name, not its priority.

# --hints--

Your `PriorityQueue` class should have a `enqueue` method.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

Your `PriorityQueue` class should have a `dequeue` method.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

Your `PriorityQueue` class should have a `size` method.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

Your `PriorityQueue` class should have a `front` method.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

Your `PriorityQueue` class should have an `isEmpty` method.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

Your `PriorityQueue` class should correctly keep track of the current number of items using the `size` method as items are enqueued and dequeued.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    test.enqueue(['Jon Snow', 1]);
    var size1 = test.size();
    test.dequeue();
    var size2 = test.size();
    test.enqueue(['A', 3]);
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    return size1 === 2 && size2 === 1 && test.size() === 4;
  })()
);
```

The `front` method should return the correct item at the front of the queue as items are enqueued and dequeued.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    var front1 = test.front();
    test.enqueue(['Jon Snow', 1]);
    var front2 = test.front();
    test.dequeue();
    test.enqueue(['A', 3]);
    var front3 = test.front();
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    test.dequeue();
    var front4 = test.front();
    return (
      front1 === 'David Brown' &&
      front2 === 'Jon Snow' &&
      front3 === 'David Brown' &&
      front4 === 'A'
    );
  })()
);
```

The `isEmpty` method should return `true` when the queue is empty.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 1]);
    test.enqueue(['B', 1]);
    test.dequeue();
    var first = test.isEmpty();
    test.dequeue();
    return !first && test.isEmpty();
  })()
);
```

The priority queue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 5]);
    test.enqueue(['B', 5]);
    test.enqueue(['C', 5]);
    test.enqueue(['D', 3]);
    test.enqueue(['E', 1]);
    test.enqueue(['F', 7]);
    var result = [];
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    return result.join('') === 'EDABCF';
  })()
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
