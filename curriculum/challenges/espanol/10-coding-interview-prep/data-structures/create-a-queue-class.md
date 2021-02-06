---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO (First-In First-Out) principle. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element at the front of the queue is allowed to be removed.

We could use an array to represent a queue, but just like stacks, we want to limit the amount of control we have over our queues.

The two main methods of a queue class is the enqueue and the dequeue method. The enqueue method pushes an element to the tail of the queue, and the dequeue method removes and returns the element at the front of the queue. Other useful methods are the front, size, and isEmpty methods.

# --instructions--

Write an `enqueue` method that pushes an element to the tail of the queue, a `dequeue` method that removes and returns the front element, a `front` method that lets us see the front element, a `size` method that shows the length, and an `isEmpty` method to check if the queue is empty.

# --hints--

Your `Queue` class should have a `enqueue` method.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

Your `Queue` class should have a `dequeue` method.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

Your `Queue` class should have a `front` method.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

Your `Queue` class should have a `size` method.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

Your `Queue` class should have an `isEmpty` method.

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

The `dequeue` method should remove and return the front element of the queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.dequeue() === 'Smith';
  })()
);
```

The `front` method should return value of the front element of the queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.front() === 'Smith';
  })()
);
```

The `size` method should return the length of the queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

The `isEmpty` method should return `false` if there are elements in the queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return !test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
